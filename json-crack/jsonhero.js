let style = document.createElement('style');
style.type = 'text/css';

// 定义 CSS 规则
let css = `
  #jsonhero-btn {
    position: fixed;
    bottom: 30px;
    right: 70px;
    opacity: 0.65;
    transition: opacity 0.3s ease-in-out;
    z-index: 100;
  }

  #jsonhero-btn:hover {
    opacity: 1;
  }

  #jsonhero-btn img {
    width: 70px;
    height: 70px;
  }
`;


style.appendChild(document.createTextNode(css));  // 适用于标准浏览器
document.head.appendChild(style);

const btnHtml =
    `
<button id="jsonhero-btn">
    <img  src="jsonhero.svg" alt="SVG Image">
</button>
    `
document.body.insertAdjacentHTML('afterbegin', btnHtml);

const button = document.querySelector("#jsonhero-btn");

button.addEventListener('click', redirect, false);

function redirect() {
    let uuid = getUUID();
    fetch(`${window.location.origin}/api/json-hero?uuid=${uuid}`)
        .then((response) => response.json())
        .then((result) => window.open(result.url))
}

function getUUID() {
    // 获取查询参数
    const searchParams = new URLSearchParams(window.location.search);
    const jsonUrl = searchParams.get('json');

    // 如果存在json查询参数，则进一步解析
    if (jsonUrl) {
        const nestedUrlObj = new URL(jsonUrl);
        const nestedSearchParams = new URLSearchParams(nestedUrlObj.search);
        return nestedSearchParams.get('uuid');
    }
    return null;
}