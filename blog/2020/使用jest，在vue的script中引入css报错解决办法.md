---
title: 使用jest，在vue的script中引入css报错解决办法
date: 2020-07-19 15:44:53
---

bable 6.x版本

按照文档装完jest后，一直报错。发现是在.vue文件中，script引入了第三方组件的css文件。
一番度娘后，终于找到解决办法
1. 先npm install --save-dev identity-obj-proxy
2. 然后在package.json中,Jest的配置中加入即可
 ```
 "moduleNameMapper": {
    "\\.(s?css|less)$": "identity-obj-proxy"
  }
```
