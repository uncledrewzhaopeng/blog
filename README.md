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

GitHub Pages 发布路径由 `astro.config.mjs` 中的 `base: "/blog"` 配置。
