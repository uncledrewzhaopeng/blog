---
title: Vue 实现展开收起功能
date: 2020-03-27
categories:
  - note_docs
tags:
  - NOTE
---

```html
<template>
  <div>
    <div v-for="(item,index) in testList">{{item}}</div>
    <div @click="showDisplay = !showDisplay">{{textSwitch}}</div>
  </div>
</template>
```

```javascript
<script>
export default {
  data() {
    return {
      displayList:[
        {id: 0, name: "测试1},
        {id: 1, name: "测试2},
        {id: 2, name: "测试3},
        {id: 3, name: "测试4},
        {id: 4, name: "测试5},
        {id: 5, name: "测试6},
       ], // 展示的数据
      showDisplay :false,
      }
    }
  computed:{
    testList() {
      // 当数据不需要完全显示的时候
      if(this.showDisplay == false){
        let testList = []; // 定义一个空数组
        // 先显示前三个
        if(this.displayList.length > 3){　　　　　　　
          for(var i = 0;i < 3;i++){
            testList.push(this.displayList[i])
         }
        }else{
          testList = this.displayList;
     }
       return testList; // 返回当前数组
     }else{
    return this.displayList;
   }
  },
    textSwitch() {
     // 文字进行处理
     if(this.showDisplay == false){　　　　　　　　　　　
      return '显示更多'
     }else{
      return '收起'
     }
  }
 }
}
</script>
```
