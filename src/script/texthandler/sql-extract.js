const solver = {name: "sql-extract", describe: "搭配datagrip,从sql中提取数据", nextStep: "sort-distinct"};

solver.check = (logs, arr, jsonFlag) => {
    if (jsonFlag) {
        return 0;
    }
    return arr.every((x) => x.startsWith("UPDATE") || x.startsWith("INSERT ")) ? 300 : 0;
}

solver.transfer = (logs, arr) => {
    if (arr.every((x) => / SET  WHERE /.test(x))) {
        arr = arr.map((x) => {
            return x
                .replace(/^UPDATE.+?= /, "")
                .replace(/;$/, "")
                .replace(/^'|^`|'$|`$/g, "");
        });
    } else if (arr.every((x) => x.startsWith("INSERT "))) {
        arr = arr.map((x) => {
            return x
                .replace(/^.+\) VALUES \(/, "")
                .replace(/\);$/, "")
                .replace(/^'|'$/g, "");
        });
    } else {
        arr = arr.map((x) => {
            return x
                .replace(/^UPDATE .+?= /, "")
                .replace(/;$/, "")
                .replace(/ where.+/i, "")
                .replace(/^'|^`|'$|`$/g, "");
        });
    }
    return arr.join("\n");
}

solver.style =
    `
#fun-list .sql-extract .fun-icon {
    margin-top: 5px;
    margin-left: 4px;
}`;


export { solver };
