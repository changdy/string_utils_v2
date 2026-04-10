// install-json-hero.js
// 优先从 GitHub Release 下载预构建产物，失败时回退到 clone + install + build

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import axios from 'axios';
import * as tar from 'tar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const JSONHERO_DIR = path.join(PROJECT_ROOT, 'jsonhero-web-node');
const GIT_REPO = 'git@github.com:changdy/jsonhero-web-node.git';

const GITHUB_OWNER = 'changdy';
const GITHUB_REPO = 'jsonhero-web-node';
const ASSET_NAME_PATTERN = /^jsonhero-web-node-dist-.*\.tar\.gz$/;

const API_TIMEOUT = 30000;       // GitHub API 请求超时 30s
const DOWNLOAD_TIMEOUT = 300000;  // 产物下载超时 5min（大文件）

// 临时下载目录
let tempDir = null;

function run(cmd, options = {}) {
    console.log(`> ${cmd}`);
    execSync(cmd, { stdio: 'inherit', ...options });
}

function log(msg) {
    console.log(`[install-json-hero] ${msg}`);
}

// ============================================================
// 原有构建方式：clone + npm install + npm run build
// ============================================================
async function installFromSource() {
    // Step 1: 删除旧的 jsonhero-web-node 目录
    if (fs.existsSync(JSONHERO_DIR)) {
        log('[1/4] Removing existing jsonhero-web-node directory...');
        fs.rmSync(JSONHERO_DIR, { recursive: true, force: true });
        log('Removed.');
    } else {
        log('[1/4] No existing jsonhero-web-node directory found, skipping removal.');
    }

    // Step 2: 从 Git 拉取最新代码
    log(`[2/4] Cloning jsonhero-web-node from ${GIT_REPO}...`);
    run(`git clone ${GIT_REPO} "${JSONHERO_DIR}"`);

    // Step 3: 安装依赖
    log('[3/4] Installing dependencies...');
    run('npm install', { cwd: JSONHERO_DIR });

    // Step 4: 构建项目
    log('[4/4] Building jsonhero-web-node...');
    run('npm run build', { cwd: JSONHERO_DIR });
}

