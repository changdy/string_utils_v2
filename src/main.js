// main.mjs

// Modules to control application life and create native browser window
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {app, Menu, nativeImage, BrowserWindow, globalShortcut, shell} from 'electron'
import electron from 'electron'
import log from 'electron-log/main.js'
import jsoncrack from './jsoncrack-starter.js'
import { startJsonHeroServer, saveToJsonHero } from './jsonhero-starter.js'
import setupTray from './tray.js'
import fs from 'fs'
import Store from 'electron-store'
import process from 'process'
import { spawn } from 'child_process'
import os from 'os'

// 获取当前文件的目录路径（ES Module 中替代 __dirname）
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 初始化 electron-log，拦截 console 输出到文件
log.initialize()
Object.assign(console, log.functions)

const USER_SCRIPT_DIR = path.join(app.getPath('userData'), 'user-scripts')

const store = new Store()

const PORT_START = 9987;
const PORT_END = 10087;
let port = PORT_START;
let accelerator = store.get("accelerator");
if (!accelerator) {
    accelerator = "CommandOrControl+Alt+D";
    store.set('accelerator', accelerator);
}

let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 740,
        height: 400,
        resizable: false,
        frame: false,
        opacity: 0.9,
        skipTaskbar: true,
        hasShadow: false,
        transparent: true,
        maximizable: false,
        minimizable: false,
        webPreferences: {
            nodeIntegration: true,
            sandbox: false,
            contextIsolation: false,
            preload: path.join(__dirname, 'script/preload.mjs')
        }
    })
    // 加载 index.html
    mainWindow.loadFile('src/page/index.html', {
        query: {
            "is-mac": process.platform === 'darwin'
        }
    });
    mainWindow.webContents.on('before-input-event', (event, input) => {
        // 如果按下了Escape键
        if (input.key === 'Escape') {
            // 隐藏窗口
            mainWindow.hide();
            // 取消默认行为
            event.preventDefault();
        }
    });
    if (!app.isPackaged) {
        mainWindow.webContents.openDevTools();
    }
}

app.commandLine.appendSwitch('wm-window-animations-disabled');


// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    if (!app.requestSingleInstanceLock()) {
        app.quit();
        return;
    }
    loadUserScripts();
    jsoncrack.start(PORT_START, PORT_END)
        .then((actualPort) => { port = actualPort; })
        .catch((err) => console.error('[json-crack] Failed to start:', err));
    startJsonHeroServer()
        .catch((e) => console.warn('[jsonhero] Failed to start, skipping:', e.message));
    app.on("second-instance", _ => mainWindow?.show?.());
    registerShortcut();
    createWindow();
    app.on('activate', () => {
        // 在 macOS 系统内, 如果没有已开启的应用窗口
        // 点击托盘图标时通常会重新创建一个新窗口
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})


// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态, 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

function registerShortcut() {
    return globalShortcut.register(accelerator, () => {
        let tempPoint = electron.screen.getCursorScreenPoint();
        mainWindow.setPosition(tempPoint.x - 180, tempPoint.y - 100);
        mainWindow.show();
    });
}


function loadUserScripts() {
    if (!fs.existsSync(USER_SCRIPT_DIR)) {
        fs.mkdirSync(USER_SCRIPT_DIR, {recursive: true})
    }
    const files = fs.readdirSync(USER_SCRIPT_DIR)
    let userScripts = [];
    for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.JS')) {
            userScripts.push(path.join(USER_SCRIPT_DIR, file));
        }
    }
    store.set('userScripts', userScripts);
}

electron.ipcMain.on('preload-scripts-loaded', (event, arg) => setupTray(mainWindow, arg));
electron.ipcMain.on('hide-window', () => mainWindow.hide());
electron.ipcMain.on('open-url', async (event, logs) => {
        try {
            const jsonheroViewUrl = await saveToJsonHero(logs);
            shell.openExternal(jsonheroViewUrl);
        } catch (e) {
            console.warn('[jsonhero] Fallback to json-crack:', e.message);
        }
        try {
            shell.openExternal(jsoncrack.saveUrl(logs, port));
        } catch (e) {
            console.warn('[json-crack] error', e.message);
        }
    }
);

electron.ipcMain.on('open-diff', async (event, data) => {
    try {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(7);

        const file1Path = path.join(os.tmpdir(), `json-diff-${timestamp}-${random}-1.json`);
        const file2Path = path.join(os.tmpdir(), `json-diff-${timestamp}-${random}-2.json`);

        fs.writeFileSync(file1Path, JSON.stringify(data.obj1, null, 2), 'utf8');
        fs.writeFileSync(file2Path, JSON.stringify(data.obj2, null, 2), 'utf8');

        // Try different methods to open VSCode diff
        const vscodePaths = [
            'code', // Standard PATH command
            'C:\\Program Files\\Microsoft VS Code\\bin\\code.cmd', // Windows default
            'C:\\Users\\' + os.userInfo().username + '\\AppData\\Local\\Programs\\Microsoft VS Code\\bin\\code.cmd', // User install
            '/usr/bin/code', // Linux
            '/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code' // macOS
        ];

        let vscodeOpened = false;
        let lastError = null;

        for (const vscodePath of vscodePaths) {
            try {
                const vscode = spawn(vscodePath, ['--diff', file1Path, file2Path], {
                    detached: true,
                    stdio: 'ignore',
                    shell: true
                });

                vscode.on('error', (err) => {
                    console.log(`VSCode path ${vscodePath} failed:`, err.message);
                });

                vscode.unref();
                vscodeOpened = true;
                console.log(`VSCode opened successfully using: ${vscodePath}`);
                break;

            } catch (error) {
                lastError = error;
                console.log(`Failed to open VSCode with ${vscodePath}:`, error.message);
            }
        }

        if (!vscodeOpened) {
            console.error('Could not find VSCode. Tried paths:', vscodePaths);
            console.error('Last error:', lastError);
            // Fallback: open files in default editor
            shell.openExternal(file1Path);
            shell.openExternal(file2Path);
        }

    } catch (error) {
        console.error('Failed to open diff:', error);
    }
});


electron.ipcMain.handle('reset-hot-key', async (event, arg) => {
        try {
            globalShortcut.unregisterAll();
            store.set('accelerator', arg.key);
            accelerator = arg.key;
            let result = registerShortcut();
            return {
                success: result,
                accelerator: arg.key,
                message: result ? '快捷键设置成功' : '快捷键设置失败'
            };
        } catch (error) {
            return {
                success: false,
                message: `设置失败: ${error.message}`
            };
        }
    }
);