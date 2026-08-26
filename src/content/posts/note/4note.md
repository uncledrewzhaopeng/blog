---
title: "Vue 实现checkbox的单选以及全选"
pubDatetime: 2020-02-29
description: "Vue 实现checkbox的单选以及全选"
draft: false
tags:
  - "NOTE"
  - "笔记"
---

```html
<template>
  <div>
    <span>全选</span>
    <input type="checkbox" v-model="checkAll" />
    <div v-for="(item,index) in test" :key="index">
      <span>{{item.name}}</span>
      <input type="checkbox" v-model="item.isSelected" />
    </div>
  </div>
</template>
```

```javascript
<script>
  export default {
  data() {
    return {
      test: [
        { name: "测试1", isSelected: true },
        { name: "测试2", isSelected: true },
        { name: "测试3", isSelected: true },
        { name: "测试4", isSelected: true },
        { name: "测试5", isSelected: true }
      ]
    };
  },
  computed: {
    checkAll: {
      get() {
        // 返回什么结果接赋予给 checkAll 属性
        return this.test.every(item => item.isSelected);
      },
      set(val) {
        // val 是给 checkAll 赋予值的时候传递过来的
        return this.test.forEach(item => (item.isSelected = val));
      }
    }
  }
}
</script>
```
