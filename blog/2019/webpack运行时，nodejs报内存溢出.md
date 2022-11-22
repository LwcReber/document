---
title: webpack运行时，nodejs报内存溢出
date: 2019-05-09 23:34:22
---

## nodejs 内存溢出导致webpack无法编译

最近重构一个大型项目，重构到后期时出现

`FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory`

大概意思就是nodejs的内存溢出了
<!--truncate-->
网上搜索了大量的问答，都是类似在package.json里面加上命令
`node --max_old_space_size=4096`

但是我的项目是在开发环境，而且不是`node build/server.js`这种

最终网上搜索到一个解决办法
[链接](https://www.cnblogs.com/jianxuanbing/p/9331042.html)

第一个首先安装
`npm install -save-dev increase-memory-limit`

第二个安装
`npm install -save-dev cross-env`

第三在package.json里面
```
"scripts": {
    "fix-memory-limit": "cross-env LIMIT=2048 increase-memory-limit"
  }
```
然后运行命令`npm run fix-memory-limit`即可解决内存溢出的问题
