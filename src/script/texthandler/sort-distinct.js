const BigNumber = require("bignumber.js");
const solver = {name: "sort-distinct", describe: "排序&去重", nextStep: "id-join"};


solver.check = (logs, arr, jsonFlag) => {
    if (jsonFlag) {
        return 0;
    }
    let setSize = new Set(arr).size;
    return (arr.length === setSize || arr.length === 1) ? 80 : 120;
};
solver.transfer = (logs, arr) => {
    let tempArr = Array.from(new Set(arr));
    if (tempArr.every((x) => new BigNumber(x).toString() !== "NaN")) {
        return tempArr
            .map((x) => new BigNumber(x))
            .sort((a, b) => a.comparedTo(b))
            .map((x) => x.toFixed())
            .join("\n");
    } else {
        return tempArr.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1)).join("\n");
    }
}



export { solver };
