---
title: vue 组件监听函数上添加额外参数
date: 2019-01-08 22:27:50
tags: [vue]
---

## vue 父组件监听子组件的方法，父组件定义的方法添加额外参数转换

```
   <DatePicker :editable="false" type="datetime" @on-change="(...args) => getTime('signTime', ...args)" placeholder="选择时间" format="yyyy-MM-dd HH:mm" v-model="formData.signTime"></DatePicker>
```

使用 `=> `函数，重新返回一个新的函数，并且拼接新的形参即可
