const solver = {name: "id-join", describe: "ID拼接", nextStep: "id-join"};

solver.check = (logs, arr, jsonFlag) => arr.length && !jsonFlag ? 100 : 0;
solver.transfer = (logs, arr) => {
    if (arr.length === 1) {
        if (logs.includes('"')) {
            logs = logs.replace(/","/g, "$|^").replace('"', "^");
            return logs.substring(0, logs.length - 1) + "$";
        } else if (logs.includes("^")) {
            logs = logs.replace(/\$\|\^/g, ",");
            return logs.slice(1, logs.length - 1);
        } else {
            return '"' + logs.replace(/,/g, '","') + '"';
        }
    } else {
        return '"' + arr.join('","') + '"';
    }
}

// 使用ESM导出
export { solver };