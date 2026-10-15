# 中国奶龙中学

`中国奶龙中学.com` 的网站源码（仓库名 SDNL_web）。

站点定位是交互型戏仿站，目标是把当前的一次性跳转改造成可玩的整活网站。

## 现状

- `中国奶龙中学.com` 目前返回 Cloudflare 边缘下发的 301 跳转，目标是 `https://www.sdzx.net/`（成都树德中学站点）
- 仓库内目前只有前端骨架
- 未部署

## 技术栈

| 层     | 选型           | 版本    |
| ------ | -------------- | ------- |
| 构建   | Vite           | 8.3.4   |
| UI     | React          | 19.3.1  |
| 路由   | React Router   | 8.4.0   |
| 样式   | Tailwind CSS   | 4.3.3   |
| 语言   | TypeScript     | 7.0.2   |
| 包管理 | pnpm           | 11.21.0 |

选型说明：

- **Vite 8** 使用 Rolldown 作为打包器，替代 Vite 7 及之前 esbuild（开发）+ Rollup（生产）的分工
- **React Router 8** 为 ESM-only，要求 Node ≥ 22.22.0、React ≥ 19.2.7；`react-router-dom` 已并入 `react-router`，import 一律从 `react-router` 引入
- **Tailwind CSS 4** 通过 `@tailwindcss/vite` 插件接入，采用 CSS-first 配置，项目内没有 `tailwind.config.js`
- **TypeScript 7** 是 Go 原生移植版，移除了 `baseUrl`，路径映射直接写在 `paths` 字段中

## 项目结构

```
index.html            # 入口 HTML，SPA 挂载点
src/
├── main.tsx          # createRoot 挂载 + BrowserRouter
├── App.tsx           # 路由表
└── index.css         # Tailwind 入口
vite.config.ts        # Vite 配置（React / Tailwind 插件、@/* 别名）
tsconfig.json         # TypeScript 配置（strict、@/* 路径映射）
.npmrc                # registry 镜像与 pnpm 行为
pnpm-workspace.yaml   # pnpm 11 生成，记录供应链策略例外条目
```

## 准备工作

- [Node.js](https://nodejs.org/) ≥ 22.22.0（下限由 React Router 8 决定）
- [pnpm](https://pnpm.io/) ≥ 11

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认 5173 端口，带热更新）
pnpm dev
```

构建与本地预览：

```bash
# 类型检查 + 生产构建，产物输出到 dist/
pnpm build

# 本地预览 dist/ 产物
pnpm preview
```

## 命令参考

| 命令             | 说明                                    |
| ---------------- | --------------------------------------- |
| `pnpm dev`       | 启动开发服务器，带热更新                |
| `pnpm build`     | 类型检查 + 生产构建，产物输出到 `dist/` |
| `pnpm preview`   | 本地预览 `dist/` 产物                   |
| `pnpm typecheck` | 只做类型检查，不产出文件                |

## 约定

- `@/*` 映射到 `src/*`，在两个位置分别配置，修改时需同步：`vite.config.ts` 的 `resolve.alias` 与 `tsconfig.json` 的 `paths`
- `.npmrc` 提交了国内 registry 镜像（`registry.npmmirror.com`），克隆本仓库的人都会走镜像；也可以删掉该文件改用官方源
- 全站为单棵 React 树，Context 与状态可跨路由直接共享，不需要 islands 架构那类跨岛状态方案