// ============================================================
// GitHub Release API 查询
// ============================================================
async function queryLatestRelease() {
    const tag = process.env.JSONHERO_RELEASE_TAG;
    let apiUrl;
    if (tag) {
        apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/tags/${tag}`;
        log(`查询指定 tag Release: ${tag}`);
    } else {
        apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;
        log('查询最新 Release...');
    }

    log(`API URL: ${apiUrl}`);

    const headers = {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'install-json-hero-script',
    };
    if (process.env.GITHUB_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    let response;
    try {
        response = await axios.get(apiUrl, { headers, timeout: API_TIMEOUT });
    } catch (err) {
        if (err.response) {
            const status = err.response.status;
            if (status === 404) throw new Error(`Release 不存在 (404): ${apiUrl}`);
            if (status === 403) throw new Error(`GitHub API 速率限制 (403)，可设置 GITHUB_TOKEN 环境变量提高限额`);
            throw new Error(`GitHub API 错误 (${status}): ${err.message}`);
        }
        throw new Error(`GitHub API 请求失败: ${err.message}`);
    }

    const release = response.data;
    const asset = release.assets?.find(a => ASSET_NAME_PATTERN.test(a.name));
    if (!asset) {
        throw new Error(`Release ${release.tag_name} 中未找到匹配的产物文件 (${ASSET_NAME_PATTERN.source})`);
    }

    log(`找到 Release: ${release.tag_name} (prerelease: ${release.prerelease})`);
    log(`产物文件: ${asset.name} (${(asset.size / 1024 / 1024).toFixed(1)}MB)`);

    return {
        tagName: release.tag_name,
        isPrerelease: release.prerelease,
        downloadUrl: asset.browser_download_url,
        fileName: asset.name,
        fileSize: asset.size,
    };
}

// ============================================================
// 产物下载与完整性校验
// ============================================================
async function downloadArtifact(releaseInfo) {
    tempDir = path.join(os.tmpdir(), `jsonhero-download-${Date.now()}`);
    fs.mkdirSync(tempDir, { recursive: true });

    const archivePath = path.join(tempDir, releaseInfo.fileName);
    log(`下载产物到: ${archivePath}`);

    const headers = {};
    if (process.env.GITHUB_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const startTime = Date.now();

    try {
        const response = await axios({
            method: 'GET',
            url: releaseInfo.downloadUrl,
            responseType: 'stream',
            headers,
            timeout: DOWNLOAD_TIMEOUT,
        });

        const writer = fs.createWriteStream(archivePath);
        await pipeline(response.data, writer);
    } catch (err) {
        throw new Error(`产物下载失败: ${err.message}`);
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    log(`下载完成，耗时: ${duration}s`);

    // 完整性校验
    const stat = fs.statSync(archivePath);
    if (stat.size === 0) {
        throw new Error('下载的文件大小为 0，文件不完整');
    }
    if (releaseInfo.fileSize && stat.size !== releaseInfo.fileSize) {
        throw new Error(`文件大小不匹配: 期望 ${releaseInfo.fileSize} 字节，实际 ${stat.size} 字节`);
    }
    log(`校验产物完整性... 通过 (${(stat.size / 1024 / 1024).toFixed(1)}MB)`);

    return archivePath;
}

// ============================================================
// 产物解压与结构验证
// ============================================================
async function extractAndVerify(archivePath) {
    // 删除已有的 jsonhero-web-node 目录
    if (fs.existsSync(JSONHERO_DIR)) {
        log('删除旧的 jsonhero-web-node 目录...');
        fs.rmSync(JSONHERO_DIR, { recursive: true, force: true });
    }

    // 创建目标目录
    fs.mkdirSync(JSONHERO_DIR, { recursive: true });

    log(`解压到: ${JSONHERO_DIR}`);

    try {
        await tar.x({
            file: archivePath,
            cwd: JSONHERO_DIR,
            gzip: true,
        });
    } catch (err) {
        // 解压失败时清理不完整目录
        if (fs.existsSync(JSONHERO_DIR)) {
            fs.rmSync(JSONHERO_DIR, { recursive: true, force: true });
        }
        throw new Error(`解压失败: ${err.message}`);
    }

    // 验证产物结构
    log('验证产物结构...');
    const requiredPaths = [
        path.join(JSONHERO_DIR, 'build'),
        path.join(JSONHERO_DIR, 'public'),
        path.join(JSONHERO_DIR, 'server.js'),
        path.join(JSONHERO_DIR, 'node_modules'),
    ];

    const missing = requiredPaths.filter(p => !fs.existsSync(p));
    if (missing.length > 0) {
        // 结构不完整，清理目录
        if (fs.existsSync(JSONHERO_DIR)) {
            fs.rmSync(JSONHERO_DIR, { recursive: true, force: true });
        }
        throw new Error(`产物结构不完整，缺少: ${missing.map(p => path.basename(p)).join(', ')}`);
    }

    log('验证产物结构... 通过');
}

// ============================================================
// 回退与残留清理
// ============================================================
async function fallbackToSource(error) {
    log(`预构建产物下载失败: ${error.message}`);
    log('回退到原有 clone + install + build 方式...');

    // 清理临时下载目录
    if (tempDir && fs.existsSync(tempDir)) {
        try {
            fs.rmSync(tempDir, { recursive: true, force: true });
        } catch (e) {
            // ignore cleanup errors
        }
    }

    // 清理不完整的 jsonhero-web-node 目录
    if (fs.existsSync(JSONHERO_DIR)) {
        const requiredPaths = [
            path.join(JSONHERO_DIR, 'build'),
            path.join(JSONHERO_DIR, 'server.js'),
        ];
        const isComplete = requiredPaths.every(p => fs.existsSync(p));
        if (!isComplete) {
            log('清理不完整的 jsonhero-web-node 目录...');
            fs.rmSync(JSONHERO_DIR, { recursive: true, force: true });
        }
    }

    await installFromSource();
    log('回退构建完成');
}

// ============================================================
// 主流程：优先下载预构建产物，失败回退
// ============================================================
async function installFromRelease() {
    log('尝试从 GitHub Release 下载预构建产物...');

    const releaseInfo = await queryLatestRelease();
    const archivePath = await downloadArtifact(releaseInfo);
    await extractAndVerify(archivePath);

    log(`预构建产物安装成功 (Release: ${releaseInfo.tagName})`);

    // 清理临时下载目录
    if (tempDir && fs.existsSync(tempDir)) {
        try {
            fs.rmSync(tempDir, { recursive: true, force: true });
        } catch (e) {
            // ignore cleanup errors
        }
    }
}

// ============================================================
// 入口
// ============================================================
async function main() {
    try {
        await installFromRelease();
    } catch (error) {
        await fallbackToSource(error);
    }

    console.log('\nJSON Hero installation completed successfully!');
}

main().catch(err => {
    console.error(`\nFatal error: ${err.message}`);
    process.exit(1);
});
