# 字符串工具 V2

![platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey)
![license](https://img.shields.io/badge/license-ISC-green)
 
 
## 项目简介

![截图](screenshots/Software.png)

`字符串工具 V2` 是一个面向日常开发场景的 `Electron` 托盘工具，核心能力是对**剪贴板文本进行快速识别与转换**。应用启动后默认常驻系统托盘，使用快捷键 `Ctrl+Alt+D` 即可唤醒。

窗口弹出后会自动读取当前剪贴板内容，并根据内置处理器的匹配分数自动选中最合适的功能。按下 `Enter` 或点击按钮即可执行转换，结果会自动写回编辑区并同步复制到剪贴板。

这个项目特别适合下面这些高频场景：

- **SQL 清洗**：批量处理 `DataGrip` 导出的 `UPDATE / INSERT` 语句
- **MyBatis 还原**：从注解或日志中提取可执行 SQL
- **JSON 辅助处理**：字段抽取、结构预览、对象差异对比
- **文本整理**：排序去重、ID 拼接、命名风格转换
- **私有工具扩展**：通过用户脚本把团队内部的小工具挂进侧边栏

## 使用方式

1. **复制文本**：先把待处理内容放到剪贴板
2. **唤醒窗口**：按默认快捷键 `Ctrl+Alt+D`
3. **确认功能**：程序会自动选中一个处理器，你也可以点击左侧图标手动切换
4. **执行处理**：按 `Enter` 或点击界面按钮
5. **拿到结果**：转换后的文本会自动复制回剪贴板

补充说明：

- **窗口行为**：按 `Esc` 或切走焦点时窗口会自动隐藏
- **托盘菜单**：可控制功能显隐、设置开机启动、修改快捷键、打开用户脚本目录
- **无联网依赖**：运行阶段的 JSON 预览服务均在本地启动

## 功能一览

| 功能 | 说明                                                  | 预览 |
|------|-----------------------------------------------------|------|
| SQL 数据提取 | 针对 `DataGrip` 等工具导出的 `UPDATE / INSERT` 语句批量提取目标值    | ![SQL提取](screenshots/Sql_Extract.gif) |
| 排序并去重 | 对多行进行排序及去重                                          | ![排序并去重](screenshots/Sort_Distinct.webp) |
| 命名规则转换 | 在 `camelCase`、`snake_case`、`PascalCase` 等风格之间切换     | ![命名转换](screenshots/Naming_Convention.webp) |
| MyBatis 注解提取 | 从 `@Select / @Update / @Insert / @Delete` 注解中还原 SQL | ![注解提取](screenshots/Mybatis_Annotation.webp) |
| MyBatis 日志解析 | 从 mybatis 日志中拼接出可执行 SQL                             | ![日志提取](screenshots/Mybatis_Log.webp) |
| JSON 预览 | 同时尝试打开本地 `jsonhero` 和 `jsoncrack` 预览 JSON           | ![JSON预览](screenshots/JSON_View.webp) |
| JSON 字段抽取 | 适合对象数组场景，执行时优先提取 `id`，否则提取每项的第一个字段；自动识别更偏向单字段对象数组   | ![JSON提取](screenshots/JSON_Extract.webp) |
| ID 拼接 | 在换行、逗号和 `"a","b"` 形式之间快速切换                          | ![ID拼接](screenshots/ID_Join.webp) |
| JSON Diff | 将包含两个对象的 JSON 数组交给 `vscode` 做可视化对比                  | ![json-diff.webp](screenshots/json-diff.webp) |

## JSON 预览与对比说明

项目在启动时会尝试拉起两个本地 HTTP 服务，无需依赖公网：

- **[jsoncrack](https://github.com/AykutSarac/jsoncrack.com)**：以节点图形式查看 JSON 结构，监听 `9987-10087` 之间的可用端口
- **[jsonhero](https://jsonhero.io/)**：以树形视图查看 JSON，监听 `13001-13101` 之间的可用端口

说明：

- **JSON 预览**：会优先尝试打开 `jsonhero`，同时也会打开 `jsoncrack`
- **JSON Diff**：输入必须是一个包含两个对象的 JSON 数组，例如 `[{...}, {...}]`
- **VS Code 依赖**：`JSON Diff` 建议本机已安装 `VS Code`，并可使用 `code` 命令

## 下载安装

前往 [Releases](../../releases) 页面下载对应平台安装包：

- **Windows**: `setup.exe`
- **macOS (Intel)**: `*-x64.dmg`
- **macOS (Apple Silicon)**: `*-arm64.dmg`
- **Linux**: `*.AppImage`


## 开发


### 本地运行

```bash
# 安装依赖
npm install

# 启动桌面应用
npm start
```

### 准备内嵌 JSON 预览资源

如果你是首次克隆仓库，则需要拉取 `jsoncrack / jsonhero` 资源，执行命令如下：

```bash
# 拉取/更新本地 JSONHero 发行产物
npm run fetch:jsonhero

# 下载并构建 JSONCrack 静态资源
npm run build:jsoncrack
```


### 打包

```bash
# 打包安装文件（不发布）
npm run build

# 仅输出目录结构，便于本地检查
npm run app:dir
```

### 项目结构

```text
src/
  main.js                 Electron 主进程入口
  tray.js                 托盘菜单、开机启动、快捷键设置
  jsoncrack-starter.js    本地 JSONCrack 服务启动器
  jsonhero-starter.js     本地 JSONHero 服务启动器
  page/                   主界面页面资源
  script/preload.mjs      剪贴板读取、处理器注册、执行流程
  script/texthandler/     内置文本处理器
scripts/
  build-jsoncrack.js      下载并构建 JSONCrack 静态资源
  fetch-jsonhero.js       拉取 JSONHero 发布产物
.github/workflows/
  build.yml               多平台构建与 Release 发布流程
```

### 自动发布

仓库已经配置 GitHub Actions 自动发布流程：

- **触发条件**：向 `master` 分支推送代码
- **版本判断**：比较 `package.json` 的版本号与最新 `v*` tag
- **构建平台**：Windows、Linux、macOS x64、macOS arm64
- **发布结果**：自动打 tag、上传构建产物并创建 GitHub Release

## 自定义脚本

项目支持把自定义处理器挂到侧边栏中。应用启动时会扫描用户数据目录下的 `user-scripts` 文件夹，并自动加载其中的脚本。

最方便的方式是直接通过托盘菜单中的 **“打开用户脚本目录”** 找到这个目录。

注意：**新增或修改脚本后需要重启应用**，因为扫描逻辑发生在应用启动阶段。

### 图标

每个脚本需要配套一个同名的 `.svg` 图标文件，并和脚本放在同一目录下。例如：

- **脚本**：`my-tool.js`
- **图标**：`my-tool.svg`

图标会显示在侧边工具栏中，`solver.name` 也会作为图标和样式的唯一标识。

### 脚本结构

每个脚本必须导出一个 `solver` 对象，包含以下字段：

```js
const solver = {
  name: "my-tool",          // 唯一标识，同时用于匹配图标（my-tool.svg）
  describe: "我的工具",    // 描述文本，显示为图标的 alt 提示
  nextStep: "id-join",    // 可选，处理完成后自动切换到指定处理器
  style: ".my-tool {}",   // 可选，注入到页面的 CSS
};

// check(logs, arr, jsonFlag) → number
// 判断当前文本和当前处理器的匹配程度，数值越大越容易被自动选中
// logs: 原始文本
// - arr: 按换行符分割后的数组
// - jsonFlag: 文本是否为 JSON 格式
solver.check = (logs, arr, jsonFlag) => {
  return arr.length > 0 && !jsonFlag ? 100 : 0;
};

// transfer(logs, arr, jsonFlag) → string
// 执行实际处理，返回结果文本（会自动写入剪贴板）
// 参数同 check
solver.transfer = (logs, arr, jsonFlag) => {
  return arr.join(",");
};

export { solver };
```

脚本运行时，应用会预注入以下能力：

- **`require`**：可直接加载应用已安装的依赖
- **`CryptoJS`**：来自 `crypto-js`
- **`nodeCrypto`**：Node.js `crypto`
- **`forge`**：来自 `node-forge`

建议约定：

- **`name`**：保持简短且稳定，会影响图标匹配和功能标识
- **`check`**：只负责判断匹配度，不要在这里做重计算或副作用操作
- **`transfer`**：返回最终文本；返回值会被写入编辑区并复制到剪贴板
- **`nextStep`**：适合串联流程，例如“抽取 -> 去重 -> 拼接”

## 技术栈与关键依赖

| 依赖 | 用途 |
|------|------|
| [electron](https://www.electronjs.org/) | 桌面应用外壳、托盘、全局快捷键、窗口管理 |
| [electron-builder](https://www.electron.build/) | 多平台安装包构建 |
| [express](https://github.com/expressjs/express) | 内嵌 `jsoncrack` 本地 HTTP 服务 |
| [electron-store](https://github.com/sindresorhus/electron-store) | 持久化配置，如快捷键、功能显隐、开机启动 |
| [json-bigint](https://github.com/sidorares/json-bigint) | 处理包含大整数的 JSON 数据 |
| [bignumber.js](https://github.com/MikeMcl/bignumber.js) | 数值排序时保持精度 |
| [lru-cache](https://github.com/isaacs/node-lru-cache) | 缓存传给 `jsoncrack` 的 JSON 数据 |
| [electron-log](https://github.com/megahertz/electron-log) | 记录主进程与渲染进程日志 |
| [crypto-js](https://github.com/brix/crypto-js) / [node-forge](https://github.com/digitalbazaar/forge) | 为自定义脚本和加解密相关场景提供能力 |