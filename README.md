# Eddie Blog

基于 [Fuwari](https://github.com/saicaca/fuwari) 和 Astro 构建的个人技术博客。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 验证与构建

```bash
pnpm check
pnpm build
```

文章位于 `src/content/posts/`，使用以下 Frontmatter：

```yaml
---
title: 文章标题
published: 2026-07-30
category: JavaScript
tags: [JavaScript]
draft: false
---
```

## 发布到 GitHub Pages

站点地址：https://uncledrewzhaopeng.github.io/blog/

`astro.config.mjs` 中的 `site` 和 `base: "/blog"` 已按该地址配置。推送到 `master` 后，`.github/workflows/deploy.yml` 会构建（含 Pagefind 搜索索引）并发布。

首次启用（只需一次）：

1. 把本仓库的 `master` 推到 GitHub。
2. 打开仓库 **Settings → Pages**。
3. **Build and deployment → Source** 选 **GitHub Actions**（不要再选 `blog` 分支）。
4. 打开 **Actions**，确认 **Deploy to GitHub Pages** 跑通。若推送时 Source 还没改，可在该 workflow 页点 **Run workflow**。

回滚：Settings → Pages → Source 改回 **Deploy from a branch**，Branch 选 `blog` / `/`。确认 Actions 发布稳定后，可再删 `blog` 分支。
