---
title: Element-ui Popover组件在不确定reference时的使用
date: 2020-04-01 21:32:23
---

看了官网的demo，在使用Popover的时候需要在组件内通过具名插件写出reference，也就是在哪个元素上面显示Popover。又或者通过定义ref的方式，再再指定的元素上面通过v-popover:xxx(ref值)的方式使用Popover



但是如果需要使用的显示Popover元素是第三方的组件库，并且也没有提供slot来使用指令的方式该如何来使用Popover呢？官方文档也没有这种使用方式的说明。。。可能一般不会出现这种调用方式吧



下面说明解决办法，先上解决的链接https://codepen.io/lwcreber/pen/QWbYpqe

在Element-ui源码中
<!--truncate-->

```javascript
 mounted() {
    let reference = this.referenceElm = this.reference || this.$refs.reference;
    const popper = this.popper || this.$refs.popper;

    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    }
   ....

```

组件在mounted时候会找出reference，其中在props里面发现有reference这个属性，在挂载的时候会找出reference的元素，然后为这个做一系列的事件绑定等等。

那么这样的话，就可以通过props直接传递reference的元素进来应该就可以使用了，but，直接这样做的话会发现Popover仍然是不会出现在元素的四周，因为组件在mouted的时候就已经绑定所有事件，所以说不能等挂载后在传递reference的元素给组件

html部分

```html
<el-popover
    v-if="showPopver"
    @hide="showPopver = false"
    ref="popover"
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    :reference="popoverElm"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
   >
  </el-popover>
   <el-button id="btn" @click="showPop">无指定reference</el-button>
```

Js部分

```js
data() {
  return {
    popoverElm: {},
    showPopver: false
  };
},
methods: {
	showPop () {
    this.showPopver = true
    this.popoverElm = document.querySelector('#btn')
    this.$nextTick(() => {
      this.$refs.popover && this.$refs.popover.doShow()
      console.log(this.popoverElm)
    })
  }
}

```

通过v-if的方式控制了元素的显示，每次设置 this.showPopver ，组件都会重新渲染并mounted，这个时候就可以动态的设置指定reference的元素了，然后通过 this.$nextTick，在下次实图更新时，`this.$refs.popover.doShow()`操作显示popover即可，另外还需要在隐藏的时候设置this.showPopver 为false，从而使下次可以继续显示。

这种方式优点是解决了不指定reference元素时显示popover组件

缺点也很明显，就是反复的显示会不断重新渲染Dom，性能有一定影响，但是对于实现的功能来说，这个性能消耗是可以接受的
