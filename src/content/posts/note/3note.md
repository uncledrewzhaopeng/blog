---
title: "Vue+Vant ui实现图片上传"
published: 2020-02-29
category: "笔记"
tags: ["NOTE"]
draft: false
---

[Vant 图片上传](https://www.csdn.net/)

- 1、安装 Vant ui
  `npm i vant -S`
- 2、在 main.js 中引入 Vant ui

```
	// 引入vant
	import Vant from 'vant'
	import 'vant/lib/index.css'

	Vue.use(Vant)
```

- 3、具体使用 Vant Uploader 组件详解

```javascript
<div class="d_photo">
	<p>图片上传</p>
	<van-uploader v-model="fileList" :after-read="afterRead" multiple />
</div>
```

```javascript
export default {
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    afterRead(file) {
      //文件读取完成后的回调函数
      let content = file
      let formData = new FormData()
      if (Array.isArray(content)) {
        console.log('file', file)
        content.forEach((item) => {
          formData.append('file', item.file)
        })
      } else {
        formData.append('file', content.file)
      }
      console.log(content)
      //获取formdata表单所有的数据
      console.log('formData对象', formData)
      console.log('file', formData.getAll('file'))
      this.$api.file
        .uploadimg({
          url: 'upload',
          files: formData,
        })
        .then((res) => {
          console.log(res)
          console.log('返回地址', res.file)
          // this.fileList = res.file;
        })
    },
  },
}
```
