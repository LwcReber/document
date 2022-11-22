---
title: Vuex 源码解读
date: 2019-12-01 15:35:29
tags: [vuex]
---

1 src目录结构

```
.
├── helpers.js
├── index.esm.js
├── index.js
├── mixin.js
├── module
│   ├── module-collection.js
│   └── module.js
├── plugins
│   ├── devtool.js
│   └── logger.js
├── store.js
└── util.js


```

2 注入到vue中

从index.js中看出就是vue插件的输出格式

```javascript
export default {
  Store, // 状态管理
  install,
  version: '__VERSION__',
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers
}
```

先看install，在mixin.js中，其实就是兼容处理vue的版本，使得各个版本都可以使用vuex。在vuexInit中往vue中注入 `$store` 这个属性，就是vuex的实例了，现在可以知道平时使用vuex的时候都是`this.$store`的方式来调用了
<!--truncate-->
3 核心store构造函数

```javascript
if (!Vue && typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

if (process.env.NODE_ENV !== 'production') {
  assert(Vue, `must call Vue.use(Vuex) before creating a store instance.`)
  assert(typeof Promise !== 'undefined', `vuex requires a Promise polyfill in this browser.`)
  assert(this instanceof Store, `store must be called with the new operator.`)
}
```

这一段都是判断有没有在vue中使用，自动帮你安装，以及一些环境的错误处理

```javascript
const {
  plugins = [],
  strict = false
} = options

// store internal state
this._committing = false
this._actions = Object.create(null)
this._actionSubscribers = []
this._mutations = Object.create(null)
this._wrappedGetters = Object.create(null)
this._modules = new ModuleCollection(options)
this._modulesNamespaceMap = Object.create(null)
this._subscribers = []
this._watcherVM = new Vue()
this._makeLocalGettersCache = Object.create(null)

```

拿到传入vuex的option，然后创建_modules模块收集器，其他的都是一些准备要用的初始化参数，其中`this._watcherVM`倒是一个值得关注的点，这里是一个vue的对象，按照定义变量的字面意思，应该是一个监听器，是用到vuex中watch这个api的。这个api其实也是利用了vue中的$watch这个监听器

```javascript
const store = this
const { dispatch, commit } = this

this.dispatch = function boundDispatch (type, payload) {
  return dispatch.call(store, type, payload)
}

this.commit = function boundCommit (type, payload, options) {
  return commit.call(store, type, payload, options)
}

```

修改commit、dispatch的this指向，使用调用这两个方法时，一直指向store这个构造函数，防止用户在调用这两个方法时，手动修改了this的指向。



```javascript
 this.strict = strict

 const state = this._modules.root.state
// init root module.
// this also recursively registers all sub-modules
// and collects all module getters inside this._wrappedGetters
installModule(this, state, [], this._modules.root)

// initialize the store vm, which is responsible for the reactivity
// (also registers _wrappedGetters as computed properties)
resetStoreVM(this, state)

// apply plugins
plugins.forEach(plugin => plugin(this))

const useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools
if (useDevtools) {
devtoolPlugin(this)
}
```

接下来就是核心代码`installModule`, `resetStoreVM`,这里初始化了模块，同时初始化store的vm，然后是vuex的plugins插件注册。

```javascript
get state () {
  return this._vm._data.$$state
}

set state (v) {
  if (process.env.NODE_ENV !== 'production') {
    assert(false, `use store.replaceState() to explicit replace store state.`)
  }
}
```

这里使用对象的get 以及set的来获取或者设置state，可以看到获取state的时候是其实在vm中的_data里面的$$state去获取的。set state 也能看出来不允许你直接去修改state里面定义的变量值。这样也就能知道为何不能通过this.$store.state.xx = xxx 的方式来直接修改state里面的值了。

后面的函数多数都是vuex中的api了，也就不再这里提。主要是分析store的原理

以上就是store的大体核心内容。接下来开始详细分析具体代码

installModule：

