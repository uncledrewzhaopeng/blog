---
title: Vue+Vant ui实现图片预览
date: 2020-02-27
categories:
  - note_docs
tags:
  - NOTE
---

[Vant 图片预览](https://youzan.github.io/vant/#/zh-CN/image-preview)

- 1、在所需要使用的组件里面引用
  `import { ImagePreview } from 'vant';`
- 2、具体使用详解

```javascript
// 通过函数传参的方式把图片数组和位置索引放入到 ImagePreview 配置对象里面
<div v-for="(item,index) in device.imgs" :key="index">
	<img :src="item" @click="sceneImg(device.imgs,index)"/>
</div>
```

```javascript
<script>
import { ImagePreview } from "vant"; // 引入Vant图片预览组件
export default {
data() {
    return {
    };
  },
methods:{
    // 图片预览
    sceneImg(images,index) {
      ImagePreview({
        images:images, //需要预览的图片 URL 数组
        showIndex:true, //是否显示页码
        loop:false, //是否开启循环播放
        startPosition:index //图片预览起始位置索引
      })
    },
  }
}
</script>
```
