---
title: vue-ssr 开发遇到的问题收集
date: 2018-12-27 00:09:21
tags: [ssr]
---


 ## 2018-12-27
 1.window is not defined

  网上搜索后得出的结论是服务端渲染不能操作dom的，或者不能操作window的api，然后排查了下，发现项目用了flexible.js，这个库会操作html改变属性。

  解决方法
  在用到的地方
  ```
  if (typeof window !== 'undefined') {
    require('lib-flexible') /*使用require的方式加载你的文件*/
  }
  ```
  这样重新编译后，就不会报错了，页面也就能正常打开了
