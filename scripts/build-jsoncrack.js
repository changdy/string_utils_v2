#!/usr/bin/env node

/**
 * Build JSONCrack static files from source and copy into the Electron project.
 * Downloads the jsoncrack.com source code from the latest GitHub release,
 * builds the www app (Next.js static export),
 * and copies the output to json-crack/ directory.
 *
 * Usage:
 *   node scripts/build-jsoncrack.js [--version <tag>]
 *
 * Environment variables:
 *   JSONCRACK_VERSION  - Release tag to download (default: latest release)
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const JSONCRACK_DIR = path.join(PROJECT_ROOT, 'json-crack');
const REPO_OWNER = 'AykutSarac';
const REPO_NAME = 'jsoncrack.com';

const VERSION = process.argv.includes('--version')
  ? process.argv[process.argv.indexOf('--version') + 1]
  : process.env.JSONCRACK_VERSION || null;

// ── Helpers ──────────────────────────────────────────────────────────────

function run(cmd, opts = {}) {
  console.log(`[build-jsoncrack] > ${cmd}`);
  const { inherit, ...execOpts } = opts;
  execSync(cmd, { stdio: inherit ? 'inherit' : 'pipe', windowsHide: true, ...execOpts });
}

async function getLatestReleaseTag() {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;
  const headers = { 'User-Agent': 'node-build-script' };
  if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`GitHub API returned ${res.status}: ${res.statusText}`);
  const data = await res.json();
  return data.tag_name;
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const doRequest = (reqUrl) => {
      https.get(reqUrl, { headers: { 'User-Agent': 'node-build-script' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          doRequest(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Download failed with status ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }).on('error', (err) => { fs.unlinkSync(dest); reject(err); });
    };
    doRequest(url);
  });
}

// ── Main ─────────────────────────────────────────────────────────────────

async function main() {
  // Skip if json-crack/ already exists (local dev convenience)
  if (fs.existsSync(path.join(JSONCRACK_DIR, 'editor.html'))) {
    console.log('[build-jsoncrack] json-crack/ already exists, skipping build.');
    console.log('[build-jsoncrack] Delete json-crack/ directory to force re-build.');
    return;
  }

  const tmpDir = path.join(os.tmpdir(), `jsoncrack-build-${Date.now()}`);
  fs.mkdirSync(tmpDir, { recursive: true });

  try {
    // 1. Determine version tag
    const tag = VERSION || (await getLatestReleaseTag());
    console.log(`[build-jsoncrack] Using release tag: ${tag}`);

    // 2. Download source code archive
    const archiveUrl = `https://github.com/${REPO_OWNER}/${REPO_NAME}/archive/refs/tags/${tag}.tar.gz`;
    const archivePath = path.join(tmpDir, 'source.tar.gz');
    console.log('[build-jsoncrack] Downloading source code archive...');
    await downloadFile(archiveUrl, archivePath);

    // 3. Extract archive
    console.log('[build-jsoncrack] Extracting source code...');
    run(`tar -xzf "${archivePath}" -C "${tmpDir}"`);
    fs.unlinkSync(archivePath);

    // Find extracted source directory
    const extractedEntries = fs.readdirSync(tmpDir);
    const sourceDirName = extractedEntries.find(e => e.startsWith(REPO_NAME));
    if (!sourceDirName) throw new Error('Source directory not found after extraction');
    const sourcePath = path.join(tmpDir, sourceDirName);
    console.log(`[build-jsoncrack] Source directory: ${sourceDirName}`);

    // 4. Ensure pnpm is available
    console.log('[build-jsoncrack] Ensuring pnpm is available...');
    try {
      run('corepack enable', { cwd: sourcePath });
      run('corepack prepare pnpm@10.20.0 --activate', { cwd: sourcePath });
    } catch {
      // Fallback: try npm install -g pnpm
      console.log('[build-jsoncrack] corepack not available, installing pnpm via npm...');
      run('npm install -g pnpm@latest');
    }

    // 5. Install dependencies
    console.log('[build-jsoncrack] Installing dependencies (this may take a while)...');
    run('pnpm install', { cwd: sourcePath, timeout: 300000 });

    // 6. Build www app
    console.log('[build-jsoncrack] Building www app...');
    run('pnpm build:www', { cwd: sourcePath, timeout: 600000, inherit: true });

    // 7. Verify build output
    const outDir = path.join(sourcePath, 'apps', 'www', 'out');
    if (!fs.existsSync(outDir)) {
      throw new Error(`Build output not found at ${outDir}`);
    }
    if (!fs.existsSync(path.join(outDir, 'editor.html'))) {
      console.warn('[build-jsoncrack] WARNING: editor.html not found in build output.');
      // List contents for debugging
      const items = fs.readdirSync(outDir);
      console.log('[build-jsoncrack] Build output contents:', items.join(', '));
    }

    // 8. Clean and create target dir
    if (fs.existsSync(JSONCRACK_DIR)) {
      fs.rmSync(JSONCRACK_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(JSONCRACK_DIR, { recursive: true });

    // 9. Copy build output to json-crack/
    console.log('[build-jsoncrack] Copying build output...');
    cpDir(outDir, JSONCRACK_DIR);

    // 10. Verify
    if (!fs.existsSync(path.join(JSONCRACK_DIR, 'editor.html'))) {
      console.error('[build-jsoncrack] WARNING: editor.html not found after copy!');
    }

    console.log('[build-jsoncrack] Done! Static files extracted to json-crack/');
  } finally {
    // 11. Cleanup temp directory
    if (fs.existsSync(tmpDir)) {
      console.log('[build-jsoncrack] Cleaning up temp directory...');
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  }
}

/**
 * Recursively copy a directory.
 */
function cpDir(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      cpDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

main().catch(e => {
  console.error('[build-jsoncrack] Fatal:', e.message);
  process.exit(1);
});
