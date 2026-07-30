---
title: "正则捕获的实现方法"
published: 2021-02-23
category: "笔记"
tags: ["NOTE"]
draft: false
---

#### exec 正则用来捕获的一个方法

```javascript
// exec正则用来捕获的一个方法
// 在正则捕获的时候，我们加修饰符"g",可以取消捕获时候的懒惰性
// 原理: 正则中有一个lastIndex属性，它代表下一次正则捕获的开始索引，但是默认这个值永远是0，也就是不管执行几次exec都是重新从头开始捕获，所以获取的都是同一个结果，而加了修饰符"g"，每一次exec执行完成之后，我们的lastIndex属性的值都等于当前捕获内容的后一个索引，下一次从这之后继续查找捕获，这样就可以一次次的执行，把想要的结果都捕获到了
var reg = /\d+?/g
var str = 'zpp2021huiwang2020'
// console.log(reg.lastIndex);
// var ary = reg.exec(str);
// console.log(ary);
// console.log(reg.lastIndex);
// ary = reg.exec(str);
// console.log(ary);
var res = reg.exec(str),
  ary = []
while (res) {
  ary.push(res[0])
  res = reg.exec(str)
}
console.log(ary) // -> ["2", "0", "2", "1", "2", "0", "2", "0"]
```

#### match 正则用来捕获的一个方法

```javascript
// match正则用来捕获的一个方法
var reg = /\d+?/g
var str = 'zpp2021huiwang2020'
var ary = str.match(reg)
console.log(ary) // -> ["2", "0", "2", "1", "2", "0", "2", "0"]
// match一次性把符合大正则的都存放在一个数组中，如果也需要捕获小分组中的内容，match是捕获不到的
String.prototype.match = function(reg) {
  // this --> str 我们想操作的那个字符串 --> 原型上的方法，里面的this都是我们要操作的当前实例
  var ary = []
  var res = reg.exec(this)
  while (res) {
    ary.push(res[0])
    reg.exec(this)
  }
  return ary
}
```

```js
// 分组捕获
// 在正则捕获的时候，我们添加分组不仅仅可以把大正则匹配的内容捕获，而且还可以把小分组代表的子正则匹配的内容一起捕获出来
// (?:xxx) 分组只匹配不捕获
var str = 'my name is {0}, my age is {1}, i come from {2}, i love {3}~~'
var ary = ['张三', '28', '广东', 'javaScript']
// {0} --> ary[0] "张三"
// {1} --> ary[1] 28
// ... 我们在捕获的时候，不仅要获取{0}，而且还要获取里面的数字0，并且每一次exec执行捕获的时候，同时获取这两个
var reg = /{(\d+)}/g
console.log(reg.exec(str)) // --> res = ["{0}","0"....] res[1]获取的是小正则捕获的内容 ary[res[1]]代表的是对应数组中的内容，我们用这个把大正则捕获的res[0]"{0}"替换掉即可
```

```js
// replace 字符串实现替换的方法，但是一般情况下，执行一次只替换一个，我们为了替换所有的符合的，需要用正则来处理
var str = 'pengzhaopeng'
str = str.replace(/peng/g, '朋') // 在整个字符串中，把符合正则的都替换成"朋"
// 如果你想替换的话，首先你要把"peng"获取到，然后再替换 --> 如果replace第一个参数是一个正则，那么涉及到了正则的捕获
/*
lastIndex = 0
首先捕获"peng"，捕获一次，replace就执行一次替换的操作
lastIndex = 4
再次捕获"peng"，捕获一次，replace就只想一次替换的操作
lastIndex = 12
捕获不到内容了，结果为null，replace就不在执行替换的操作了
*/

// 如上所述的一样，我们当前replace执行两次，相当于第二个参数function也执行两次
// 在每一次function执行的时候，在函数中return后面返回的是啥，就是把大正则捕获的内容替换成啥
str = str.replace(/peng/g, function(content, index, input) {
  console.log(arguments)
  // arguments当前函数的参数集合，我们发现和正则每一次捕获的结果很相似，这个函数默认会有三个参数
  // content: 每一次捕获的内容
  // index: 每一次捕获的开始索引
  // input: 原始字符串
  return content.toUpperCase()
})
console.log(str)

var str = 'my name is {0}, my age is {1}, i come from {2}, i love {3}~~'
var ary = ['张三', '28', '广东', 'javaScript']
var reg = /{(\d+)}/g
str = str.replace(reg, function(larCon, smallCon, index, input) {
  // larCon --> arguments[0] 每一次执行replace大正则捕获的内容
  // smallCon --> arguments[1] 每一次执行replace小正则捕获的内容
  return ary[arguments[1]]
})
console.log(str)
```

```js
// replace案例
// 获取一个字符串中出现次数最多的字符，并且获取出现的次数
var str = 'zhaopengpeng'
// 1) 获取每一个字符出现的次数
var obj = {}
str.replace(/[a-z]/gi, function() {
  var val = arguments[0]
  obj[val] >= 1 ? (obj[val] += 1) : (obj[val] = 1)
})
// 2) 获取最多出现的次数
var maxNum = 0
for (var key in obj) {
  obj[key] > maxNum ? (maxNum = obj[key]) : null
}
// 3) 把所有符合出现maxNum次数的都获取到
var ary = []
for (var key in obj) {
  obj[key] === maxNum ? ary.push(key) : null
}
console.log('出现次数最多的字符是:' + ary.toString() + '~出现了 ' + maxNum + ' 次')

// var str = "http://kbs.sports.qq.com/kbsweb/game.htm?mid=1000000&cid=1467086&app=1.0";
// 把URL中的参数都获取到，并且保存成如下格式
/*
var obj = {
	mid: "1000000",
	cid: "1467086",
	app: "1.0"
};
*/
var str = 'http://kbs.sports.qq.com/kbsweb/game.htm?mid=1000000&cid=1467086&app=1.0'
var reg = /([^?&=]+)=([^?&=]+)/g
// replace实现方法
var obj = {}
str = str.replace(reg, function() {
  obj[arguments[1]] = arguments[2]
  return obj
})
console.log(obj)

// exec实现方法
var obj = {}
var res = reg.exec(str)
while (res) {
  obj[res[1]] = res[2]
  res = reg.exec(str)
}
console.log(obj)
```
