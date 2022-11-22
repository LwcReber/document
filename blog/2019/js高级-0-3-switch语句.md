---
title: js高级 0.3-> switch语句
date: 2019-04-10 22:42:59
tags: []
---

## switch 语句注意点

1. 可以在switch语句中使用任何数据类型，字符串，对象都没有问题

2. case 的值也不一定是常量，可以是变量，甚至表达式
<!--truncate-->
```
  var a = 'hello world'
  switch(a) {
    case 'hello world':
      console.log('hello world')
      break;
    case 'hello js':
      console.log('hello js')
      break;
  }

```

3. case 可以为表达式 switch 语句在比较时使用的是全等操作符`===`

```
  var num = 30
  switch (true) {
    case num > 25:
      console.log('a > 25')
      break;
    case num >= 0 && num < 10:
      console.log('num is 0 to 10')
      break;
  }

```
