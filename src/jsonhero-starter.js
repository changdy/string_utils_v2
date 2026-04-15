import { createRequire } from 'module';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(__filename);

const JSONHERO_PORT = 13001;
let jsonheroUrl = null;

export function startJsonHeroServer() {
  process.env.NODE_ENV = 'production';

  // Ensure jsonhero/dist/ is treated as CommonJS (root package.json has "type": "module")
  const distDir = path.join(__dirname, '..', 'jsonhero', 'dist');
  const pkgFile = path.join(distDir, 'package.json');
  if (!fs.existsSync(pkgFile)) {
    fs.mkdirSync(distDir, { recursive: true });
    fs.writeFileSync(pkgFile, '{"type":"commonjs"}');
  }

  // Prevent auto-start: Electron calls startJsonHero() explicitly
  process.env.JSONHERO_EMBEDDED = '1';

  // require CJS compiled output
  const mod = require('../jsonhero/dist/index.js');

  if (typeof mod.startJsonHero === 'function') {
    // New compiled output: call startJsonHero explicitly
    mod.startJsonHero({ port: JSONHERO_PORT });
  }
  // Old compiled output: require() already auto-started the server (top-level app.listen)

  jsonheroUrl = `http://127.0.0.1:${JSONHERO_PORT}`;
  console.log(`[jsonhero] Server started at ${jsonheroUrl}`);
  return jsonheroUrl;
}

export function getJsonHeroUrl() {
  return jsonheroUrl;
}

export async function saveToJsonHero(jsonStr) {
  if (!jsonheroUrl) {
    throw new Error('jsonhero server not started');
  }
  const title = `json-${Date.now()}`;
  const body = JSON.stringify({ filename: title, rawJson: jsonStr });
  const url = `${jsonheroUrl}/api/create/file`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
  const data = await res.json();

  if (data.success) {
    console.log(`[jsonhero] Created doc: ${jsonheroUrl}${data.data.redirect}`);
    return `${jsonheroUrl}${data.data.redirect}`;
  } else {
    throw new Error(data.error?.message || 'Failed to create jsonhero doc');
  }
}
