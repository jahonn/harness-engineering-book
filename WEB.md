# Web 发布说明

本仓库同时支持 GitBook Git Sync 与 VitePress 网页发布。

## 本地预览

```bash
npm install
npm run docs:dev
```

## 生产构建

```bash
npm run docs:build
npm run docs:preview
```

## GitBook

GitBook 读取根目录的 `README.md`、`SUMMARY.md` 与 `.gitbook.yaml`。在 GitBook Space 中启用 Git Sync 后，选择本仓库的 `main` 分支即可同步公开预览稿。

## GitHub Pages

仓库包含 `.github/workflows/deploy.yml`。在 GitHub 仓库 Pages 设置中选择 GitHub Actions 作为构建来源后，推送 `main` 分支会自动构建 VitePress 站点。

依据：VitePress 官方部署文档、GitBook Git Sync 官方文档。
