---
title: "JS生成UUID的多种方式"
pubDatetime: 2020-12-28
description: "UUID 是 通用唯一识别码 (Universally Unique Identifier)的缩写.其作用是让分布式系统中的所有元素,都能拥有唯一的辨识信息.目前最广泛的,是微软的全局唯一标识符(GUID)."
draft: false
tags:
  - "JS"
  - "JavaScript"
---

<!-- # JS生成UUID的多种方式 -->

> UUID 是 通用唯一识别码 (Universally Unique Identifier)的缩写.其作用是让分布式系统中的所有元素,都能拥有唯一的辨识信息.目前最广泛的,是微软的全局唯一标识符(GUID).

通常,我们一般使用的 UUID 是个 36 位的字符串,其格式如下:

```
xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
```

其中第 15 位数是`4`,第 20 位是`8`到`b`这 4 个中的一个

#### 方法 1:

```javascript
function UUID() {
  let str = '0123456789abcdef'
  let arr = []
  for (let i = 0; i < 36; i++) {
    arr.push(str.substr(Math.floor(Math.random() * 0x10), 1))
  }
  arr[14] = 4
  arr[19] = str.substr((arr[19] & 0x3) | 0x8, 1)
  arr[8] = arr[13] = arr[18] = arr[23] = '-'
  return arr.join('')
}
```

#### 方法 2:

`URL.createObjectURL`静态方法会创建一个`DOMString`,其中包含一个表示参数中给出的对象的 URL. [DOMString](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)是一个 UTF-16 字符串.
其中返回的 URL 中有一段 36 位的字符串,且符合 UUID 的格式.

```javascript
function UUID() {
  let str = URL.createObjectURL(new Blob())
  URL.revokeObjectURL(str)
  return str.split('/')[1]
}
```

#### 方法 3:

先设置好 UUID 的格式,使用正则表达式进行替换

```javascript
function UUID() {
  let str = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  return str.replace(/[xy]/g, (item) => {
    const r = (Math.random() * 0x10) | 0
    const v = item === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(0x10)
  })
}
```
