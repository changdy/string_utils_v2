const solver = {name: "mybatis-extract", describe: "mybatis日志解析"};
const logTypeArr = [/\WDEBUG\W/, /\WINFO\W/, /\WTRACE\W/, /\WWARN\W/, /\WERROR\W/]
const nativeArr = "(Byte),(Float),(Long),(Short),(Double),(Integer),(Boolean),(BigDecimal)".split(',');
const stringArr = "(String),(StringReader),(Timestamp),(LocalDate)".split(',');
import safeEval from 'safe-eval';



const mybatisReg = /@Select|@Update|@Delete|@Insert/;


solver.check = (logs, arr, jsonFlag) => {
    if (jsonFlag) {
        return 0;
    }
    if (mybatisReg.test(logs)) {
        return 300;
    }
    return /=> +Parameters: /.test(logs) && !jsonFlag ? 200 : 0;
};




solver.transfer = (logs, logArr) => {
    if (mybatisReg.test(logs)) {
        logs = logs.replace(/@Select\(|@Update\(|@Delete\(|@Insert\(/, "");
        let s = logs.substring(0, logs.lastIndexOf(")")).trim();
        return safeEval(s);
    }
    let resultArr = [];
    for (let index = logArr.length - 1; index > 0; index--) {
        if (/\(.+?\)$/.test(logArr[index]) && logTypeArr.every(x => !x.test(logArr[index]))) {
            logArr[index - 1] = logArr[index - 1] + "\n" + logArr[index];
            logArr[index] = "";
        }
    }

    for (let index = 0; index < logArr.length; index++) {
        const element = logArr[index];
        if (/=> +Parameters: /.test(element)) {
            let arr = parseParamLog(element);
            if (arr.length > 0) {
                resultArr.push(new MybatisLog(true, arr));
            }
        } else if (/=> +Preparing: /.test(element)) {
            let arr = element.replace(/.+=> +Preparing: /, "").split("?");
            resultArr.push(new MybatisLog(false, arr));
        }
    }
    let sqlArr = [];
    for (let index = 0; index < resultArr.length; index++) {
        const element = resultArr[index];
        if (!element.isParam) {
            if (element.getLength() === 1) {
                sqlArr.push(element.arr[0]);
            } else {
                sqlArr.push(getRealSql(resultArr, index));
            }
        }
    }
    return sqlArr.join("\n");
}

function parseParamLog(paramLog) {
    paramLog = paramLog.replace(/.+=> +Parameters: /, " ")
    if (paramLog.length <= 3) {
        return [];
    }
    let paramValue = [];
    const splitArr = paramLog.split(',');
    let formerValue = '';
    splitArr.forEach(x => {
        x = formerValue + x.replace(/^ /, '');
        formerValue = '';
        if (x.endsWith('(LocalDateTime)')) {
            x = `'${x.replace("T", " ").replace(/\.\d+$/, "")}'`;
        } else if (stringArr.some(y => x.endsWith(y))) {
            x = `'${x.replace(/\n/g, '')}'`;
        } else if (x !== 'null' && nativeArr.every(y => !x.endsWith(y))) {
            formerValue = x;
            return;
        }
        if (x.endsWith("'")) {
            paramValue.push(x.replace(/\(\w+\)'$/, "'"));
        } else {
            paramValue.push(x.replace(/\(\w+\)$/, ""));
        }
    });
    return paramValue;
}

class MybatisLog {
    constructor(isParam, arr) {
        this.isParam = isParam;
        this.isUsed = false;
        this.arr = arr === undefined ? [] : arr;
    }

    push(item) {
        this.arr.push(item);
    }

    setParamUsed() {
        this.isUsed = true;
    }

    effectiveParam(length) {
        return this.isParam && !this.isUsed && this.arr.length === length;
    }

    getLength() {
        return this.arr.length;
    }
}

function getRealSql(resultArr, index) {
    const element = resultArr[index];
    for (let j = index + 1; j < resultArr.length; j++) {
        let params = resultArr[j];
        // 判断是否匹配
        if (params.effectiveParam(element.getLength() - 1)) {
            let paramsArr = params.arr;
            let sql = "";
            // 如果匹配的话, 拼接字符串
            for (let l = 0; l < paramsArr.length; l++) {
                sql += element.arr[l] + paramsArr[l];
            }
            sql += element.arr[paramsArr.length];
            // 判断是否包含`;`
            if (!element.arr[paramsArr.length].includes(";")) {
                sql += ";";
            }
            resultArr[j].setParamUsed();
            return sql;
        }
    }
    return element.arr.join("");
}

export { solver };
