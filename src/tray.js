// tray.js (保持你的现有逻辑，但移除顶层Tray创建)
import path from 'node:path'
import {Tray, Menu, nativeImage, app, shell} from 'electron'
import Store from 'electron-store'
import {fileURLToPath} from 'node:url'
import {dirname} from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const store = new Store()
let windows = null;
let tray = null;
const USER_SCRIPT_DIR = path.join(app.getPath('userData'), 'user-scripts')


function clickButton(item) {
    let value = item.value;
    let checked = item.checked;
    let skipList = store.get('skip-list') ?? [];
    if (checked) {
        skipList = skipList.filter(item => item !== value);
    } else {
        skipList.push(value);
    }
    store.set('skip-list', skipList);
    windows.webContents.send('toggle-show-solver', {name: value, checked});
}


// 导出初始化函数（在app ready后调用）
export default function setupTray(mainWindow, arg) {
    windows = mainWindow;
    // 1. 创建图标

    let iconPath = path.join(__dirname, 'assets', 'app-icon', 'tray', 'tray-icon.png');
    if (process.platform === 'darwin') {
        // macOS 必须用模板图像
        iconPath = path.join(__dirname, 'assets', 'app-icon', 'tray', 'trayTemplate.png');
    }
    const icon = nativeImage.createFromPath(iconPath)

    // 2. 创建Tray实例（此时app已就绪）
    tray = new Tray(icon)
    tray.setToolTip('字符串小工具')
    let skipList = store.get('skip-list') ?? [];
    let solvers = JSON.parse(arg.solvers);
    const arr = solvers.map(x => {
            return {
                label: x.describe,
                type: 'checkbox',
                value: x.name,
                checked: !skipList.includes(x.name),
                click: clickButton
            }
        }
    )


    // 3. 设置上下文菜单
    const contextMenu = Menu.buildFromTemplate([
        ...arr,
        {type: 'separator'},
        {
            label: '打开用户脚本目录',
            click: () => {
                shell.openPath(USER_SCRIPT_DIR).then(error => {
                    if (error) {
                        console.error('打开目录失败:', error)
                    }
                })
            }
        },
        {
            label: '设置快捷键',
            click: () =>{
                windows.center();
                windows.webContents.send('change-hot-key');
                windows.show();
            }
        },
        {
            label: '退出',
            click: () => app.quit()
        }
    ])
    tray.setContextMenu(contextMenu)

    // 4. 点击事件处理
    tray.on('click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide()
        } else {
            mainWindow.show()
            mainWindow.focus()
        }
    })
    return tray
}

app.on('will-quit', () => tray.destroy());