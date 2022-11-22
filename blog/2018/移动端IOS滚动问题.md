---
title: 移动端IOS滚动问题
date: 2018-3-16 22:45:08
tags: []
---

 前几天在项目上遇到了IOS滚动无效的问题。其实不能说完全无效，测试发现在IOS9的版本滚动没有明显出现无效的问题，但是在IOS10的版本却很明显，加载完页面，上下滚动页面就是滚不了。分几个点来排查以及解决问题

 1. IOS10版本无法上下滚动页面
<!--truncate-->
 网上多番搜索都是通过添加`-webkit-overflow-scrolling: touch`该属性，我加上该属性后，测试发现没有任何效果。然后继续网上各种必应和谷歌。找到的方法都没有解决该问。

 2. 为何添加`-webkit-overflow-scrolling`会无效

 为了进一步验证问题，把页面的顶部banner去掉，发现IOS10神奇的可以滚动了。为什么呢，最终把问题定位到banner添加的一个css属性`will-change:transform`。后来屏蔽该属性发现IOS这边确实可以滚动了，至于为什么会这样还没查出原因。既然知道了问题所在，那肯定就容易多了。结果我发现问题并这么简单。

 3. 使用的轮播插件上下滚动时会出现图片重绘现象，即有白色的区域一直闪烁出现。

 使用的轮播插件是jquery的slidesjs,插件比较小能实现一般的轮播功能。但是没想到在移动端这边上下滚动时会图片区域一直在重绘。目前看是只有安卓有这个现象（不敢保证所有安卓机都有这个现象，毕竟我是用自己的安卓手机调页面的。。。），所以想起了`will-change:transform`这个属性，可以避免重绘，当然有兼容性，项目是只在微信用的，所以这个兼容。

 4. 既然安卓需要使用到`will-change:transform`这个属性，那么就该权衡了，是换轮播插件还是继续寻求其他的解决办法

 首先还是换换swiper插件看看有没有重绘现象，结果发现swiper的没有，这样就有了一个备选方案。
继续使用slidesjs时把banner以及下面的页面内容都放到iScroll里面，iScroll是项目使用的一个滚动插件，在安卓和IOS都有比较好的滚动效果。但是项目以前就遇到一个坑，就是slidesjs和iScroll放在一起是会有问题的，slides的轮播在iScroll的元素里面会无法点击轮播图实现跳转页面。
那么只有备选方案，使用swiper做轮播，把全部内容放在iScroll的元素里面滚动，实践后确信了是可以。

 5. 重新搜索`-webkit-overflow-scrolling`该属性，尝试改改
 把项目还原到初始IOS出现问题的时候，发现`-webkit-overflow-scrolling`还有一个auto属性，就是不让IOS有滚动反弹效果，加上去以后，发现完美解决问题，也不需要修改`will-change`属性，这时那个激动啊。设置为touch的时候就是增加反弹效果，加了反弹效果反而无法滚动。

最后就一句css代码搞定了问题，就是这么没想到。css加上` -webkit-overflow-scrolling: auto`这句

贴上代码

    #slider { //轮播
        will-change:transform;
    }
    #shopScr { //轮播下面的滚动内容
        overflow-y:scroll;
        -webkit-overflow-scrolling: auto;
    }
