---
title: "Vue + element ui 实现复制和打开链接功能"
published: 2020-04-17
category: "笔记"
tags: ["NOTE"]
draft: false
---

```html
<template>
  <div class="demo">
    <div class="demo_input">
      <el-input v-model="link"></el-input>
    </div>
    <div class="demo_button">
      <el-button type="primary" @click="copyUrl">复制链接</el-button>
      <el-button @click="openUrl(link)">打开链接</el-button>
    </div>
  </div>
</template>
```

```javascript
<script>
export default {
	data() {
		return{
			link: 'https://blog.csdn.net/weixin_43244049/article/details/105578800', // 输入框默认链接
		}
	},
	methods: {
		// 复制链接
	    copyUrl() {
	      const input = document.createElement("input");
	      document.body.appendChild(input);
	      input.setAttribute("value", this.link);
	      input.select();
	      if (document.execCommand("copy")) {
	        document.execCommand("copy");
	      }
	      document.body.removeChild(input);
	      this.$zero.ToastSuccess('已复制至系统剪切板');
	    },
	    // 新标签页打开链接
	    openUrl(url) {
	      window.open(url, "_blank");
	    },
	}
}
</script>
```
