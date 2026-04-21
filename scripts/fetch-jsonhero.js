#!/usr/bin/env node

/**
 * Fetch JSONHero release artifact from GitHub and extract into the Electron project.
 * Only extracts backend/dist/ and backend/public/ (skips node_modules).
 *
 * Usage:
 *   node scripts/fetch-jsonhero.js [--version <tag>] [--repo <owner/repo>]
 *
 * Environment variables:
 *   JSONHERO_VERSION  - Release tag to download (default: latest)
 *   JSONHERO_REPO     - GitHub repo (default: changdy/jsonhero-web-node)
 *   GITHUB_TOKEN      - GitHub token for private repos or higher rate limits
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const JSONHERO_DIR = path.join(PROJECT_ROOT, 'jsonhero');

const REPO = process.env.JSONHERO_REPO || 'changdy/jsonhero-web-node';
const VERSION = process.argv.includes('--version')
  ? process.argv[process.argv.indexOf('--version') + 1]
  : process.env.JSONHERO_VERSION || null;

// ── Helpers ──────────────────────────────────────────────────────────────

function githubApi(path, token) {
  return new Promise((resolve, reject) => {
    const headers = { 'User-Agent': 'fetch-jsonhero-script' };
    if (token) headers['Authorization'] = `token ${token}`;

    const req = https.get(`https://api.github.com${path}`, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return githubApi(new URL(res.headers.location).pathname + new URL(res.headers.location).search, token).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        let body = '';
        res.on('data', c => body += c);
        res.on('end', () => reject(new Error(`GitHub API ${res.statusCode}: ${body}`)));
        return;
      }
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve(JSON.parse(body)));
    });
    req.on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const headers = { 'User-Agent': 'fetch-jsonhero-script' };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers['Authorization'] = `token ${token}`;

    const follow = (url) => {
      const req = https.get(url, { headers }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          follow(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Download failed: ${res.statusCode}`));
          return;
        }
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => { stream.close(); resolve(); });
        stream.on('error', reject);
      });
      req.on('error', reject);
    };
    follow(url);
  });
}

// ── Main ─────────────────────────────────────────────────────────────────

async function main() {
  // Skip if jsonhero/ already exists (local dev convenience)
  if (fs.existsSync(path.join(JSONHERO_DIR, 'dist', 'index.js'))) {
    console.log('[fetch-jsonhero] jsonhero/ already exists, skipping download.');
    console.log('[fetch-jsonhero] Delete jsonhero/ directory to force re-download.');
    return;
  }

  console.log('[fetch-jsonhero] Fetching release info...');

  // 1. Get release info
  const apiPath = VERSION
    ? `/repos/${REPO}/releases/tags/${VERSION}`
    : `/repos/${REPO}/releases/latest`;

  let release;
  try {
    release = await githubApi(apiPath, process.env.GITHUB_TOKEN);
  } catch (e) {
    console.error(`[fetch-jsonhero] Failed to fetch release: ${e.message}`);
    console.error('[fetch-jsonhero] If jsonhero dir already exists, continuing with existing files.');
    if (fs.existsSync(path.join(JSONHERO_DIR, 'dist'))) {
      console.log('[fetch-jsonhero] Using existing jsonhero/ directory.');
      return;
    }
    process.exit(1);
  }

  console.log(`[fetch-jsonhero] Release: ${release.tag_name}`);

  // 2. Find tar.gz asset
  const asset = release.assets.find(a => a.name.endsWith('.tar.gz'));
  if (!asset) {
    console.error('[fetch-jsonhero] No .tar.gz asset found in release.');
    process.exit(1);
  }

  console.log(`[fetch-jsonhero] Downloading: ${asset.name} (${(asset.size / 1024 / 1024).toFixed(1)} MB)`);

  // 3. Download
  const tmpFile = path.join(PROJECT_ROOT, `_jsonhero_tmp_${Date.now()}.tar.gz`);
  await downloadFile(asset.browser_download_url, tmpFile);

  // 4. Clean and create target dir
  if (fs.existsSync(JSONHERO_DIR)) {
    fs.rmSync(JSONHERO_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(JSONHERO_DIR, { recursive: true });

  // 5. Extract only backend/dist/ and backend/public/ from the tarball
  //    The tarball structure: backend/dist/..., backend/public/..., backend/package.json, ...
  //    We strip the "backend/" prefix and place into jsonhero/
  console.log('[fetch-jsonhero] Extracting dist/ and public/...');

  try {
    // Use tar to extract only the paths we need, stripping the "backend/" prefix
    execSync(
      `tar -xzf "${tmpFile}" -C "${JSONHERO_DIR}" --strip-components=1 ` +
      `--include="backend/dist" --include="backend/public"`,
      { stdio: 'pipe', windowsHide: true }
    );
  } catch {
    // Fallback: try older tar syntax (some tar versions don't support --include)
    try {
      // Extract everything then remove what we don't need
      execSync(
        `tar -xzf "${tmpFile}" -C "${JSONHERO_DIR}" --strip-components=1`,
        { stdio: 'pipe', windowsHide: true }
      );
      // Remove unwanted items (node_modules, package.json, README, LICENSE)
      for (const item of ['node_modules', 'package.json', 'README.md', 'LICENSE']) {
        const p = path.join(JSONHERO_DIR, item);
        if (fs.existsSync(p)) {
          fs.rmSync(p, { recursive: true, force: true });
        }
      }
    } catch (e2) {
      console.error('[fetch-jsonhero] tar extraction failed:', e2.message);
      // Try node-based extraction as last resort
      console.log('[fetch-jsonhero] Trying Node.js based extraction...');
      await extractWithNode(tmpFile, JSONHERO_DIR);
    }
  }

  // 6. Cleanup
  fs.unlinkSync(tmpFile);

  // 7. Verify
  if (!fs.existsSync(path.join(JSONHERO_DIR, 'dist', 'index.js'))) {
    console.error('[fetch-jsonhero] WARNING: dist/index.js not found after extraction!');
    process.exit(1);
  }
  if (!fs.existsSync(path.join(JSONHERO_DIR, 'public'))) {
    console.warn('[fetch-jsonhero] WARNING: public/ directory not found (frontend may not work).');
  }

  // 8. Ensure dist/package.json exists so jsonhero is treated as CommonJS at runtime.
  //    Without this, the packaged app (asar) cannot create it on the fly and fails with ENOTDIR.
  const distPkgFile = path.join(JSONHERO_DIR, 'dist', 'package.json');
  if (!fs.existsSync(distPkgFile)) {
    fs.writeFileSync(distPkgFile, '{"type":"commonjs"}');
    console.log('[fetch-jsonhero] Created dist/package.json (commonjs).');
  }

  console.log('[fetch-jsonhero] Done! Extracted to jsonhero/');
}

/**
 * Fallback Node.js-based tar.gz extraction (no native tar dependency).
 * Uses zlib + tar-stream-like manual parsing. For simplicity, falls back to
 * requiring the 'tar' npm package if available.
 */
async function extractWithNode(tmpFile, destDir) {
  try {
    // Try using the 'tar' package if installed (dynamic import for ESM compatibility)
    const tar = await import('tar');
    await tar.x({
      file: tmpFile,
      cwd: destDir,
      strip: 1,
    });
  } catch {
    console.error('[fetch-jsonhero] Node tar fallback also failed. Please install tar or use a system with tar.');
    process.exit(1);
  }
}

main().catch(e => {
  console.error('[fetch-jsonhero] Fatal:', e.message);
  process.exit(1);
});