```javascript
function installModule (store, rootState, path, module, hot) {
const isRoot = !path.length
const namespace = store._modules.getNamespace(path)

// register in namespace map
if (module.namespaced) {
  if (store._modulesNamespaceMap[namespace] && process.env.NODE_ENV !== 'production') {
    console.error(`[vuex] duplicate namespace ${namespace} for the namespaced module ${path.join('/')}`)
  }
  store._modulesNamespaceMap[namespace] = module
}

// set state
if (!isRoot && !hot) {
  const parentState = getNestedState(rootState, path.slice(0, -1))
  const moduleName = path[path.length - 1]
  store._withCommit(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (moduleName in parentState) {
        console.warn(
          `[vuex] state field "${moduleName}" was overridden by a module with the same name at "${path.join('.')}"`
        )
      }
    }
    Vue.set(parentState, moduleName, module.state)
  })
}
```

这里都是针对有`namespaced`的模块进行处理，namespace：找到模块的路径，如果是root就是'',如果是模块，比如app里面的user，那么就应该'app/user'，这个其实就是commit或者disptch一个模块的时候写的第一个参数。之后往`store._modulesNamespaceMap`命名空间表注册存入当前的模块

如果是模块的属性，则使用vue的set，往parentState对象中添加moduleName的属性，其对应的值就是module自己的state属性值，使得parentState对象的moduleName属性是响应式的



```javascript

const local = module.context = makeLocalContext(store, namespace, path)

module.forEachMutation((mutation, key) => {
  const namespacedType = namespace + key
  registerMutation(store, namespacedType, mutation, local)
})

module.forEachAction((action, key) => {
  const type = action.root ? key : namespace + key
  const handler = action.handler || action
  registerAction(store, type, handler, local)
})

module.forEachGetter((getter, key) => {
  const namespacedType = namespace + key
  registerGetter(store, namespacedType, getter, local)
})

module.forEachChild((child, key) => {
  installModule(store, rootState, path.concat(key), child, hot)
})
```

这里分别是注册store的mutation、action、getter，有模块的使用递归继续重复上面的初始化

registerMutation：

```javascript
function registerMutation (store, type, handler, local) {
  const entry = store._mutations[type] || (store._mutations[type] = [])
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload)
  })
}
```

把mutation定义的函数都放到一个entry入口数组中，local其实就是拿到state对应的路径。 handler也就是自己定义的mutation函数，mutation的定义的方法参数也是（state, payload）刚好对应上

那么执行mutation是如何实现修改state的值呢？

现在就需要去看commit方法里面的代码了

```javascript
 const {
      type,
      payload,
      options
    } = unifyObjectStyle(_type, _payload, _options)
```

把传入的参数都重新处理了一下，因为使用commit的时候，是支持对象或者是字符串的形式的。这里把字符串或者对象的形式重新处理，拿到最终的type、payload、options

```javascript
const mutation = { type, payload }
const entry = this._mutations[type]
if (!entry) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(`[vuex] unknown mutation type: ${type}`)
  }
  return
}
```
resetStoreVM:

```javascript
const oldVm = store._vm

// bind store public getters
store.getters = {}
// reset local getters cache
store._makeLocalGettersCache = Object.create(null)
const wrappedGetters = store._wrappedGetters
const computed = {}
forEachValue(wrappedGetters, (fn, key) => {
 // use computed to leverage its lazy-caching mechanism
 // direct inline function use will lead to closure preserving oldVm.
 // using partial to return function with only arguments preserved in closure environment.
 computed[key] = partial(fn, store)
 Object.defineProperty(store.getters, key, {
   get: () => store._vm[key],
   enumerable: true // for local getters
 })
})

// use a Vue instance to store the state tree
// suppress warnings just in case the user has added
// some funky global mixins
const silent = Vue.config.silent
Vue.config.silent = true
store._vm = new Vue({
  data: {
    $$state: state
  },
  computed
})

```
再看看vuex是如何实现数据响应式的，这里其实是对vuex对getter进行一个处理，可以看到把getter变成vue中对computed，也就是计算属性。然后利用`Object.defineProperty`get属性访问`store.getter.xx`其实就是就是拿到对就是vue中对computed中对属性，这里还是非常巧妙的。然后把vuex中定义的state都放到vue中的data，这样数据也就变成了响应式变化。

```javascript
if (oldVm) {
  if (hot) {
    // dispatch changes in all subscribed watchers
    // to force getter re-evaluation for hot reloading.
    store._withCommit(() => {
      oldVm._data.$$state = null
    })
  }
  Vue.nextTick(() => oldVm.$destroy())
}

```
最后是registerModule、  unregisterModule都会调用到resetStoreVM，其实就是保证store中vm每次都是最新的，然后把旧的vm卸载，也把数据直接清空调，这也是一个性能优化的方面
