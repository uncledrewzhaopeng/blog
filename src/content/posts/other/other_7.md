---
title: "宠域科技"
pubDatetime: 2021-05-25
description: "实现一个方法 func：将一个字典形式的月份数据（字典的键表示月份，值表示某种销量之类的数据，但不一定是数字或字符串）输出到一个数组对象中（数组的 index 表示月份）"
draft: false
tags:
  - "OTHER"
  - "其他"
---

<!-- # 宠域科技 2021-05-25 -->

### 将一个字典形式的月份数据输出到一个数组对象中

> 实现一个方法 func：将一个字典形式的月份数据（字典的键表示月份，值表示某种销量之类的数据，但不一定是数字或字符串）输出到一个数组对象中（数组的 index 表示月份）

```js
const dict = { '1': 192, '2': 314, '4': 603, '5': 574, '6': 580, '9': 403 }
const dict2 = { '1': { user: 105, profit: 30.6 }, '4': { user: 147, profit: 48.3 } }
// 1
function func(dict) {
  const result = []
  for (let i = 1; i < 13; i++) {
    let item = null
    if (dict[i]) item = dict[i]
    result[i - 1] = item
  }
  console.log(result)
}
// 2
function func(dict) {
  const result = []
  for (let i = 0; i < 13; i++) {
    let item = null
    if (dict[i]) item = dict[i]
    result[i] = item
  }

  result.shift()
  console.log(result)
}
func(dict)
```
