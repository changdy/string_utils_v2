#!/usr/bin/env node

/**
 * Build JSONCrack static files from source and copy into the Electron project.
 * Clones the jsoncrack.com monorepo, builds the www app (Next.js static export),
 * and copies the output to json-crack/ directory.
 *
 * Usage:
 *   node scripts/build-jsoncrack.js [--version <tag>]
 *
 * Environment variables:
 *   JSONCRACK_VERSION  - Git tag to checkout (default: latest main)
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const JSONCRACK_DIR = path.join(PROJECT_ROOT, 'json-crack');
const REPO = 'https://github.com/AykutSarac/jsoncrack.com.git';

const VERSION = process.argv.includes('--version')
  ? process.argv[process.argv.indexOf('--version') + 1]
  : process.env.JSONCRACK_VERSION || null;

// ── Helpers ──────────────────────────────────────────────────────────────

function run(cmd, opts = {}) {
  console.log(`[build-jsoncrack] > ${cmd}`);
  execSync(cmd, { stdio: 'pipe', windowsHide: true, ...opts });
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

  try {
    // 1. Clone repo
    console.log('[build-jsoncrack] Cloning repository...');
    const cloneCmd = VERSION
      ? `git clone --depth 1 --branch ${VERSION} "${REPO}" "${tmpDir}"`
      : `git clone --depth 1 "${REPO}" "${tmpDir}"`;
    run(cloneCmd);

    // 2. Ensure pnpm is available
    console.log('[build-jsoncrack] Ensuring pnpm is available...');
    try {
      run('corepack enable', { cwd: tmpDir });
      run('corepack prepare pnpm@latest --activate', { cwd: tmpDir });
    } catch {
      // Fallback: try npm install -g pnpm
      console.log('[build-jsoncrack] corepack not available, installing pnpm via npm...');
      run('npm install -g pnpm@latest');
    }

    // 3. Install dependencies
    console.log('[build-jsoncrack] Installing dependencies (this may take a while)...');
    run('pnpm install', { cwd: tmpDir, timeout: 300000 });

    // 4. Build www app
    console.log('[build-jsoncrack] Building www app...');
    run('pnpm build:www', { cwd: tmpDir, timeout: 600000 });

    // 5. Verify build output
    const outDir = path.join(tmpDir, 'apps', 'www', 'out');
    if (!fs.existsSync(outDir)) {
      throw new Error(`Build output not found at ${outDir}`);
    }
    if (!fs.existsSync(path.join(outDir, 'editor.html'))) {
      console.warn('[build-jsoncrack] WARNING: editor.html not found in build output.');
      // List contents for debugging
      const items = fs.readdirSync(outDir);
      console.log('[build-jsoncrack] Build output contents:', items.join(', '));
    }

    // 6. Clean and create target dir
    if (fs.existsSync(JSONCRACK_DIR)) {
      fs.rmSync(JSONCRACK_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(JSONCRACK_DIR, { recursive: true });

    // 7. Copy build output to json-crack/
    console.log('[build-jsoncrack] Copying build output...');
    cpDir(outDir, JSONCRACK_DIR);

    // 8. Verify
    if (!fs.existsSync(path.join(JSONCRACK_DIR, 'editor.html'))) {
      console.error('[build-jsoncrack] WARNING: editor.html not found after copy!');
    }

    console.log('[build-jsoncrack] Done! Static files extracted to json-crack/');
  } finally {
    // 9. Cleanup temp directory
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
