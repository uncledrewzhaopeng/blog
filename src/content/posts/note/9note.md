---
title: "Vue 实现点击弹窗以外的地方关闭弹窗"
pubDatetime: 2020-04-16
description: "<div class=\"icon\" @click.prevent.stop=\"showPop = !showPop\"> <i class=\"el-icon-plus\"></i> </div>"
draft: false
tags:
  - "NOTE"
  - "笔记"
---

```html
<template>
  <div class="test" @click="cancelPop($event)">
    <!-- 打开弹窗代码区域 -->
    <div class="icon" @click.prevent.stop="showPop = !showPop">
      <i class="el-icon-plus"></i>
    </div>
    <!-- 打开弹窗代码区域 -->

    <!-- 弹窗代码区域 -->
    <div class="test_pop" v-show="showPop"></div>
    <!-- 弹窗代码区域 -->
  </div>
</template>
```

```javascript
<script>
export default{
	data() {
		return{
			showPop: false
		}
	},
	methods:{
		// 点击 .test_pop 以外的地方隐藏弹窗
    	cancelPop(event) {
	      let tp = document.querySelector(".test_pop");
	      if (tp) {
	        if (!tp.contains(event.target)) {
	          this.showPop = false;
	        }
	      }
    	},
	}
}
</script>
```
