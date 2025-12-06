import {ipcRenderer} from "electron";

let hotkey = {
    isMac: new URLSearchParams(window.location.search).get('is-mac') === "true",
    changeHotKey: false,
};


function handleKeyDownCapture(event) {
    if (!hotkey.changeHotKey) {
        return;
    }

    event.preventDefault(); // 阻止浏览器默认行为（如滚动）

    // 忽略单独的修饰键（只记录组合）
    // if (['Control', 'Alt', 'Shift', 'Meta'].includes(event.key)) return;

    // 收集按下的修饰键（顺序：Meta > Ctrl > Alt > Shift）
    const modifiers = [];
    if (event.metaKey) modifiers.push('Meta');
    if (event.ctrlKey) modifiers.push('Control');
    if (event.altKey) modifiers.push('Alt');
    if (event.shiftKey) modifiers.push('Shift');

    let shortcut;
    if (['Control', 'Alt', 'Shift', 'Meta'].includes(event.key)) {
        shortcut = [...modifiers].join('+');
    } else {
        // 格式化主按键（处理特殊键）
        let key = formatKey(event.key);
        shortcut = [...modifiers, key].join('+');
    }
    // 更新显示
    hotkey.textBoard.innerText = formatDisplayShortcut(shortcut);
}



// 格式化主按键（e.g., "ArrowUp" → "Up"）
function formatKey(rawKey) {
    const keyMap = {
        ' ': 'Space',
        'ArrowUp': 'Up',
        'ArrowDown': 'Down',
        'ArrowLeft': 'Left',
        'ArrowRight': 'Right',
        'Escape': 'Esc',
        'Enter': 'Enter',
        'Tab': 'Tab',
        'Backspace': 'Backspace',
        'Delete': 'Del'
    };

    // F1-F12 保持原样
    if (/^F\d{1,2}$/.test(rawKey)) return rawKey;

    // 字母/数字转大写
    if (/^[a-zA-Z0-9]$/.test(rawKey)) return rawKey.toUpperCase();

    // 特殊键映射
    return keyMap[rawKey] || rawKey;
}

// 格式化显示字符串（处理平台差异）
function formatDisplayShortcut(shortcut) {
    return shortcut
        .replace('Meta+', isMac ? '⌘ ' : '⊞ ')
        .replace('Control+', 'Ctrl+')
        .replace('Alt+', isMac ? '⌥ ' : 'Alt+')
        .replace('CmdOrCtrl+', isMac ? '⌘ ' : 'Ctrl+');
}




function showInfo(hotKey) {
    // let str = `您当前的快捷键为 ${hotKey}\n请直接按下您想设置的新快捷键，然后点击Enter按钮`;
    // textBoard.innerText = str;
}

hotkey.init = textBoard => {
    this.textBoard = textBoard;
    let hotkey = this;
    document.addEventListener('keydown', handleKeyDownCapture);

    ipcRenderer.on('change-hot-key', _ => {
        hotkey.changeHotKey = true;
    })
}

hotkey.cancel = () => this.changeHotKey = false;


export {hotkey};