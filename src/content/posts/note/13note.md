---
title: "JavaScript数据类型检测的四种方式"
pubDatetime: 2021-02-23
description: "- 使用 typeof 检测检测数据类型，首先返回的都是一个字符串，其次字符串中包含了对应的数据类型"
draft: false
tags:
  - "NOTE"
  - "笔记"
---

#### 一、typeof 用来检测数据类型的运算符

```javascript
console.log(typeof 12)
var num = '123'
console.log(typeof num)
```

- 使用 typeof 检测检测数据类型，首先返回的都是一个字符串，其次字符串中包含了对应的数据类型

- 例如："number"、"string"、"boolean"、"boolean"、"undefined"、"function"、"object"

- 局限性：typeof null -> "object" 不能剧具体的细分是数组还是正则，还是对象中其他的值，因为使用 typeof 检测数据类型，对于对象数据类型中的左右的值，最后返回的结果都是"object"

#### 二、instanceof 检测某一个实例是否属于某个类

```javascript
var obj = [12, 23]
console.log(obj instanceof Array)
console.log(obj instanceof RegExp)
```

- 局限性：

  - 1.不能用来检测和处理字面量方式创建出来的基本数据类型值

    对于基本数据类型来说，字面量方式创建出来的结果和实例方式创建出来的结果是有一定的区别的，从严格意义上来讲，只有实例创建出来的结果才是标准的对象数据类型值，也是标准的 Number 这个类的一个实例；对于字面量方式创建出来的结果是基本的数据类型值，不是严谨的实例，但是由于 JavaScript 的松散特点，导致了可以使用 Number.prototype 上提供的方法；

  - 2.instanceof 的特性：只要在当前实例的原型链上，我们用其检测出来的结果都是 true

#### 三、constructor 构造函数 作用和 instanceof 非常的相似

```javascript
var obj = []
console.log(obj.constructor === Array) // true
console.log(obj.constructor === RegExp) // false
```

- constructor 可以处理基本数据类型的检测
- constructor 检测 Object 和 instanceof 不一样，一般情况下是检测不了的
- 对于特殊的数据类型 null 和 undefined，他们的所属类是 Null 和 Undefined，但是浏览器把这两个类保护起来了，不允许我们在外面访问使用
- 局限性：我们可以把类的原型进行重写，在重写的过程中很有可能出现把之前的 constructor 给覆盖了，这样检测出来的结果就是不准确的

#### 四、Object.prototype.toString.call()

- 首先获取 Object 原型上的 toString 方法，让方法执行，并且改变方法中的 this 关键字的指向

- Object.prototype.toString 它的作用是返回当前方法执行主体（方法中 this）所属类的详细信息

  ```javascript
  var obj = { name: '123' }
  console.log(obj.toString()) // ->toString中的this是谁obj，返回的是obj所属类的详细信息->"[object Object]"第一个object代表当前实例是对象数据类型的（这个是固定死的），第二个Object代表的是obj所属的类是Object
  ```
