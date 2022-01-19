---
title: 正则的捕获(懒惰性和贪婪性)
date: 2021-02-23
categories:
  - note_docs
tags:
  - NOTE
---

```javascript
// exec -> 正则的捕获
// 每一次捕获的时候都是先进行默认的匹配，如果没有匹配成功的，那捕获的结果为 null；只有有匹配的内容我们才能捕获到；
// 捕获的内容格式
// 1) 捕获到的内容是一个数组
// 数组中的第一项是当前大正则捕获的内容
// index: 捕获内容在字符串中开始的索引位置
// input: 捕获的原始字符串

// 2、正则捕获的特点
// 1) 懒惰性-> 每一次执行exec只捕获第一个匹配的内容，在不进行任何处理的情况下；在执行多捕获，捕获的还是第一个匹配内容
// lastIndex: 是正则每一次捕获在字符串中开始查找的位置，默认值为0

// 2) 如何解决懒惰性?在正则的末尾加一个修饰符"g"
// 修饰符: g、i、m
// global(g): 全局匹配
// ignoreCase(i): 忽略大小写匹配
// multiline(m): 多行匹配

// 原理: 加了全局修饰符g，正则每一次捕获结束后，我们的lastIndex的值都变为了最新的值，下一次捕获从最新的位置开始查找，这样就可以把所有需要捕获的内容都获取到了
var reg = /\d+/g;
var str = "zhao1999pengpeng713";
console.log(reg.lastIndex); // -> 0
console.log(reg.exec(str)); // ["1999", index: 4, input: "zhao1999pengpeng713", groups: undefined]
console.log(reg.lastIndex); // -> 8
console.log(reg.exec(str)); // ["713", index: 16, input: "zhao1999pengpeng713", groups: undefined]
console.log(reg.lastIndex); // -> 19
console.log(reg.exec(str)); // null

// 3) 自己编写程序获取正则捕获的所有内容(一定不要忘记加g)
var reg = /\d+/g;
var str = "zhao1999pengpeng713";
var ary = [];
var res = reg.exec(str)
while (res) {
    ary.push(res[0]);
    res = reg.exec(str);
}
console.log(ary)

// 4) 贪婪性 正则的每一次捕获都是按照匹配最长的结果捕获的，例如: 1符合正则 1999也符合正则，我们默认捕获的是1999
var reg = /\d+/g; // -> 出现一到多个0-9之间的数字
var str = "zhao1999pengpeng713";
console.log(reg.exec(str)); // ["1999"...]

// 5) 如何解决正则的贪婪性? -> 在量词元字符后面添加一个?即可
// ?在正则中有很多的作用:
// 放在一个普通的元字符后面代表出现0-1次 /\d?/ -> 数字可能出现也可能不出现
// 放在一个量词的元字符后面是取消捕获时候的贪婪性
var reg = /\d+?/g;
var str = "zhao1999pengpeng713";
// console.log(reg.exec(str)); // ["1"...]
var ary = [];
var res = reg.exec(str);
while(res) {
      ary.push(res[0]);
      res = reg.exec(str);
      }
console.log(ary)


// 3、字符串中的match方法 -> 把所有和正则匹配的字符都获取到
var reg = /\d+?/g;
var str = "zhao1999pengpeng713";
var ary = str.match(reg);
console.log(ary)

// 虽然在当前的情况下match比我们的exec更加的简便一些，但是match中存在一些自己处理不了的问题: 在分组捕获的情况下，match只能捕获到大正则匹配的内容，而对于小正则捕获的内容是无法获取的

---------------------------------------------------------

var reg = /\d+/;
var str = "zhao1999pengpeng713";
var res = reg.exec(str);
console.log(res); // ["1999", index: 4, input: "zhao1999pengpeng713", groups: undefined]
// 我们第二次通过exec捕获的内容还是第一个"1999"
res = reg.exec(str);
console.log(res); // ["1999", index: 4, input: "zhao1999pengpeng713", groups: undefined]
```
