const solver = {name: "naming-conversion", describe: "命名规则转换"};

solver.check = (logs, arr, jsonFlag) => {
    if (jsonFlag) {
        return 0;
    }
    return arr.every(x => /^[a-zA-Z\-_]+$/.test(x)) ? 150 : 0;
};
solver.transfer = (logs, arr) => {
    let number = detectStyle(arr);
    console.log("进度到那里了?" + number)
    if (number === 0) {
        return arr.map(x => {
            return x.toLowerCase()
                .split(/[-_]/g) // 用 _ 或 - 分割字符串
                .map((word, index) => // 首个单词转小写，后续单词首字母转大写
                    index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(''); // 拼接字符串
        }).join("\n");
    }
    if (number === 1) {
        return arr.map(x => {
            return x
                .replace(/([A-Z])/g, match => "_" + match)
                .split(/[-_]/g) // 用 _ 或 - 分割字符串
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('')
                .replace(/([A-Z])/g, match => "_" + match.toLowerCase())
                .slice(1)
        }).join("\n");
    }
    if (number === 2) {
        return arr.map(x => {
            return x.split(/[-_]/g) // 用 _ 或 - 分割字符串
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join('')
        }).join("\n");
    }
}


function detectStyle(arr) {
    // 2 驼峰 帕斯卡 1 帕斯卡 下划线 0 下划线 驼峰
    let countIndex = [0, 0, 0];
    arr.forEach(x => {
        if (x.includes("-") || x.includes("_")) {
            countIndex[0]++;
        } else if (/[A-Z]/.test(x.charAt(0))) {
            countIndex[1]++;
        } else if (x.toUpperCase() !== x) {
            countIndex[2]++;
        } else {
            countIndex[2]++;
            countIndex[0]++;
        }
    })
    let max = countIndex[0], index = 0;
    for (let i = 0; i < countIndex.length; i++) {
        if (max < countIndex[i]) {
            max = countIndex[i];
            index = i;
        }
    }
    return index;
}


export { solver };
