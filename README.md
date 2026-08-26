# Eddie Blog

基于 [AstroPaper](https://github.com/satnaing/astro-paper) 和 [Astro](https://astro.build/) 构建的个人技术博客。

站点：https://uncledrewzhaopeng.github.io/blog/

## 环境

- Node.js `>= 22.12`
- 包管理器只用 **pnpm**（仓库已锁定 `pnpm@9.14.4`）

## 本地开发

```bash
pnpm install
pnpm dev
```

开发地址是 **http://localhost:4321/blog/**，不是站点根路径。

```bash
pnpm build
pnpm preview
```

搜索（Pagefind）在 `pnpm dev` 下不可用，需要 `pnpm build && pnpm preview`。

## 常用文件

| 用途 | 文件 |
| --- | --- |
| 站点标题、作者、社交链接 | `astro-paper.config.ts` |
| GitHub Pages 的 `base: "/blog"` | `astro.config.ts` |
| 关于页 | `src/content/pages/about.md` |
| 文章 | `src/content/posts/` |

## 写文章

在 `src/content/posts/` 下新建 Markdown。子目录名会进入 URL，例如：

`src/content/posts/js_docs/js_docs_1.md` → `/blog/posts/js_docs/js_docs_1/`

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

`title`、`pubDatetime`、`description` 必填。`draft: true` 的文章不会发布。VS Code 里可用片段 `frontmatter` / `template` 插入模板。

更完整的 Frontmatter 和 Markdown 写法见 [AstroPaper 文档](https://github.com/satnaing/astro-paper#readme)。

## 发布

推送到 `master` 后，`.github/workflows/deploy.yml` 会构建（含 Pagefind）并发布到 GitHub Pages。
