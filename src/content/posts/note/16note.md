---
title: "正则实现时间字符串格式化"
published: 2021-02-23
category: "笔记"
tags: ["NOTE"]
draft: false
---

### 正则实现时间字符串格式化并在原型上实现一个方法

```javascript
// 第一步: 将指定格式的时间字符串中的年月日等信息存入一个数组
var str = '2021-02-23 10:08:50',
  reg = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})$/,
  ary = []
str.replace(reg, function() {
  ary = [].slice.call(arguments).slice(1, 7)
})

// 第二步: 设定好我们目标时间格式，把数组中对应的项替换到指定的区域内
var resStr = '{0}年{1}月{2}日 {3}时{4}分{5}秒'
var reg = /{(\d+)}/g
resStr = resStr.replace(reg, function() {
  var num = arguments[1],
    val = ary[num]
  val.length === 1 ? (val = '0' + val) : void 0
  return val
})
console.log(resStr)

// {0}替换成2021: 我们首先要获取{0}，而且我们还要获取那个0，这个0相当于我们ary数组中的索引，我们要做的就是把对应索引的内容替换我们{0}
// 每一次都会把正则匹配的内容捕获到，如果没有分组，一般是三个参数；但是如果正则中有需要捕获的分组，参数的个数就不确定了，从arguments[1]开始就是对应分组捕获的内容，arguments[0]是大正则捕获的内容
```

```javascript
// 在String的原型上实现一个方法: 把指定时间格式的字符串换成我们想要的各种形式
String.prototype.myFormatTime = function() {
  var reg = /^(\d{4})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:\s+)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})$/g
  var ary = []
  this.replace(reg, function() {
    ary = [].slice.call(arguments).slice(1, 7)
  })
  var format = arguments[0] || '{0}年{1}月{2}日 {3}:{4}:{5}'
  return format.replace(/{(\d+)}/g, function() {
    var val = ary[arguments[1]]
    return val.length === 1 ? '0' + val : val
  })
}
var str = '2021/2/23 15:12:33'
console.log(str.myFormatTime('{0}年{1}月{2}日'))
```
