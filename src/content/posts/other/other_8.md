---
title: "ByteDance"
pubDatetime: 2021-06-06
description: "web-view"
draft: false
tags:
  - "OTHER"
  - "其他"
---

<!-- # 字节跳动(一面)2021-06-06 -->

### 1、混合 app 实现到 h5 的跳转实现原理是什么

> web-view

### 2 、http 状态码有哪几种

> 200 400 404 302 500 502

> 302 表示临时性重定向 访问一个 url 时，被重定向到另一个 url 上 常用于页面跳转。

> 502 服务器作为网关或代理，从上游服务器收到无效响应

### 3、 vue 兄弟组件传值有哪几种方式

> 子传父 父再传子
> eventBus
> vuex

### 4 、vuex 是通过什么实现的

> vuex 采用 MVC 模式中的 model 层，规定所有的数据必须通过 action —> mutation —> state 这个流程进行来改变状态的。再结合 Vue 的数据视图双向绑定实现页面的更新。

### 5 、js 有哪几种数据类型

> Number、String、Boolean、Null、undefined、object、symbol、bigInt

### 6、 es5 和 es6 的继承分别都是怎么实现的

> es5：构造函数、原型和实例的关系：每一个构造函数都有一个原型对象，每一个原型对象都有一个指向构造函数的指针，而每一个实例都包含一个指向原型对象的内部指针

**原型链实现继承**

```js
function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function() {
  return this.property
}
function SubType() {
  this.subproperty = false
}
// 继承了SuperType
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function() {
  return this.subproperty
}
var instance = new SubType()
alert(instance.getSuperValue()) // true;
```

借用构造函数、组合继承、原型式继承等等

> es6：class 类继承

```js
class Colorpoint extends Point {
  constructor(x, y, color) {
    super(x, y) //调用父类的constructor(x,y)
    this.color = color
  }
  toString() {
    //调用父类的方法
    return this.color + ' ' + super.toString()
  }
}
```

### 7 、vue2 和 vue3 有什么区别

> composition-api：组件根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）

> options-api：通过定义`methods`，`computed`，`watch`，`data`等属性与方法，共同处理页面逻辑

### 8 、computed 和 watch 有什么区别

> computed：使用上和 data 对象里的数据属性是同一类的

> computed 擅长处理的场景：**一个数据受多个数据影响**

> watch: 类似于监听机制+事件机制

> watch 擅长处理的场景：**一个数据影响多个数据**

### 9、vue2 是通过什么实现双向数据绑定的

> 本质是一个发布订阅模式，通过 Object.defineProperty 或 Proxy 实现中间存储的转发功能。拦截数据的 getter，setter 操作，绑定数据，并在触发变更时触发更新。

### 10、怎么判断当前变量是一个什么数据类型

> typeof instanceof

**typeof 有什么缺点吗**

> 对于引用数据类型检测返回的都是 object，因为所有对象的原型链最终都指向了 Object

### 11、vue-router 是怎么实现的

> // vue-router 底层是一个 a 标签

> vue-router 通过 hash 与 History interface 两种方式实现前端路由，更新视图但不重新请求页面”是前端路由原理的核心之一

> Vue 中，它是通过 **mode** 这一参数控制路由的实现模式

```js
const router=new VueRouter({
    mode:'history',
    routes:[...]
})
```

> 1.hash ---- 利用 URL 中的 hash（“#”）

> 2.利用 History interface 在 HTML5 中新增的方法

### 操作题：

#### 1、实现一个左边容器宽 100px，右边容器宽度自适应的布局（知道几种写几种 包括 html 代码和 css 代码）

> flex 布局实现 flex 1

#### 2、通过方法获取一个数组的最大深度是多少

let arr = [1,2,3,['n','i',['t',['nihao']]],['a','b']];
console.log(deep(arr)) // 4
function deep() {}

```js
function deep(arr) {
  let max = 0,
    i = 0
  for (; i < arr.length; i++) {
    const el = arr[i]
    if (Array.isArray(el)) {
      max = Math.max(max, deep(el) + 1)
    } else {
      max = Math.max(max, 1)
    }
  }
  return max
}
console.log(deep(arr))
```

> 附加：let arr1 = [1,2,[3],[4]];
