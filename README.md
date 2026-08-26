# Eddie Blog

基于 [AstroPaper](https://github.com/satnaing/astro-paper) 和 [Astro](https://astro.build/) 构建的个人技术博客。

站点：https://uncledrewzhaopeng.github.io/blog/

## 本地开发

```bash
pnpm install
pnpm dev
```

## 验证与构建

```bash
pnpm build
pnpm preview
```

文章位于 `src/content/posts/`，使用以下 Frontmatter：

```yaml
---
title: 文章标题
pubDatetime: 2026-08-26
description: 文章摘要
tags:
  - JavaScript
draft: false
---
```

GitHub Pages 发布路径由 `astro.config.ts` 中的 `base: "/blog"` 配置。推送到 `master` 后，`.github/workflows/deploy.yml` 会构建（含 Pagefind）并发布。
