---
title: iconfont用法
date: 2018-12-26 20:49:51
tags: []
---

## 阿里巴巴尺量图 iconfont的另一种使用方法
  官方文档说的两个方法 
  1. unicode引用 
  2. font-class引用 
<!--truncate-->

  现在说的另一种方法跟第一种方法类似 
  1.拷贝项目下面生成的`font-face`
    ```
    @font-face {
      font-family: 'iconfont';
      ...
    }
    ```

  2.定义使用iconfont的样式
  ```
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  ```

  3.写对应icon图片的class
  ```
  .icon-back:before {
    content: "\e63e"; /* 原始的图标文本是这个 &#xe62f; 把e前面的都去掉加上'\'，同时去掉 ';' 即可*/
  }
  ```
 4.如何使用
 ```
 <i class="iconfont icon-back"></i>
 ```

### 优点
这个方式只需要要class即可，不需要在用到的标签上一直添加图标的文本，而官网的文档正是这种方式，如果很多地方都用了同一个icon，如果需要修改的图标时候则需要一个个的去修改，而这个方式只需要改class的content即可，可维护性很好
