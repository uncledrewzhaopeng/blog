---
title: "Vue element-ui点击增加或删除下拉列表"
published: 2020-03-27
category: "笔记"
tags: ["NOTE"]
draft: false
---

[Element-UI 官网](https://element.eleme.cn/#/zh-CN)
[Link 文字链接组件](https://element.eleme.cn/#/zh-CN/component/link)
[Select 选择器组件](https://element.eleme.cn/#/zh-CN/component/select)

```html
<template>
  <div>
  <!-- 添加下拉列表文字链接 -->
    <el-link
    type="primary"
    :underline="false"
    class="el-icon-plus"
    @click="addList"
    >添加下拉列表</el-link>
    <!-- 添加下拉列表文字链接 -->
  </div>
  </div>
  <div class="b_filtercondition" v-for="(item,index) in moreList" :key="index">
    <el-select v-model="test" class="select_fifth">
      <el-option
      v-for="item in testList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      ></el-option>
    </el-select>
    <!-- 删除图标 -->
    <i class="el-icon-delete" @click="removeList(index)"></i>
  </div>
</template>
```

```javascript
<scrpit>
export default {
  data() {
    return {
      test: '测试1', // 默认选中测试1
      moreList: [],
      testList: [
		{value: 0, label: '测试1'},
		{value: 1, label: '测试2'},
		{value: 2, label: '测试3'},
	  ],
    }
  }
}
  methods:{
    // 增加
    addList() {
      this.moreList.push({});
    },
    // 删除
    removeList(index) {
      this.moreList.splice(index,1);
    }
  }
</scrpit>
```
