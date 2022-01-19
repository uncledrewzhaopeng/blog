---
title: JSON.stringify()还能这么玩
date: 2020-12-28
categories:
  - js_docs
tags:
  - JS
---

<!-- # JSON.stringify()还能这么玩 -->

> 对于 JSON,相信大家应该都蛮熟悉的.不管是前端还是后端的童鞋,应该每天都会和 JSON 打交道吧.JSON 是 JavaScript Object Notation(JavaScript 对象表示法)的缩写,是一种轻量级的文本数据交换格式,比 xml 更小,更快,更易于解析

在 JavaScript 中,JSON 对象包含两个方法,`parse()`和`stringify()`,前者用于反序列化,后者用于序列化.所谓的序列化,通俗的理解就是将一个对象变成字符串,而反序列化就是相对应相反的过程.

今天我们主要来讲讲其中的`stringify()`方法.虽然我们平时也都在用这个方法,但是我们往往会忽略这个方法的更进一步的用法.假如我们能用好这个方法,在实际的开发过程中就可以达到事半功倍的效果.

相信大家在平时的开发过程中,经常会用到`console.log`来打印输出结果.比如我们在下面打印一个对象:

```javascript
let obj = {
  name: 'zhangsan',
  age: undefined,
}
console.log(obj) // // {name: "zhangsan", age: undefined}
```

## 会过滤哪些属性?

可以很清晰的在控制台输出结果,达到我们想要的结果.但是假如我们对象中的有的属性值是没有意义的.比如下面的代码中,年纪是个未定义的属性,我们不想要在控制台输出它该怎么办.这时就可以使用`JSON.stringify()`方法来达到过滤的目的

```javascript
let obj = {
  name: 'zhangsan',
  age: undefined,
}
console.log(JSON.stringify(obj)) // {"name":"zhangsan"}
```

我们可以看到此时的输出结果就已经把属性值为`undefined`这个`age`属性给过滤掉了.而这正是`JSON.stringify()`的其中一个特性.除了`undefined`以外,属性值为任意函数或者`symbol`类型的,也会被过滤掉.

```javascript
let obj = {
  name: 'zhangsan',
  age: undefined,
  f: () => {
    console.log(1)
  },
  symbol: Symbol('This is a symbol'),
}
console.log(JSON.stringify(obj)) // {"name":"zhangsan"}
```

我们再来给这个对象添加一个属性.这次我们添加的是一个数组,而这个数组里面就有一些上面我们提到过的这些类型,结果又是如何呢?

```javascript
let obj = {
  name: 'zhangsan',
  age: undefined,
  f: () => {
    console.log(1)
  },
  symbol: Symbol('This is a symbol'),
  arr: [1, undefined, 2, this.f, 3, Symbol('This is a symbol in array')],
}
console.log(JSON.stringify(obj)) // {"name":"zhangsan","arr":[1,null,2,null,3,null]}
```

可以看到,`undefined`,函数和`symbol`类型的都变成了`null`.
下面我们还要用这几个类型来测试,假如我们直接使用`JSON.stringify()`来操作它们会怎么样呢?

```javascript
console.log(JSON.stringify(undefined)) // undefined
console.log(
  JSON.stringify(() => {
    console.log(1)
  })
) // undefined
console.log(JSON.stringify(Symbol('This is a symbol'))) // undefined
```

可以看到输出结果全是`undefined`.我们再来看看其他的某些特殊的值:

```javascript
console.log(JSON.stringify(null)) // null
console.log(JSON.stringify(NaN)) // null
console.log(JSON.stringify(Infinity)) // null
```

可以看到`null`,`NaN`,`Infinity`之类的都变成了`null`.

下面我们来看看转换包装对象的结果

```javascript
console.log(JSON.stringify(new String('str'))) // "str"
console.log(JSON.stringify(new Boolean(true))) // true
console.log(JSON.stringify(new Number(1))) // 1
```

可以看出字符串,布尔类型和数字的包装对象会在序列化的时候变成原始值

## toJSON()方法

假如我们转换对象中有`toJSON`这个方法,那么返回的结果就由它决定:

```javascript
let obj = {
  name: 'zhangsan',
  toJSON: function() {
    return 'customize return value'
  },
}
console.log(JSON.stringify(obj)) // "customize return value"
```

如果显示的定义了`toJSON`方法却没有`return`任何内容,那么结果就是`undefined`

