import {ipcRenderer} from "electron";

const hotkey = {
    isMac: new URLSearchParams(window.location.search).get('is-mac') === "true",
    changeHotKey: false,
    key: '',
    codeMap: {
        'Backquote': '`',
        'Minus': '-',
        'Equal': '=',
        'BracketLeft': '[',
        'BracketRight': ']',
        'Backslash': '\\',
        'Semicolon': ';',
        'Quote': "'",
        'Comma': ',',
        'Period': '.',
        'Slash': '/',
        'Space': 'Space',
        'ArrowUp': 'Up',
        'ArrowDown': 'Down',
        'ArrowLeft': 'Left',
        'ArrowRight': 'Right',
        'Escape': 'Esc',
        'Insert': 'Ins',
        'Delete': 'Del'
    },
    init(textBoard) {
        this.textBoard = textBoard;
        let hotkey = this;
        this.handleKeyDownCapture = this.handleKeyDownCapture.bind(this);
        document.addEventListener('keydown', this.handleKeyDownCapture);
        ipcRenderer.on('change-hot-key', (event, arg) => {
            hotkey.changeHotKey = true;
            this.textBoard.innerText = `当前快捷键: ${arg.accelerator}\n请直接按下新快捷键，然后点击Enter按钮`;
        })
    },
    cancel() {
        this.changeHotKey = false;
    },
    async resetKey() {
        let key = this.key;
        const result = await ipcRenderer.invoke('reset-hot-key', { key });
        if (result.success) {
            this.textBoard.innerText = `快捷键: ${key}注册成功`;
        } else {
            this.textBoard.innerText = `快捷键: ${key}注册失败`;
        }
    },
    handleKeyDownCapture(event) {
        if (!this.changeHotKey) {
            return;
        }
        event.preventDefault();

        // 1. 获取修饰键
        const parts = [];
        if (event.ctrlKey) parts.push('Ctrl');
        if (event.altKey) parts.push('Alt');
        if (event.shiftKey) parts.push('Shift');
        if (event.metaKey) parts.push('Cmd'); // macOS Command

        // 2. 处理主键逻辑 (核心修改部分)
        // 我们使用 event.code 而不是 event.key
        // event.code 的值类似: "Digit4", "KeyA", "Backslash"
        const code = event.code;

        // 如果按下的仅仅是修饰键本身，则不进行处理
        let funKey = ['ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'ShiftLeft', 'ShiftRight', 'MetaLeft', 'MetaRight'].includes(code);

        let mainKey = '';

        // 场景 A: 字母 (KeyA -> A)
        if (code.startsWith('Key')) {
            mainKey = code.slice(3);
        }
        // 场景 B: 数字 (Digit4 -> 4) - 这里解决了 Shift+4 的问题
        else if (code.startsWith('Digit')) {
            mainKey = code.slice(5);
        }
        // 场景 C: 小键盘 (Numpad1 -> Num1)
        else if (code.startsWith('Numpad')) {
            // 也可以根据需求直接显示数字
            mainKey = code.replace('Numpad', 'Num');
        }
        // 场景 D: 功能键 (F1 - F12)
        else if (code.startsWith('F') && code.length <= 3) {
            mainKey = code;
        }
        // 场景 E: 符号和其他键 (使用上面的映射表)
        else {
            mainKey = this.codeMap[code] || event.key.toUpperCase();
        }
        if (!funKey) {
            parts.push(mainKey);
        }

        // 3. 显示与保存
        if (parts.length) {
            this.key = parts.join('+');
            this.textBoard.innerText = `当前快捷键: ${this.key}\n点击Enter按钮即可保存`;
        }
    }
};


export {hotkey};



