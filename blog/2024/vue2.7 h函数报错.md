# Vue2.7 使用 h函数报错解决办法

项目使用 element-ui，使用了 MessageBox 弹框组件

组件的一个 demo 是这样的，就是可以通过 vnode自定义message的内容
```js
<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
      }
    }
  }
</script>
```
因为项目升级了 vue 的版本为 2.7，所以都使用了`setup`的方式来写代码。因为vue 2.7 中有一个 h 函数，所以也就直接 import 进来使用

代码大概如下

```js
import { h } from 'vue'
import { MessageBox } from 'element-ui'

const open = (data) => {
	 MessageBox({
    message: h('div', null, [
      h('span', { class: 'color-primary' }, data.name),
      h('span', null, 'testtesttsert')
    ]),
    title: 'xxx',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    showCancelButton: true
  }).then(action => {})
}
```

然而在点击按钮执行 `open` 函数的时候报了一个错误

`[Vue warn]: globally imported h() can only be invoked when there is an active component instance, e.g. synchronously in a component's render or setup function.`

大概意思就是 h 函数只能存在活动组件实例时调用，例如在组件的渲染或设置函数中同步使用，因为MessageBox弹出的时候是新创建的，所以并不是在渲染的时候执行，所以就没法使用 h 函数

后面研究发现可以先生成message的内容，再去执行MessageBox的方法就可以正常使用，代码如下

```js
import { h } from 'vue'
import { MessageBox } from 'element-ui'
const content = h('div', null, [
  h('span', { class: 'color-primary' }, 'xxx'),
  h('span', null, 'testtesttsert')
])
const open = () => {
	 MessageBox({
    message: content,
    title: 'xxx',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    showCancelButton: true
  }).then(action => {})
}
```

这个方式确实不报错了，因为 content 是在渲染前就已经生成的 vnode，所以并不会有影响

但是如果想要在点击`open`的时候动态改变`content `的内容就会回到开始遇到的问题，基本就是不能在运行时去生成这个 vnode

在网上也是找了很久，没发现有解决办法，然后直接看 vue 的源码

其中 h 函数的代码就有上面那个报错的原文了，在 vue 文件的`/src/v3/h.ts`里面有完整代码

```typescript
export function h(type: any, props?: any, children?: any) {
  if (!currentInstance) {
    __DEV__ &&
      warn(
        `globally imported h() can only be invoked when there is an active ` +
          `component instance, e.g. synchronously in a component's render or setup function.`
      )
  }
  return createElement(currentInstance!, type, props, children, 2, true)
}
```

这里发现了完整的报错信息，也就是说 h 函数找不到这个`currentInstance`当前组件的实例

那就奇怪了`element-plus`的`MessageBox`的这个组件确实是直接使用的 h 函数来执行的，看来是 vue2.7 有一些没有兼容到的地方

因为element-ui的 demo 代码是使用了`this.$createElement`这个创建的 vnode，所以可以试试在 `setup`继续使用这个函数

因为`setup`没有了 `this` 的用法所以只要找到组件的实例就可以继续使用这个方法了，在 vue2.7 中可以通过`getCurrentInstance`这个拿到当前组件的实例

```js
import { getCurrentInstance } from 'vue'
const ctx = getCurrentInstance().proxy
const open = (data) => {
	 MessageBox({
    message: ctx.$createElement('div', null, [
      ctx.$createElement('span', { class: 'color-primary' }, data.name),
      ctx.$createElement('span', null, 'testtesttsert')
    ]),
    title: 'xxx',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    showCancelButton: true
  }).then(action => {})
}
```

修改完代码后执行，发现完全 ok

再优化下代码，将这个`$createElement`写成 hook 的方式

```js
import { getCurrentInstance } from 'vue'
const useRender = () => {
  const ctx = getCurrentInstance().proxy
  const h = ctx.$createElement
  return {
    h
  }
}
export default useRender
```

```js
import useRender from './useRender'
const { h } = useRender()
const open = (data) => {
	 MessageBox({
    message: h('div', null, [
      h('span', { class: 'color-primary' }, data.name),
      h('span', null, 'testtesttsert')
    ]),
    title: 'xxx',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    showCancelButton: true
  }).then(action => {})
}
```

这下代码更加舒服友好，完美解决了h 函数的报错问题。

因为vue2.7有了`Composition API` 的写法，很多文档都直接去参考了 vue3的地方，因为使用`element-ui` 所以也会参考看`element-plus`的文档来看看 vue3的写法，但是这里面有些细节的地方还是有很多不一样的。不过 vue2.7 这个`Composition API`写法让代码写得真的非常舒服，代码拓展性好，逻辑也变得更加清晰

