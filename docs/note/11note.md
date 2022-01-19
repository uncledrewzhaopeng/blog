---
title: Vue中 this.$set 的用法
date: 2020-04-17
categories:
  - note_docs
tags:
  - NOTE
---

- Vue.set( target, propertyName/index, value )
  - target 要更改的数据源（可以是一个对象或者数组）
  - key 要更改的具体数据（索引）
  - value 重新赋的值

```html
<template>
  <div>
    <div v-for="(item,index) in testList" :key="index">
      <span>{{item.text}}</span>
    </div>
    <button @click="changeData">更改数据</button>
  </div>
</template>
```

```javascript
<script>
export default{
	data() {
		return{
			testList: [
				{id: 0,text: '测试1'},
				{id: 1,text: '测试2'},
				{id: 2,text: '测试3'},
			]
		}
	},
	mounted() {
		// 对象的值更改了，但是视图没有更新
		this.testList[0] = {id: 4,text: '测试5'};
	},
	methods:{
		changeData() {
			let newObj = this.testList[0];
   			newObj.text = '我是更改后的测试5';
   			// 对象的值更改了，视图也更新了
   			this.$set(this.testList,0,newObj);
		}
	}
}
</script>
```
