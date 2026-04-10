// JSON Hero 启动包装脚本
// 解决 Node.js v22+ 中 navigator 全局对象存在但 document 不存在的 SSR 兼容性问题
// @codemirror/view 的浏览器检测代码会检查 typeof navigator != "undefined"
// 在 Node.js v22 中 navigator 已被内置，导致误判为浏览器环境并引用 document
//
// 使用方式：node jsonhero-wrapper.cjs
// 需要在 jsonhero-web-node 目录下运行（cwd 设置为 jsonhero-web-node）

// 在任何模块加载之前注入最小化的 document polyfill
if (typeof document === 'undefined') {
    // CSSStyleDeclaration proxy - 返回空字符串用于任何属性访问
    const styleProxy = new Proxy({}, {
        get: () => '',
        set: () => true,
        has: () => true,
    });

    globalThis.document = {
        documentElement: {
            style: styleProxy,
        },
        createElement: (tag) => ({
            style: styleProxy,
            tagName: tag?.toUpperCase?.() || '',
            appendChild: () => {},
            removeChild: () => {},
            setAttribute: () => {},
            getAttribute: () => null,
            addEventListener: () => {},
            removeEventListener: () => {},
            classList: { add: () => {}, remove: () => {}, contains: () => false },
            ownerDocument: null,
        }),
        createTextNode: (text) => ({ nodeValue: text }),
        createComment: (text) => ({ nodeValue: text }),
        createRange: () => ({
            setStart: () => {},
            setEnd: () => {},
            collapse: () => {},
            cloneRange: () => ({}),
        }),
        createDocumentFragment: () => ({
            appendChild: () => {},
            childNodes: [],
        }),
        activeElement: null,
        body: { style: styleProxy },
        head: {},
        querySelector: () => null,
        querySelectorAll: () => [],
        addEventListener: () => {},
        removeEventListener: () => {},
        implementation: {
            createHTMLDocument: () => ({
                body: { appendChild: () => {}, childNodes: [] },
                close: () => {},
            }),
        },
    };
}

// 加载 jsonhero-web-node 的 server.js（相对于 cwd）
require(`${process.cwd()}/server.js`);
