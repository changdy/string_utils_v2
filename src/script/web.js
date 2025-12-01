// 通过预加载脚本暴露的 API 监听事件
window.electronAPI.onToggleElement((args, args1) => {
    const element = document.querySelector('.fun-list-item.' + args1.name);
    if (element) {
        element.style.display = args1.checked ? 'block' : 'none';
    }
});