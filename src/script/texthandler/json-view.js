const solver = {name: "json-view", describe: "使用json hero预览"};
import ipcRenderer from 'electron';


solver.check = (logs, arr, jsonFlag) => {
    if (!jsonFlag) {
        return 0;
    }
    JSON.parse(logs);
    return 100;
};
solver.transfer = (logs, arr) => {
    ipcRenderer.send('open-url', logs)
    return logs;
}


export { solver };
