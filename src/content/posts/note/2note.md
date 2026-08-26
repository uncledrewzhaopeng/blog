---
title: "Vue+Vant ui实现日期时间选择"
pubDatetime: 2020-02-27
description: "Vant DatetimePicker 时间选择"
draft: false
tags:
  - "NOTE"
  - "笔记"
---

[Vant DatetimePicker 时间选择](https://youzan.github.io/vant/#/zh-CN/datetime-picker)

- 1、安装 Vant ui
  `npm i vant -S`
- 2、在 main.js 中引入 Vant ui

```
	// 引入vant
	import Vant from 'vant'
	import 'vant/lib/index.css'

	Vue.use(Vant)
```

- 3、具体使用 Vant DatetimePicker 组件详解

```javascript
<div class="d_date">
	<van-cell
    title="日期"
    is-link
    :value="timeValue"
     @click="showPopup" />
     <van-popup v-model="show" position="bottom">
	 	<van-datetime-picker
         v-model="currentDate"
         type="datetime"
         :loading="isLoadingShow"
         :min-date="minDate"
         :max-date="maxDate"
         :formatter="formatter"
         @cancel="show = false"
         @confirm="confirmPicker"
          />
	 </van-popup>
</div>
```

```javascript
<script>
export default {
  data() {
    return {
      timeValue: '',
      show: false,
      isLoadingShow: true,
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(2020, 12, 31),
    };
  },
  created() {
    this.getTime(); // 加载页面显示默认时间
  },
  methods: {
	// 显示弹窗
    showPopup () {
      this.show = true
      this.isLoadingShow = true
      setTimeout(() => {
        this.isLoadingShow = false
      }, 500)
    },
    // 确认选择之后的时间
    confirmPicker (val) {
      let year = val.getFullYear()
      let month = val.getMonth() + 1
      let day = val.getDate()
      let hour = val.getHours()
      let minute = val.getMinutes()
      // let second = val.getSeconds()
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      // if (second >= 0 && second <= 9) { second = `0${second}` }
      this.timeValue = `${year}-${month}-${day} ${hour}:${minute}:00`
      console.log(this.timeValue)
      this.show = false
    },
    // 默认显示当前时间
    getTime () {
      let date = new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      let d = date.getDate()
      let h = date.getHours()
      let min = date.getMinutes()
      // let s = date.getSeconds()
      if (m >= 1 && m <= 9) { m = `0${m}` }
      if (d >= 1 && d <= 9) { d = `0${d}` }
      if (h >= 0 && h <= 9) { h = `0${h}` }
      if (min >= 0 && min <= 9) { min = `0${min}` }
      // if (s >= 0 && s <= 9) { min = `0${s}` }
      let time = `${y}-${m}-${d} ${h}:${min}:00`
      this.timeValue = time
  },
    // 日期选项格式化函数
    formatter (type, value) {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      } else if (type === 'hour') {
        return `${value}时`
      } else if (type === 'minute') {
        return `${value}分`
      } else if (type === 'second') {
        return `${value}秒`
      }
      return value
    },
	}
}
</script>
```
