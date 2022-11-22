"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Vuex \u6e90\u7801\u89e3\u8bfb",date:new Date("2019-12-01T15:35:29.000Z"),tags:["vuex"]},s=void 0,l={permalink:"/blog/2019/Vuex-\u6e90\u7801\u89e3\u8bfb",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019/Vuex-\u6e90\u7801\u89e3\u8bfb.md",source:"@site/blog/2019/Vuex-\u6e90\u7801\u89e3\u8bfb.md",title:"Vuex \u6e90\u7801\u89e3\u8bfb",description:"1 src\u76ee\u5f55\u7ed3\u6784",date:"2019-12-01T15:35:29.000Z",formattedDate:"2019\u5e7412\u67081\u65e5",tags:[{label:"vuex",permalink:"/blog/tags/vuex"}],readingTime:8.445,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Vuex \u6e90\u7801\u89e3\u8bfb",date:"2019-12-01T15:35:29.000Z",tags:["vuex"]},prevItem:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/blog/2020/\u8bbe\u8ba1\u6a21\u5f0f"},nextItem:{title:"Nginx\u4ee3\u7406\u548c\u4ee3\u7406\u7f13\u5b58",permalink:"/blog/2019/Nginx\u4ee3\u7406\u548c\u4ee3\u7406\u7f13\u5b58"}},i={authorsImageUrls:[]},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"1 src\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 helpers.js\n\u251c\u2500\u2500 index.esm.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 mixin.js\n\u251c\u2500\u2500 module\n\u2502\xa0\xa0 \u251c\u2500\u2500 module-collection.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 module.js\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 devtool.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 logger.js\n\u251c\u2500\u2500 store.js\n\u2514\u2500\u2500 util.js\n\n\n")),(0,r.kt)("p",null,"2 \u6ce8\u5165\u5230vue\u4e2d"),(0,r.kt)("p",null,"\u4eceindex.js\u4e2d\u770b\u51fa\u5c31\u662fvue\u63d2\u4ef6\u7684\u8f93\u51fa\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  Store, // \u72b6\u6001\u7ba1\u7406\n  install,\n  version: '__VERSION__',\n  mapState,\n  mapMutations,\n  mapGetters,\n  mapActions,\n  createNamespacedHelpers\n}\n")),(0,r.kt)("p",null,"\u5148\u770binstall\uff0c\u5728mixin.js\u4e2d\uff0c\u5176\u5b9e\u5c31\u662f\u517c\u5bb9\u5904\u7406vue\u7684\u7248\u672c\uff0c\u4f7f\u5f97\u5404\u4e2a\u7248\u672c\u90fd\u53ef\u4ee5\u4f7f\u7528vuex\u3002\u5728vuexInit\u4e2d\u5f80vue\u4e2d\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"$store")," \u8fd9\u4e2a\u5c5e\u6027\uff0c\u5c31\u662fvuex\u7684\u5b9e\u4f8b\u4e86\uff0c\u73b0\u5728\u53ef\u4ee5\u77e5\u9053\u5e73\u65f6\u4f7f\u7528vuex\u7684\u65f6\u5019\u90fd\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"this.$store"),"\u7684\u65b9\u5f0f\u6765\u8c03\u7528\u4e86"),(0,r.kt)("p",null,"3 \u6838\u5fc3store\u6784\u9020\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (!Vue && typeof window !== 'undefined' && window.Vue) {\n  install(window.Vue)\n}\n\nif (process.env.NODE_ENV !== 'production') {\n  assert(Vue, `must call Vue.use(Vuex) before creating a store instance.`)\n  assert(typeof Promise !== 'undefined', `vuex requires a Promise polyfill in this browser.`)\n  assert(this instanceof Store, `store must be called with the new operator.`)\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6bb5\u90fd\u662f\u5224\u65ad\u6709\u6ca1\u6709\u5728vue\u4e2d\u4f7f\u7528\uff0c\u81ea\u52a8\u5e2e\u4f60\u5b89\u88c5\uff0c\u4ee5\u53ca\u4e00\u4e9b\u73af\u5883\u7684\u9519\u8bef\u5904\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  plugins = [],\n  strict = false\n} = options\n\n// store internal state\nthis._committing = false\nthis._actions = Object.create(null)\nthis._actionSubscribers = []\nthis._mutations = Object.create(null)\nthis._wrappedGetters = Object.create(null)\nthis._modules = new ModuleCollection(options)\nthis._modulesNamespaceMap = Object.create(null)\nthis._subscribers = []\nthis._watcherVM = new Vue()\nthis._makeLocalGettersCache = Object.create(null)\n\n")),(0,r.kt)("p",null,"\u62ff\u5230\u4f20\u5165vuex\u7684option\uff0c\u7136\u540e\u521b\u5efa_modules\u6a21\u5757\u6536\u96c6\u5668\uff0c\u5176\u4ed6\u7684\u90fd\u662f\u4e00\u4e9b\u51c6\u5907\u8981\u7528\u7684\u521d\u59cb\u5316\u53c2\u6570\uff0c\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"this._watcherVM"),"\u5012\u662f\u4e00\u4e2a\u503c\u5f97\u5173\u6ce8\u7684\u70b9\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2avue\u7684\u5bf9\u8c61\uff0c\u6309\u7167\u5b9a\u4e49\u53d8\u91cf\u7684\u5b57\u9762\u610f\u601d\uff0c\u5e94\u8be5\u662f\u4e00\u4e2a\u76d1\u542c\u5668\uff0c\u662f\u7528\u5230vuex\u4e2dwatch\u8fd9\u4e2aapi\u7684\u3002\u8fd9\u4e2aapi\u5176\u5b9e\u4e5f\u662f\u5229\u7528\u4e86vue\u4e2d\u7684$watch\u8fd9\u4e2a\u76d1\u542c\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = this\nconst { dispatch, commit } = this\n\nthis.dispatch = function boundDispatch (type, payload) {\n  return dispatch.call(store, type, payload)\n}\n\nthis.commit = function boundCommit (type, payload, options) {\n  return commit.call(store, type, payload, options)\n}\n\n")),(0,r.kt)("p",null,"\u4fee\u6539commit\u3001dispatch\u7684this\u6307\u5411\uff0c\u4f7f\u7528\u8c03\u7528\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u65f6\uff0c\u4e00\u76f4\u6307\u5411store\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u9632\u6b62\u7528\u6237\u5728\u8c03\u7528\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u65f6\uff0c\u624b\u52a8\u4fee\u6539\u4e86this\u7684\u6307\u5411\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," this.strict = strict\n\n const state = this._modules.root.state\n// init root module.\n// this also recursively registers all sub-modules\n// and collects all module getters inside this._wrappedGetters\ninstallModule(this, state, [], this._modules.root)\n\n// initialize the store vm, which is responsible for the reactivity\n// (also registers _wrappedGetters as computed properties)\nresetStoreVM(this, state)\n\n// apply plugins\nplugins.forEach(plugin => plugin(this))\n\nconst useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools\nif (useDevtools) {\ndevtoolPlugin(this)\n}\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u662f\u6838\u5fc3\u4ee3\u7801",(0,r.kt)("inlineCode",{parentName:"p"},"installModule"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resetStoreVM"),",\u8fd9\u91cc\u521d\u59cb\u5316\u4e86\u6a21\u5757\uff0c\u540c\u65f6\u521d\u59cb\u5316store\u7684vm\uff0c\u7136\u540e\u662fvuex\u7684plugins\u63d2\u4ef6\u6ce8\u518c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"get state () {\n  return this._vm._data.$$state\n}\n\nset state (v) {\n  if (process.env.NODE_ENV !== 'production') {\n    assert(false, `use store.replaceState() to explicit replace store state.`)\n  }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u5bf9\u8c61\u7684get \u4ee5\u53caset\u7684\u6765\u83b7\u53d6\u6216\u8005\u8bbe\u7f6estate\uff0c\u53ef\u4ee5\u770b\u5230\u83b7\u53d6state\u7684\u65f6\u5019\u662f\u5176\u5b9e\u5728vm\u4e2d\u7684_data\u91cc\u9762\u7684$$state\u53bb\u83b7\u53d6\u7684\u3002set state \u4e5f\u80fd\u770b\u51fa\u6765\u4e0d\u5141\u8bb8\u4f60\u76f4\u63a5\u53bb\u4fee\u6539state\u91cc\u9762\u5b9a\u4e49\u7684\u53d8\u91cf\u503c\u3002\u8fd9\u6837\u4e5f\u5c31\u80fd\u77e5\u9053\u4e3a\u4f55\u4e0d\u80fd\u901a\u8fc7this.$store.state.xx = xxx \u7684\u65b9\u5f0f\u6765\u76f4\u63a5\u4fee\u6539state\u91cc\u9762\u7684\u503c\u4e86\u3002"),(0,r.kt)("p",null,"\u540e\u9762\u7684\u51fd\u6570\u591a\u6570\u90fd\u662fvuex\u4e2d\u7684api\u4e86\uff0c\u4e5f\u5c31\u4e0d\u518d\u8fd9\u91cc\u63d0\u3002\u4e3b\u8981\u662f\u5206\u6790store\u7684\u539f\u7406"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662fstore\u7684\u5927\u4f53\u6838\u5fc3\u5185\u5bb9\u3002\u63a5\u4e0b\u6765\u5f00\u59cb\u8be6\u7ec6\u5206\u6790\u5177\u4f53\u4ee3\u7801"),(0,r.kt)("p",null,"installModule\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function installModule (store, rootState, path, module, hot) {\nconst isRoot = !path.length\nconst namespace = store._modules.getNamespace(path)\n\n// register in namespace map\nif (module.namespaced) {\n  if (store._modulesNamespaceMap[namespace] && process.env.NODE_ENV !== 'production') {\n    console.error(`[vuex] duplicate namespace ${namespace} for the namespaced module ${path.join('/')}`)\n  }\n  store._modulesNamespaceMap[namespace] = module\n}\n\n// set state\nif (!isRoot && !hot) {\n  const parentState = getNestedState(rootState, path.slice(0, -1))\n  const moduleName = path[path.length - 1]\n  store._withCommit(() => {\n    if (process.env.NODE_ENV !== 'production') {\n      if (moduleName in parentState) {\n        console.warn(\n          `[vuex] state field \"${moduleName}\" was overridden by a module with the same name at \"${path.join('.')}\"`\n        )\n      }\n    }\n    Vue.set(parentState, moduleName, module.state)\n  })\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u90fd\u662f\u9488\u5bf9\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"namespaced"),"\u7684\u6a21\u5757\u8fdb\u884c\u5904\u7406\uff0cnamespace\uff1a\u627e\u5230\u6a21\u5757\u7684\u8def\u5f84\uff0c\u5982\u679c\u662froot\u5c31\u662f'',\u5982\u679c\u662f\u6a21\u5757\uff0c\u6bd4\u5982app\u91cc\u9762\u7684user\uff0c\u90a3\u4e48\u5c31\u5e94\u8be5'app/user'\uff0c\u8fd9\u4e2a\u5176\u5b9e\u5c31\u662fcommit\u6216\u8005disptch\u4e00\u4e2a\u6a21\u5757\u7684\u65f6\u5019\u5199\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002\u4e4b\u540e\u5f80",(0,r.kt)("inlineCode",{parentName:"p"},"store._modulesNamespaceMap"),"\u547d\u540d\u7a7a\u95f4\u8868\u6ce8\u518c\u5b58\u5165\u5f53\u524d\u7684\u6a21\u5757"),(0,r.kt)("p",null,"\u5982\u679c\u662f\u6a21\u5757\u7684\u5c5e\u6027\uff0c\u5219\u4f7f\u7528vue\u7684set\uff0c\u5f80parentState\u5bf9\u8c61\u4e2d\u6dfb\u52a0moduleName\u7684\u5c5e\u6027\uff0c\u5176\u5bf9\u5e94\u7684\u503c\u5c31\u662fmodule\u81ea\u5df1\u7684state\u5c5e\u6027\u503c\uff0c\u4f7f\u5f97parentState\u5bf9\u8c61\u7684moduleName\u5c5e\u6027\u662f\u54cd\u5e94\u5f0f\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst local = module.context = makeLocalContext(store, namespace, path)\n\nmodule.forEachMutation((mutation, key) => {\n  const namespacedType = namespace + key\n  registerMutation(store, namespacedType, mutation, local)\n})\n\nmodule.forEachAction((action, key) => {\n  const type = action.root ? key : namespace + key\n  const handler = action.handler || action\n  registerAction(store, type, handler, local)\n})\n\nmodule.forEachGetter((getter, key) => {\n  const namespacedType = namespace + key\n  registerGetter(store, namespacedType, getter, local)\n})\n\nmodule.forEachChild((child, key) => {\n  installModule(store, rootState, path.concat(key), child, hot)\n})\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5206\u522b\u662f\u6ce8\u518cstore\u7684mutation\u3001action\u3001getter\uff0c\u6709\u6a21\u5757\u7684\u4f7f\u7528\u9012\u5f52\u7ee7\u7eed\u91cd\u590d\u4e0a\u9762\u7684\u521d\u59cb\u5316"),(0,r.kt)("p",null,"registerMutation\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function registerMutation (store, type, handler, local) {\n  const entry = store._mutations[type] || (store._mutations[type] = [])\n  entry.push(function wrappedMutationHandler (payload) {\n    handler.call(store, local.state, payload)\n  })\n}\n")),(0,r.kt)("p",null,"\u628amutation\u5b9a\u4e49\u7684\u51fd\u6570\u90fd\u653e\u5230\u4e00\u4e2aentry\u5165\u53e3\u6570\u7ec4\u4e2d\uff0clocal\u5176\u5b9e\u5c31\u662f\u62ff\u5230state\u5bf9\u5e94\u7684\u8def\u5f84\u3002 handler\u4e5f\u5c31\u662f\u81ea\u5df1\u5b9a\u4e49\u7684mutation\u51fd\u6570\uff0cmutation\u7684\u5b9a\u4e49\u7684\u65b9\u6cd5\u53c2\u6570\u4e5f\u662f\uff08state, payload\uff09\u521a\u597d\u5bf9\u5e94\u4e0a"),(0,r.kt)("p",null,"\u90a3\u4e48\u6267\u884cmutation\u662f\u5982\u4f55\u5b9e\u73b0\u4fee\u6539state\u7684\u503c\u5462\uff1f"),(0,r.kt)("p",null,"\u73b0\u5728\u5c31\u9700\u8981\u53bb\u770bcommit\u65b9\u6cd5\u91cc\u9762\u7684\u4ee3\u7801\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," const {\n      type,\n      payload,\n      options\n    } = unifyObjectStyle(_type, _payload, _options)\n")),(0,r.kt)("p",null,"\u628a\u4f20\u5165\u7684\u53c2\u6570\u90fd\u91cd\u65b0\u5904\u7406\u4e86\u4e00\u4e0b\uff0c\u56e0\u4e3a\u4f7f\u7528commit\u7684\u65f6\u5019\uff0c\u662f\u652f\u6301\u5bf9\u8c61\u6216\u8005\u662f\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u7684\u3002\u8fd9\u91cc\u628a\u5b57\u7b26\u4e32\u6216\u8005\u5bf9\u8c61\u7684\u5f62\u5f0f\u91cd\u65b0\u5904\u7406\uff0c\u62ff\u5230\u6700\u7ec8\u7684type\u3001payload\u3001options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mutation = { type, payload }\nconst entry = this._mutations[type]\nif (!entry) {\n  if (process.env.NODE_ENV !== 'production') {\n    console.error(`[vuex] unknown mutation type: ${type}`)\n  }\n  return\n}\n")),(0,r.kt)("p",null,"resetStoreVM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const oldVm = store._vm\n\n// bind store public getters\nstore.getters = {}\n// reset local getters cache\nstore._makeLocalGettersCache = Object.create(null)\nconst wrappedGetters = store._wrappedGetters\nconst computed = {}\nforEachValue(wrappedGetters, (fn, key) => {\n // use computed to leverage its lazy-caching mechanism\n // direct inline function use will lead to closure preserving oldVm.\n // using partial to return function with only arguments preserved in closure environment.\n computed[key] = partial(fn, store)\n Object.defineProperty(store.getters, key, {\n   get: () => store._vm[key],\n   enumerable: true // for local getters\n })\n})\n\n// use a Vue instance to store the state tree\n// suppress warnings just in case the user has added\n// some funky global mixins\nconst silent = Vue.config.silent\nVue.config.silent = true\nstore._vm = new Vue({\n  data: {\n    $$state: state\n  },\n  computed\n})\n\n")),(0,r.kt)("p",null,"\u518d\u770b\u770bvuex\u662f\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u54cd\u5e94\u5f0f\u7684\uff0c\u8fd9\u91cc\u5176\u5b9e\u662f\u5bf9vuex\u5bf9getter\u8fdb\u884c\u4e00\u4e2a\u5904\u7406\uff0c\u53ef\u4ee5\u770b\u5230\u628agetter\u53d8\u6210vue\u4e2d\u5bf9computed\uff0c\u4e5f\u5c31\u662f\u8ba1\u7b97\u5c5e\u6027\u3002\u7136\u540e\u5229\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"get\u5c5e\u6027\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"store.getter.xx"),"\u5176\u5b9e\u5c31\u662f\u5c31\u662f\u62ff\u5230\u5bf9\u5c31\u662fvue\u4e2d\u5bf9computed\u4e2d\u5bf9\u5c5e\u6027\uff0c\u8fd9\u91cc\u8fd8\u662f\u975e\u5e38\u5de7\u5999\u7684\u3002\u7136\u540e\u628avuex\u4e2d\u5b9a\u4e49\u7684state\u90fd\u653e\u5230vue\u4e2d\u7684data\uff0c\u8fd9\u6837\u6570\u636e\u4e5f\u5c31\u53d8\u6210\u4e86\u54cd\u5e94\u5f0f\u53d8\u5316\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (oldVm) {\n  if (hot) {\n    // dispatch changes in all subscribed watchers\n    // to force getter re-evaluation for hot reloading.\n    store._withCommit(() => {\n      oldVm._data.$$state = null\n    })\n  }\n  Vue.nextTick(() => oldVm.$destroy())\n}\n\n")),(0,r.kt)("p",null,"\u6700\u540e\u662fregisterModule\u3001  unregisterModule\u90fd\u4f1a\u8c03\u7528\u5230resetStoreVM\uff0c\u5176\u5b9e\u5c31\u662f\u4fdd\u8bc1store\u4e2dvm\u6bcf\u6b21\u90fd\u662f\u6700\u65b0\u7684\uff0c\u7136\u540e\u628a\u65e7\u7684vm\u5378\u8f7d\uff0c\u4e5f\u628a\u6570\u636e\u76f4\u63a5\u6e05\u7a7a\u8c03\uff0c\u8fd9\u4e5f\u662f\u4e00\u4e2a\u6027\u80fd\u4f18\u5316\u7684\u65b9\u9762"))}u.isMDXComponent=!0}}]);