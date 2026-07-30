---
title: "Vue 绑定Class增加容器的高度"
published: 2020-03-27
category: "笔记"
tags: ["NOTE"]
draft: false
---

```html
<!-- 动态绑定class test不为空的时候增加整个container的高度 -->
<template>
  <div class="container" :class="{active: test != ''}">
    <input type="text" v-model="test" />
  </div>
</template>
```

```javascript
export default {
  data() {
    return {
      test: '',
    }
  },
}
```

```html
<style lang="less" scoped>
  /** container原始高度 */
  .container {
    height: 200px;
  }

  /** test不为空的时候增加整个container的高度 */
  .active {
    height: 500px;
    overflow: auto;
  }
</style>
```
