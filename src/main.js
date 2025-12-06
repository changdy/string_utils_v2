// main.mjs

// Modules to control application life and create native browser window
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {app, Menu, nativeImage, BrowserWindow, globalShortcut, shell} from 'electron'
import electron from 'electron'
import express from './express.js'
import axios from 'axios'
import setupTray from './tray.js'
import fs from 'fs'
import Store from 'electron-store'
import process from 'process'

// 获取当前文件的目录路径（ES Module 中替代 __dirname）
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const USER_SCRIPT_DIR = path.join(app.getPath('userData'), 'user-scripts')

const store = new Store()

const port = 9987;
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
    mainWindow.webContents.openDevTools();
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
    express.start(port);
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
    globalShortcut.register(accelerator, () => {
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
        // const options = {
        //     method: 'POST',
        //     timeout: 3000,
        //     url: 'http://175.24.232.123:8787/api/create.json',
        //     data: `{
        //        "title": "json-read",
        //        "content": ${logs}
        //     }`
        // };
        // axios.request(options).then(response => shell.openExternal(response.data.location))
        shell.openExternal(express.saveUrl(logs, port))
    }
);