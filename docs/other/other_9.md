---
title: 代码提交规范
date: 2021-12-10
categories:
  - other_docs
tags:
  - OTHER
---

#### 安装 husky(npm 或者 yarn)

`yarn add husky -D`

`npm install -D husky`

#### 初始化 husky

`yarn husky install`

`npx husky install`

#### 新增 commit msg 钩子

`yarn husky add .husky/commit-msg "node scripts/verifyCommit.js"`

`npx husky add .husky/commit-msg "node scripts/verifyCommit.js"`

#### commit-msg 配置文件

```js
const msg = require('fs')
  .readFileSync('.git/COMMIT_EDITMSG', 'utf-8')
  .trim()
const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/
if (!commitRE.test(msg)) {
  if (!mergeRe.test(msg)) {
    console.log('git commit信息校验不通过')
    console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式
      比如 fix: xxbug
      feat(test): add new 
      具体校验逻辑看 scripts/verifyCommit.js
    `)
    process.exit(1)
  }
} else {
  console.log('git commit信息校验通过')
}
```

**\*确保每次上传代码提交日志都符合 type(scope): message 的格式**

# Git 提交代码时添加 emoji 图标

> 使用 git 的开发者都知道提交代码的最简单命令： `git commit -m '此次提交的内容说明'`

> 这是在 commit 时，添加了 emoji 表情说明，我们来看看其命令语法：

## 在 commit 时添加一个 emoji 表情图标

```git
git commit -m ':emoji: 此次提交的内容说明'
```

## 添加多个 emoji 表情图标

```git
git commit -m ':emoji1: :emoji2: :emoji3: 此次提交的内容说明'
```

在提交内容的前面增加了 emoji 标签： **:emoji:**，其中 emoji 是表情图标的标签，列表见下面的附录表格。

| emoji                                   | emoji 代码                   | commit 说明           |
| --------------------------------------- | ---------------------------- | --------------------- |
| :art: (调色板)                          | `:art:`                      | 改进代码结构/代码格式 |
| :zap: (闪电):racehorse: (赛马)          | `:zap:“:racehorse:`          | 提升性能              |
| :fire: (火焰)                           | `:fire:`                     | 移除代码或文件        |
| :bug: (bug)                             | `:bug:`                      | 修复 bug              |
| :ambulance: (急救车)                    | `:ambulance:`                | 重要补丁              |
| :sparkles: (火花)                       | `:sparkles:`                 | 引入新功能            |
| :memo: (备忘录)                         | `:memo:`                     | 撰写文档              |
| :rocket: (火箭)                         | `:rocket:`                   | 部署功能              |
| :lipstick: (口红)                       | `:lipstick:`                 | 更新 UI 和样式文件    |
| :tada: (庆祝)                           | `:tada:`                     | 初次提交              |
| :white_check_mark: (白色复选框)         | `:white_check_mark:`         | 增加测试              |
| :lock: (锁)                             | `:lock:`                     | 修复安全问题          |
| :apple: (苹果)                          | `:apple:`                    | 修复 macOS 下的问题   |
| :penguin: (企鹅)                        | `:penguin:`                  | 修复 Linux 下的问题   |
| :checkered_flag: (旗帜)                 | `:checked_flag:`             | 修复 Windows 下的问题 |
| :bookmark: (书签)                       | `:bookmark:`                 | 发行/版本标签         |
| :rotating_light: (警车灯)               | `:rotating_light:`           | 移除 linter 警告      |
| :construction: (施工)                   | `:construction:`             | 工作进行中            |
| :green_heart: (绿心)                    | `:green_heart:`              | 修复 CI 构建问题      |
| :arrow_down: (下降箭头)                 | `:arrow_down:`               | 降级依赖              |
| :arrow_up: (上升箭头)                   | `:arrow_up:`                 | 升级依赖              |
| :construction_worker: (工人)            | `:construction_worker:`      | 添加 CI 构建系统      |
| :chart_with_upwards_trend: (上升趋势图) | `:chart_with_upwards_trend:` | 添加分析或跟踪代码    |
| :hammer: (锤子)                         | `:hammer:`                   | 重大重构              |
| :heavy_minus_sign: (减号)               | `:heavy_minus_sign:`         | 减少一个依赖          |
| :whale: (鲸鱼)                          | `:whale:`                    | Docker 相关工作       |
| :heavy_plus_sign: (加号)                | `:heavy_plug_sign:`          | 增加一个依赖          |
| :wrench: (扳手)                         | `:wrench:`                   | 修改配置文件          |
| :globe_with_meridians: (地球)           | `:globe_with_meridians:`     | 国际化与本地化        |
| :pencil2: (铅笔)                        | `:pencil2:`                  | 修复 typo             |

参考资料 :

- https://gitmoji.carloscuesta.me/
