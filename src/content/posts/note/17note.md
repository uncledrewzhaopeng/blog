---
title: "解决Element UI的el-dialog弹窗打开时css的显示BUG"
pubDatetime: 2021-04-08
description: "\\在使用 el-dialog 弹窗时 body 的内联样式默认会有 padding-right: 5px 解决方法：在 App.vue 样式中加入如下代码"
draft: false
tags:
  - "NOTE"
  - "笔记"
---

> \*在使用 el-dialog 弹窗时 body 的内联样式默认会有 padding-right: 5px
> 解决方法：在 App.vue 样式中加入如下代码

```html
<style lang="less" scoped>
  // .el-popup-parent--hiddren
  body {
    padding-right: 0 !important;
  }
</style>
```
