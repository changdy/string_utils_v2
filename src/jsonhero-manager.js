import { spawn } from 'child_process';
import net from 'net';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let childProcess = null;
let currentPort = null;

function isPortAvailable(port) {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.once('error', () => resolve(false));
        server.once('listening', () => server.close(() => resolve(true)));
        server.listen(port, '127.0.0.1');
    });
}

async function findAvailablePort(start = 3100, end = 3200) {
    for (let port = start; port <= end; port++) {
        if (await isPortAvailable(port)) return port;
    }
    throw new Error(`No available port found in range ${start}~${end}`);
}

async function getJsonHeroPath() {
    // 判断是否在 Electron 打包环境中运行
    // 开发环境：src/jsonhero-manager.js -> ../jsonhero-web-node（项目根目录下）
    // 生产环境：resources/jsonhero-web-node
    const devPath = path.join(__dirname, '..', 'jsonhero-web-node');
    const prodPath = path.join(process.resourcesPath, 'jsonhero-web-node');

    // 优先尝试开发路径
    try {
        const fs = await import('fs');
        if (fs.existsSync(path.join(devPath, 'server.js'))) {
            return devPath;
        }
    } catch (e) {
        // ignore
    }

    return prodPath;
}

function waitForServerReady(port, timeoutMs = 10000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();

        const check = () => {
            if (Date.now() - startTime > timeoutMs) {
                reject(new Error(`JSON Hero service did not become ready within ${timeoutMs}ms`));
                return;
            }

            const req = http.get(`http://127.0.0.1:${port}/`, (res) => {
                resolve(true);
            });

            req.on('error', () => {
                setTimeout(check, 500);
            });

            req.setTimeout(2000, () => {
                req.destroy();
                setTimeout(check, 500);
            });
        };

        // 延迟 1 秒后开始检测，给服务启动时间
        setTimeout(check, 1000);
    });
}

export async function start() {
    const port = await findAvailablePort();
    const jsonheroPath = await getJsonHeroPath();

    // 使用 wrapper 脚本启动，注入 document polyfill 解决 CodeMirror SSR 兼容性问题
    const wrapperPath = path.join(__dirname, 'jsonhero-wrapper.cjs');

    console.log(`Starting JSON Hero service from: ${jsonheroPath}`);
    console.log(`JSON Hero service port: ${port}`);
    console.log(`Using wrapper: ${wrapperPath}`);

    childProcess = spawn('node', [wrapperPath], {
        cwd: jsonheroPath,
        env: { ...process.env, PORT: String(port), NODE_ENV: 'production' },
        stdio: 'pipe'
    });

    childProcess.stdout.on('data', (data) => {
        console.log(`[jsonhero] ${data.toString().trim()}`);
    });

    childProcess.stderr.on('data', (data) => {
        console.error(`[jsonhero] ${data.toString().trim()}`);
    });

    childProcess.on('exit', (code, signal) => {
        console.log(`JSON Hero process exited with code ${code}, signal ${signal}`);
        childProcess = null;
        currentPort = null;
    });

    childProcess.on('error', (err) => {
        console.error(`JSON Hero process error: ${err.message}`);
        childProcess = null;
        currentPort = null;
    });

    // 等待 HTTP 服务就绪
    await waitForServerReady(port);

    currentPort = port;
    return { port, process: childProcess };
}

export function stop() {
    if (childProcess) {
        console.log('Stopping JSON Hero service...');
        childProcess.kill();
        childProcess = null;
        currentPort = null;
    }
}

export function isReady() {
    return childProcess !== null && !childProcess.killed;
}

export function getPort() {
    return currentPort;
}

export default { start, stop, isReady, getPort };
