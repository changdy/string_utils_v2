import {clipboard, ipcRenderer, webFrame, contextBridge} from 'electron';
import {solver as idJoinSolver} from './texthandler/id-join.js';
import {solver as jsonExtractSolver} from './texthandler/json-extract.js';
import {solver as jsonViewSolver} from './texthandler/json-view.js';
import {solver as mybatisExtractSolver} from './texthandler/mybatis-extract.js';
import {solver as namingConversionSolver} from './texthandler/naming-conversion.js';
import {solver as sortDistinctSolver} from './texthandler/sort-distinct.js';
import {solver as sqlExtractSolver} from './texthandler/sql-extract.js';
import {solver as diffJSON} from './texthandler/json-diff.js';
import {hotkey} from './hotkey.mjs';
import {pathToFileURL} from 'url';
import path from 'node:path'
import {createRequire} from 'module';

import Store from 'electron-store';

// 为用户脚本创建 require 函数，指向应用的 node_modules
const appRequire = createRequire(import.meta.url);

const store = new Store();
const solvers = [ idJoinSolver, jsonExtractSolver, jsonViewSolver, mybatisExtractSolver, namingConversionSolver, sortDistinctSolver, sqlExtractSolver,diffJSON];
window.clickTime = 0;
let textBoard = null;
let solverMap;
let skipList = store.get('skip-list') ?? [];

// 使用异步初始化
await initScript().catch(console.error);


async function initScript() {
    const userScripts = store.get('userScripts') ?? [];

    // 预加载常用依赖
    const CryptoJS = appRequire('crypto-js');
    const nodeCrypto = appRequire('crypto');
    const forge = appRequire('node-forge');

    // 注入全局变量和 require 函数
    globalThis.CryptoJS = CryptoJS;
    globalThis.nodeCrypto = nodeCrypto; // 使用 nodeCrypto 避免与 window.crypto 冲突
    globalThis.forge = forge;
    globalThis.require = appRequire; // 允许用户脚本使用 require

    await Promise.all(
        userScripts.map(async (scriptPath) => {
            try {
                const fileUrl = pathToFileURL(scriptPath).href;
                const module = await import(fileUrl);

                if (module.solver) {
                    module.solver.userScripts = true;
                    module.solver.path = scriptPath.toString().replaceAll(/\.js$/gi, "");
                    solvers.push(module.solver);
                }
            } catch (error) {
                console.error(`加载脚本 ${scriptPath} 失败:`, error);
            }
        })
    );
    solverMap = new Map(
        solvers.map(object => [object.name, object])
    );

    ipcRenderer.send('preload-scripts-loaded', {solvers: JSON.stringify(solvers)});
}


function hideWindow() {
    hotkey.cancel();
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
    hotkey.init(textBoard);
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
    if (hotkey.changeHotKey) {
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
        if (hotkey.changeHotKey) {
            hotkey.resetKey();
        } else {
            parseText();
        }
    };
    button.addEventListener('click', animateButton, false);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !hotkey.changeHotKey) {
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


ipcRenderer.on('toggle-show-solver', (event, args) => {
    skipList = store.get('skip-list') ?? [];
    const element = document.querySelector('.fun-list-item.' + args.name);
    if (element) {
        element.style.display = args.checked ? 'block' : 'none';
    }
})
