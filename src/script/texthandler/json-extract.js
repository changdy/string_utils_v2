const JSONbig = require('json-bigint');

const solver = {name: "json-extract", describe: "JSON中抽取数据,优先id", nextStep: "sort-distinct"};

solver.check = (logs, arr, jsonFlag) => {
    if (jsonFlag && logs.startsWith("[")) {
        // 尝试解析JSON
        const jsonObj = JSON.parse(logs);
        // 检查是否是数组
        if (!Array.isArray(jsonObj)) {
            return 0;
        }
        // 遍历数组，并检查每个对象是否只有一个key
        for (let obj of jsonObj) {
            if (typeof obj !== 'object' || obj === null || Array.isArray(obj) || Object.keys(obj).length !== 1) {
                return 0;
            }
        }
        return 300;
    }
    return 0;
};
solver.transfer = (logs, arr) => {
    return JSONbig.parse(logs).map((x) => {
        let arr = Object.keys(x);
        if (arr.includes("id")) {
            return x.id;
        }
        return x[arr[0]];
    }).join("\n");
}


export { solver };

