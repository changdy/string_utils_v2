import {clipboard, ipcRenderer, webFrame, contextBridge} from 'electron';
import {solver as decryptSolver} from './texthandler/decrypt.js';
import {solver as idJoinSolver} from './texthandler/id-join.js';
import {solver as jsonExtractSolver} from './texthandler/json-extract.js';
import {solver as jsonViewSolver} from './texthandler/json-view.js';
import {solver as mybatisExtractSolver} from './texthandler/mybatis-extract.js';
import {solver as namingConversionSolver} from './texthandler/naming-conversion.js';
import {solver as sortDistinctSolver} from './texthandler/sort-distinct.js';
import {solver as sqlExtractSolver} from './texthandler/sql-extract.js';
import {pathToFileURL} from 'url'; // 导入 Node.js 的 URL 工具
import path from 'node:path'

import Store from 'electron-store';

const store = new Store();
const solvers = [decryptSolver, idJoinSolver, jsonExtractSolver, jsonViewSolver, mybatisExtractSolver, namingConversionSolver, sortDistinctSolver, sqlExtractSolver];
window.clickTime = 0;
let textBoard = null;
let solverMap;
let skipList = store.get('skip-list') ?? [];
let changeHotKey = false;


// 使用异步初始化
await initScript().catch(console.error);


async function initScript() {
    const userScripts = store.get('userScripts') ?? [];
    await Promise.all(
        userScripts.map(async (path) => {
            try {
                // 使用动态导入，这是ESM中加载动态模块的正确方式
                const fileUrl = pathToFileURL(path).href;
                const module = await import(fileUrl);

                if (module.solver) {
                    module.solver.userScripts = true;
                    module.solver.path = path.toString().replaceAll(/\.js$/gi, "");
                    solvers.push(module.solver);
                }
            } catch (error) {
                console.error(`加载脚本 ${path} 失败:`, error);
            }
        })
    );
    solverMap = new Map(
        solvers.map(object => [object.name, object])
    );

    // 可选：通知主进程初始化完成
    ipcRenderer.send('preload-scripts-loaded', {solvers: JSON.stringify(solvers)});
}


function hideWindow() {
    changeHotKey = false;
    ipcRenderer.send('hide-window');
    textBoard.innerText = ""
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#fun-list")
        .addEventListener('click', () => hideWindow());
    window.addEventListener("focus", testLog);
    window.addEventListener("blur", () => hideWindow());
    appendToolIcon();
    textBoard = document.getElementById("body-text");
    testLog();
    addAnimate();
})

function appendToolIcon() {
    const wrapper = document.querySelector("#fun-list");
    solvers.forEach(x => {
        let obj;
        if (x.userScripts) {
            let img_path = path.join(x.path + ".svg");
            obj = `
               <div class="fun-list-item ${x.name}">
                   <img class="fun-icon" src="${img_path}" alt="${x.describe}">
               </div>`;
        } else {
            obj = `
               <div class="fun-list-item ${x.name}">
                   <img class="fun-icon" src="../assets/fun-icon/${x.name}.svg" alt="${x.describe}">
               </div>`
        }
        wrapper.insertAdjacentHTML('afterbegin', obj);
        if (skipList.includes(x.name)) {
            wrapper.firstElementChild.style.display = 'none';
        }
        if (x.style) {
            webFrame.insertCSS(x.style);
        }
    });


    document.querySelectorAll('.fun-list-item').forEach(item => {
        item.addEventListener('click', function (event) {
            // 移除当前有.selected类的元素的类
            const currentSelected = document.querySelector('.fun-list-item.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
            }
            // 给点击的元素添加.selected类
            this.classList.add('selected');
            event.stopPropagation(); // 阻止事件冒泡
            parseText();
        });
    });

}


function testLog() {
    if (changeHotKey) {
        return;
    }
    let str = clipboard.readText();
    if (str) {
        str = str.trim().replace(/\r/g, "");
        textBoard.innerText = str;
        const map = new Map();
        let strArr = str.split("\n");
        const jsonFlag = (str.startsWith("[") && str.endsWith("]")) || (str.startsWith("{") && str.endsWith("}"));
        solvers.filter(x => !skipList.includes(x.name)).forEach(x => {
            try {
                map.set(x.name, x.check(str, strArr, jsonFlag))
            } catch (e) {
                console.error(e);
            }
        })
        let maxKey, maxValue = 0;
        map.forEach((value, key) => {
            if (value > maxValue) {
                maxValue = value;
                maxKey = key;
            }
        })
        const currentSelected = document.querySelector('.fun-list-item.selected');
        if (currentSelected) {
            currentSelected.classList.remove('selected');
        }
        document.querySelector(`.fun-list-item.${maxKey}`).classList.add('selected');
    }
}

function addAnimate() {
    const button = document.querySelectorAll(".bubbly-button")[0];
    const animateButton = e => {
        e.preventDefault;
        //reset animation
        button.classList.remove('animate');
        button.classList.add('animate');
        setTimeout(() => button.classList.remove('animate'), 500);
        parseText();
    };
    button.addEventListener('click', animateButton, false);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // 执行当 Enter 键被按下时的逻辑
            animateButton(event);
        }
    });
}

function parseText() {
    let date = Date.now();
    if (window.clickTime > date - 50) {
        return
    } else {
        window.clickTime = date;
    }
    const currentSelected = document.querySelector('.fun-list-item.selected');
    const str = textBoard.innerText;
    const jsonFlag = (str.startsWith("[") && str.endsWith("]")) || (str.startsWith("{") && str.endsWith("}"));
    const strArr = str.split("\n");
    currentSelected.classList.forEach(x => {
        let solver = solverMap.get(x);
        if (solver != null) {
            let result = solver.transfer(str, strArr, jsonFlag);
            textBoard.innerText = result;
            clipboard.writeText(result);
            if (solver.nextStep) {
                if (currentSelected) {
                    currentSelected.classList.remove('selected');
                }
                document.querySelector(`.fun-list-item.${solver.nextStep}`).classList.add('selected');
            }
        }
    })
}

function showInfo(hotKey) {
    let str = `您当前的快捷键为 ${hotKey}\n请直接按下您想设置的新快捷键，然后点击Enter按钮`;
    textBoard.innerText = str;
}


ipcRenderer.on('toggle-show-solver', (event, args) => {
    skipList = store.get('skip-list') ?? [];
    const element = document.querySelector('.fun-list-item.' + args.name);
    if (element) {
        element.style.display = args.checked ? 'block' : 'none';
    }
})

ipcRenderer.on('change-hot-key', _ => {
    changeHotKey = true;
})