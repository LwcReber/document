---
title: ios audio 无法自动播放问题
date: 2019-01-25 23:14:14
tags: [兼容性]
---


### 网上搜索了大量的资源，得知是ios为了限制流量故意设置了这个

  解决办法是 只能通过用户自己去触摸下才能去播放


### 微信内访问可以通过微信的`WeixinJSBridgeReady`事件处理
但是用的是vue的单页面，这个事件只有在页面首次加载的时候会触发。什么意思？
就是如果在当前页面刷新的时候就会触发这个事件。如果是从别页面进来这个页面的，不会触发该事件的。当然网上也有一些解决方案，比如把`audio`标签放到App.vue里面这样只要点开页面就会触发事件了，这种可以在进页面就播放音频的业务可以处理掉。如果是对音频有快进快退这种操作的，就没办法了。因为放在App.vue上，有很多事件需要处理，可能要引入大量的vuex的状态变量才能处理掉，维护性也不强。
<!--truncate-->
在当前页面监听`WeixinJSBridgeReady`然后`var audio = ducument.getElementById('audio'); audio.load(); // 然后再请求数据，获取audio的src路径` 数据请求成功后，然后针对ios系统的都播放，点击播放按钮时通过audio元素`audio.play() audio.pause()`来操作播放和暂停，这样是可以做到自动播放，可是如果是从别的页面再进来这个页面的`WeixinJSBridgeReady`事件并不会触发。比如
```
  audioPlay () {
    let audioEle = document.getElementById('audio')
    audioEle.play()
  },
  audioPause () {
    let audioEle = document.getElementById('audio')
    audioEle.pause()
  }
```

### 值得注意的问题
  安卓端，使用$ref这个方式控制实例的来执行`play(),pause()`是可以播放和暂停的，但是ios的通过这种方式是无效的，没有任何作用。只有获取了元素来操作audio的播放暂停才有作用

  还有个怪异的问题  点击播放按钮设置播放状态，
  通过vue的watch,状态改变时再获取元素设置play或者pause，并没有任何作用

  ```
  watch: {
      playing(newPlaying) {
        let audioEle = document.getElementById('audio')
        this.$nextTick(() => {
          newPlaying ? audioEle.play() : audioEle.pause()
        })
      }
  }
```
上面的代码点击播放时，设置playing为true时，ios是无法播放的


还有一个解决方案就是ajax同步请求数据，回来后直接执行播放，这个方案没有尝试过，因为用的axios这个插件，本身没有同步请求，尝试过使用async等到数据回来后再执行播放的，没有效果
