---
title: "el-popover 点击确定或取消的时候隐藏弹窗问题"
published: 2020-04-17
category: "笔记"
tags: ["NOTE"]
draft: false
---

```html
<template>
  <!-- 这个 v-model 赋的值是visibleList[index],index指的是循环的索引，而 visibleList 是一个数组 -->
  <el-popover placement="bottom" width="230" trigger="manual" v-model="visibleList[index]">
    <div class="popInfo">
      <p>默认值</p>
      <el-input v-model="defaultValueInput" placeholder="默认值"></el-input>
      <div class="popCheckbox">
        <span>查询条件是否显示</span>
        <input type="checkbox" />
      </div>
      <div class="popButton">
        <el-button type="primary" @click="closeDefaultPopover(index,'confirm')">确定</el-button>
        <el-button @click="closeDefaultPopover(index,'cancel')">取消</el-button>
      </div>
    </div>
    <i class="el-icon-setting" slot="reference" @click="openDefaultPopover(index)"></i>
  </el-popover>
</template>
```

```javascript
<script>
export default {
	data() {
		return{
			visibleList: [], // 初始化为一个空数组
		}
	},
	methods: {
	/**
     * Vue.set( target, propertyName/index, value )
     * target 要更改的数据源（可以是一个对象或者数组）
     * key 要更改的具体数据（索引）
     * value 重新赋的值
     */
		closeDefaultPopover(index,type) {
	      if(type === 'confirm') {
	        console.log('點擊了確認按鈕');
	        this.$set(this.visibleList, index, false);
	      }else if(type === 'cancel') {
	        console.log('點擊了取消按鈕');
	        this.$set(this.visibleList, index, false);
	      }
	 	},
	    openDefaultPopover(index) {
	      console.log('打開了彈窗');
	      this.$set(this.visibleList, index, true);
	    },
	}
}
</script>
```