```javascript
let obj = {
  name: 'zhangsan',
  toJSON: function() {},
}
console.log(JSON.stringify(obj)) // undefined
```

这里又可以牵扯出另外一个对象类型`Date`.假如我们序列化一个`Date`类型,结果又是什么呢?

```javascript
console.log(JSON.stringify(new Date())) // "2020-06-20T14:21:15.071Z"
```

可以看到输出了这种我们熟悉的时间格式,这是因为`Date`类型的对象就有自己的`toJSON`的实现

假如一个对象的属性是不可枚举的,那么也会被过滤掉

```javascript
let obj = Object.create(
  {},
  {
    name: {
      value: 'zhangsan',
      enumerable: false,
    },
    age: {
      value: 18,
      enumerable: true,
    },
  }
)
console.log(obj) // {age: 18, name: "zhangsan"}
console.log(JSON.stringify(obj)) // {"age":18}
```

## 第二个参数

到上面为止,我们举例了一些`JSON.stringify()`的用法.很多人以为到这里就结束了,其实不是的,下面我们还要介绍它的第 2 个参数.

假如有这么一个对象,它有姓名,性别,年纪等多种属性.但是我们不想关心它的其他信息,只想知道它的名字是啥.而它的其他属性值都不是像那些`undefined`等一样是无意义的值,我们该如何过滤呢?

```javascript
let obj = {
  name: 'zhangsan',
  gender: 'female',
  age: 18,
  hobby: 'swim',
}
console.log(JSON.stringify(obj, ['age'])) // {"age":18}
```

这时,我们的第 2 个参数就派上用场了.我们传入了一个数组,而这个数组中的值就是我们想要保留的属性名,不在这个数组之列的,全部都不要返回.
除了传入数组类型以外,我们还可以传入一个函数.

```javascript
let obj = {
  name: 'zhangsan',
  gender: undefined,
  age: 18,
  hobby: 'swim',
}
console.log(
  JSON.stringify(obj, (key, value) => {
    if (typeof value === 'string') {
      return undefined
    }
    return value
  })
) // {"age":18}
```

在函数中,我们做了一些逻辑判断,当属性值是字符串的时候,就给它过滤掉.使用这第二个参数,我们也可以改变属性值为`undefined`,`symbol`之类的原本不会返回的属性.

```javascript
let obj = {
  name: 'zhangsan',
  gender: undefined,
  age: 18,
  hobby: 'swim',
}
console.log(
  JSON.stringify(obj, (key, value) => {
    if (typeof value === 'string') {
      return undefined
    }
    if (typeof value === 'undefined') {
      return 'not any more undefined'
    }
    return value
  })
) // {"gender":"not any more undefined","age":18}
```

再来结合`toString()`这个方法,我们来输出函数的具体内容:

```javascript
let obj = {
  name: 'zhangsan',
  f: function() {
    console.log("I'm a function")
  },
}
console.log(
  JSON.stringify(obj, (key, value) => {
    if (typeof value === 'function') {
      return Function.prototype.toString.call(value)
    }
    return value
  })
)
// {"name":"zhangsan","f":"function(){\n    console.log('I\\'m a function')\n  }"}
```

## 第三个参数

讲完了第 2 个参数,我们再来讲讲第 3 个参数.是的,你没有看错,它还有第三个参数.这个参数的主要作用是用来美化输出的 json 字符串.在没有第三个参数的时候,我们输出的字符串是挤在一堆的,不利于观看.有了它,我们就可以格式化我们的输出结果:

```javascript
let obj = {
  name: 'zhangsan',
  age: 18,
  gender: 'female',
}
console.log(JSON.stringify(obj, null, 2))
/*{
     "name": "zhangsan",
     "age": 18,
     "gender": "female"
}*/
```

第三个参数传入的类型是数字 n 的话,就表示每一级比它的上一级多缩进 n 个空格,n 最大为 10
第三个参数传入的类型是字符串的话,则会在每一级前面加上这个字符串,字符串的最大长度也是 10

```javascript
let obj = {
  name: 'zhangsan',
  age: 18,
  gender: 'female',
}
console.log(JSON.stringify(obj, null, '😊'))
/*{
😊"name": "zhangsan",
😊"age": 18,
😊"gender": "female"
}*/
```

**总结:** 至此,关于`JSON.stringify()`的用法,我们基本讲的差不多了.大部分的知识点我们就用下面的图来表示了.

![JSON.stringify()](https://img-blog.csdnimg.cn/20200621000102655.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70)
