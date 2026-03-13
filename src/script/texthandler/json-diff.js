import JSONbig from "json-bigint";
import {ipcRenderer} from 'electron';


const solver = {
    name: "json-diff",
    describe: "使用VSCode对比JSON差异"
};

solver.check = (logs, arr, jsonFlag) => {
    if (!jsonFlag) return 0;

    try {
        const parsed = JSON.parse(logs);
        if (!Array.isArray(parsed) || parsed.length !== 2) return 0;
        if (typeof parsed[0] !== 'object' || parsed[0] === null) return 0;
        if (Object.keys(parsed[0]).length <= 1) return 0;
        return 200;
    } catch (e) {
        return 0;
    }
};

solver.transfer = (logs, arr) => {
    const parsed = JSONbig.parse(logs);
    ipcRenderer.send('open-diff', {
        obj1: parsed[0],
        obj2: parsed[1]
    });
    return "正在打开差异对比... (如未找到VSCode将使用默认编辑器)";
};


export { solver };
