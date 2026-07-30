---
title: "Vue 实现tabs标签页的切换"
published: 2020-03-11
category: "笔记"
tags: ["NOTE"]
draft: false
---

![效果图](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSDIwZjUwOTUwMzBjMTQxMWE5MmE5ZDI2M2YwODhhZDM5MC5wbmc?x-oss-process=image/format,png)

```html
<template>
  <div class="aside">
    <div
      class="asideList"
      :class="{active:number == index}"
      v-for="(item,index) in list"
      :key="index"
      @click="tabList(index)"
    >
      <div class="asideInfo">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
  <div class="content" v-for="(item,index) in listDetail" :key="index" v-show="number == index">
    <div class="field">
      <p class="title">{{item.name}}</p>
      <el-divider></el-divider>
      <div class="detailInfo" v-show="showDetailInfo">
        <img :src="item.imgUrl" alt />
        <div>
          <p>{{item.textTitle}}</p>
          <p>{{item.textInfo}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
```

```javascript
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          name: "条目1",
          icon: "图片地址"
        },
        {
          id: 1,
          name: "条目2",
          icon: "图标地址"
        },
        {
          id: 2,
          name: "条目3",
          icon: "图标地址"
        },
        {
          id: 3,
          name: "条目4",
          icon: "图标地址"
        }
      ],
      listDetail: [
        {
          id: 0,
          name: "条目1",
          imgUrl:"图标地址",
          textTitle: "标题,",
          textInfo: "信息"
        },
        {
          id: 1,
          name: "条目2",
          imgUrl:"图片地址",
          textTitle: "标题",
          textInfo: "信息"
        },
        {
          id: 2,
          name: "条目3",
          imgUrl:"图片地址",
          textTitle: "标题",
          textInfo: "信息"
        },
        {
          id: 3,
          name: "条目4",
          imgUrl:"图片地址",
          textTitle: "标题",
          textInfo: "信息"
        }
      ],
      number: "0",
      }
    },
  methods:{
    tabList(index) {
      this.number = index;
      console.log(this.number);
    },
  }
 }
```

```html
<style lang="less" scoped>
  .asideList {
    &.active {
      color: #3482fd;
      background: #f4f8fc;
      border-left: 4px solid #307ffd;
    }
  }
</style>
```
