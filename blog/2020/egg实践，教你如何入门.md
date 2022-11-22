---
title: egg实践，教你如何入门
date: 2020-06-22 22:37:25
tags: [egg]
---

最近使用egg做了一个[学习项目](https://github.com/LwcReber/bookLink)，整个过程下来，对egg也已经比较熟悉。

上手egg其实很简单

**三要素： 路由（Router）、控制器（Controller）、服务（Service）**
<!--truncate-->
只要对这三个有了基本的了解也就知道egg怎么玩了



### 路由（Router）

所谓的路由其实就是说后端接口，在app/router.js文件夹中定义，

主要是学会官网中的RESTful风格的定义，你就已经学会写路由啦

其实就是C(create) R(read)  U(update) D(delete)， 针对资源进行增删改查（`router.resources(xxx)`）

```javascript
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.resources('posts', '/api/posts', controller.posts);
  router.resources('users', '/api/v1/users', controller.v1.users); // app/controller/v1/users.js
};
```

另外还可以在路由中加入中间件, 比如使用了某个中间件jwt



```javascript
// app/router.js
module.exports = app => {
  const { router, controller, jwt } = app;
  router.resources('posts', '/api/posts', jwt, controller.posts);
  router.resources('users', '/api/v1/users', controller.v1.users); // app/controller/v1/users.js
};
```

就是直接在路由中去加入即可

不过上面的例子是用的router.resources这种方式，在开发的过程中，会遇到对某个资源，只想要某几个接口是加入中间件的，那么这个情况可以使用原始的方式，就可以对每个接口都进行了解藕，根据需求是否使用中间件，还可以使用[egg-router-plus](https://github.com/eggjs/egg-router-plus)来定义，代码看起来更加舒服

```javascript
// app/router.js
module.exports = app => {
  const { router, controller, jwt } = app;
  app.router.get('/news/list', jwt, app.controller.news.list);
  app.router.get('/news/detail', app.controller.news.detail);
};
```

### 控制器（Controller）

因为是前端来写后端接口，可能有很多人对控制器不是很了解。其实它就是处理用户参数，经过（service）处理后，把结果再封装返回
，通俗的说它就是控制你这个接口的大逻辑，把数据进行，至于数据的细节方面的处理的，它就不管。

从上面的路由可以了解到，每个路由对应着某个控制器的某个方法，那就好办了，无非就是把这个接口的数据丢到这个控制器里面的某个方法进行处理，然后返回结果就行

```javascript
// app/router.js
module.exports = app => {
  const { router, controller, jwt } = app;
  app.router.get('/news/list', jwt, app.controller.news.list);
  app.router.get('/news/detail', app.controller.news.detail);
};

// app/controller/news.js
// 引入egg的controller
const Controller = require('egg').Controller;
// 新建一个类，继承egg的controller
class newsController extends Controller {
  // 对应路由中写的app.controller.news.list
  list () {
    const { ctx, service } = this;
    // 查询列表数据
    // 获取请求参数
    const req = ctx.params
    // 调用 Service 进行业务处理
    const res = await service.news.getList(req);
    // 设置响应内容和响应状态码
    ctx.body = { data: res };
    ctx.status = 200;
  }
}
```

一个基本的controller就是这么简单！！另外还可以对参数进行类型检查，有内置插件`egg-validate`

### 服务（Service）

服务从字面意思上很容易给人造成困扰，以为这里是写接口的地方，其实这个Service就是你接收到了Controller的参数，进行复杂逻辑处理的地方，比如拿到一些参数进行了，操作数据库，增删改查这些，或者是把参数重新修改后，把这个参数再拿去请求第三方服务，就是做逻辑处理的都放这里。

如果请求第三方的服务可以使用curl，这种的话，egg用来做中间件服务也就可以很容易理解了。把第三方的接口全部封装了一次，把参数处理一下，然后使用curl请求第三方服务，并把返回结果直接返回前端



至此，了解完这三个功能后，练习一下就已经可以上手egg啦。



等等。。。还有？？

熟悉很简单，当然开发真正项目还是需要一些辅助的

extend 可以在这个文件夹中封装一些常用函数，或者公共户处理方法，调用也很简单`ctx.helper.xxx`即可

在config文件夹中

config.default.js: 项目的基本配置，是否使用某个中间件、跨域配置等等

plugin.js 使用的插件列表，安装了对应的插件后，在这个地方写上，插件就加进入项目里面了，非常方便！！（强烈推荐几个好用的插件 egg-validate 、 egg-jwt、 egg-cors、 egg-swagger-doc）

还有添加项目的logger日志

至于其他的功能就要看项目的需求进行按需学习使用了
