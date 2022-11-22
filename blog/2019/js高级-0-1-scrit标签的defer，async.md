---
title: js高级 0.1 -> script标签的defer，async
date: 2019-03-25 22:45:37
tags: []
---

## script 标签的两个属性 defer async

  ### html中的script标签只要不存在defer属性和async属性，浏览器都会按照script标签在页面中的先后顺序依次进行解析，也是说解析完第一个script的代码，然后再去解析第二个script标签的代码
<!--truncate-->
## defer属性
  可以使脚本延迟到整个页面解析完完毕后再运行，设置了defer属性后，浏览器会先去下载js文件，但是并不会去执行。

  在html5规范中，要求延迟脚本按照顺序执行。在真实场景多个script使用了defer属性，这些script文件并不会按顺序执行的，所以最好只有一个script用了defer属性，而且defer属性只适用于外部的js文件，也就是说，直接在script标签里面写代码，然后标签带上这个属性是无效的

## async属性
  与defer属性类似，都是浏览器立即下载文件，而且只适用于外部的脚本文件，多个script使用该属性时，不能保证这些script会按顺序执行

  一定会在页面的load事件前执行这点与defer不同，异步脚步不要在加载期间`修改DOM`
