import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { LRUCache } from 'lru-cache';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const html = path.join(__dirname, '..', 'json-crack');

const options = {
    max: 100,
    ttl: 1000 * 60 * 10,
    allowStale: false,
    updateAgeOnGet: false,
    updateAgeOnHas: false,
}

const cache = new LRUCache(options);

// 设置静态文件目录
app.use(express.static(html));

// 设置一个简单的接口
app.get('/api/json-str', (req, res) => {
    const uuid = req.query.uuid;
    res.send(cache.get(uuid));
});

function uuid(len, radix) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const uuid = [];
    let i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        // rfc4122, version 4 form
        let r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}

export function saveUrl(str, port) {
    let uuidStr = uuid(12, 16);
    cache.set(uuidStr, str);
    return `http://127.0.0.1:${port}/editor.html?json=http://127.0.0.1:${port}/api/json-str?uuid=` + uuidStr;
}

export function start(port) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
}

export default {
    saveUrl,
    start
};