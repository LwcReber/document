"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Vue2.7 \u65b0\u589e\u7684Composition API\u6e90\u7801\u89e3\u8bfb",date:new Date("2022-11-21T23:00:36.000Z"),tags:["Vue"]},i=void 0,l={permalink:"/blog/2022/Vue2-7-\u65b0\u589e\u7684Composition-API\u6e90\u7801\u89e3\u8bfb",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022/Vue2-7-\u65b0\u589e\u7684Composition-API\u6e90\u7801\u89e3\u8bfb.md",source:"@site/blog/2022/Vue2-7-\u65b0\u589e\u7684Composition-API\u6e90\u7801\u89e3\u8bfb.md",title:"Vue2.7 \u65b0\u589e\u7684Composition API\u6e90\u7801\u89e3\u8bfb",description:"\u57282.7\u4e2d\u65b0\u589e\u4e86Composition API\uff0c\u89e3\u51b3\u4e86mixin\u7684\u95ee\u9898",date:"2022-11-21T23:00:36.000Z",formattedDate:"2022\u5e7411\u670821\u65e5",tags:[{label:"Vue",permalink:"/blog/tags/vue"}],readingTime:2.785,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Vue2.7 \u65b0\u589e\u7684Composition API\u6e90\u7801\u89e3\u8bfb",date:"2022-11-21T23:00:36.000Z",tags:["Vue"]},nextItem:{title:"\u79fb\u52a8\u7aefH5\u9875\u9762\u8c03\u8bd5\u6280\u5de7",permalink:"/blog/2021/\u79fb\u52a8\u7aefH5\u9875\u9762\u8c03\u8bd5\u6280\u5de7"}},p={authorsImageUrls:[]},u=[],c={toc:u};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u57282.7\u4e2d\u65b0\u589e\u4e86Composition API\uff0c\u89e3\u51b3\u4e86mixin\u7684\u95ee\u9898"),(0,o.kt)("p",null,"\u5982\u679c\u662f\u8001\u9879\u76ee\u53ef\u4ee5\u5c1d\u8bd5\u5347\u7ea7\u4e00\u4e0b\uff0chook\u7684\u65b9\u5f0f\u6781\u5927\u7684\u63d0\u5347\u4e86\u4ee3\u7801\u8d28\u91cf"),(0,o.kt)("p",null,"\u4e0b\u9762\u5927\u6982\u8bf4\u4e00\u4e0b\u6e90\u7801\u7ec4\u5408\u5f0fAPI\u7684\u6d41\u7a0b"),(0,o.kt)("p",null,"\u5728\u6700\u65b0\u7684\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230vue\u5df2\u7ecf\u5168\u90e8\u4f7f\u7528ts\u8fdb\u884c\u4e86\u91cd\u5199\uff0c\u5728\u770b\u6e90\u7801\u65f6\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\u3002"),(0,o.kt)("p",null,"\u7ec4\u5408\u5f0fAPI\u4e3b\u8981\u96c6\u4e2d\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/v3"),"\u6587\u4ef6\u5939\u5185\uff0c\u5b8c\u5168\u5bf9\u5e94vue3\u7684\u7684\u7ec4\u5408\u5f0fAPI\u7684\u5199\u6cd5"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"v3/apiSetup"),"\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86setup\u51fd\u6570\u7684\u6838\u5fc3",(0,o.kt)("inlineCode",{parentName:"p"},"initSetup")),(0,o.kt)("p",null,"\u8ddf\u7740initSetup\u770b\u770b\u8c03\u7528\u7684\u5730\u65b9"),(0,o.kt)("p",null,"\u5728Vue\u521d\u59cb\u5316\u65f6\u7684initState\u4e2d\u8c03\u7528\u4e86initSetup\u5e76\u628avm\u5b9e\u4f8b\u4f20\u5165setup\u4e2d\uff0c\u5c31\u8fd9\u6837\u7ec4\u5408\u5f0fAPI\u53ef\u4ee5\u5728vue\u4e2d\u4f7f\u7528\u4e86"),(0,o.kt)("p",null,"\u7b80\u5355\u4ecb\u7ecd\u4e0bsetup\u4f7f\u7528\u7684\u54cd\u5e94\u5f0f\u4e3a\u4ec0\u4e48\u53ef\u4ee5\u53d1\u751f\u53cc\u5411\u6570\u636e\u7ed1\u5b9a"),(0,o.kt)("p",null,"\u5728setup\u4e2d\u5b9a\u4e49\u54cd\u5e94\u5f0f\u6570\u636ereactive\u4ee5\u53caref"),(0,o.kt)("p",null,"\u5728reactive\u6e90\u7801\u4e2d\uff0c\u5176\u5b9e\u5c31\u662f\u5bf9\u4f20\u5165\u7684\u5bf9\u8c61\u8fdb\u884c\u4e86\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5904\u7406\uff0c\u5bf9\u6570\u636e\u8fdb\u884cobserve\u3002\u4e0e2.7\u524d\u7684\u7248\u672c\u4e2ddata\u5b9a\u4e49\u7684\u6570\u636e\u8fdb\u884c\u4e86\u4e00\u6837\u7684\u5904\u7406\uff0c\u6240\u4ee5reactive\u7684\u6570\u636e\u4e5f\u4f1a\u662f\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\uff0cget\u7684\u65f6\u5019\u6dfb\u52a0\u4e86dep\u4f9d\u8d56\uff0cset\u7684\u65f6\u5019\u5bf9\u901a\u77e5\u4f9d\u8d56\u8fdb\u884c\u66f4\u65b0\uff0c\u89e6\u53d1\u9875\u9762\u7684render"),(0,o.kt)("p",null,"ref\u4e2d\u4e5f\u662f\u7c7b\u4f3c\uff0c\u5982\u679c\u4f20\u5165\u7684\u503c\u662fref\u5219\u76f4\u63a5\u628aref\u7684\u5b9e\u4f8b\u8fdb\u884c\u590d\u5236\uff0c\u5426\u5219\u5728ref\u4e2d\u5b9a\u4e49\u4e00\u4e2avalue\u7684\u5c5e\u6027\uff0c\u5e76\u628a\u4f20\u5165\u7684\u503c\u8fdb\u884c\u54cd\u5e94\u5f0f\u5904\u7406observe\uff0c\u4e0ereactive\u7c7b\u4f3c"),(0,o.kt)("p",null,"\u5b9e\u9645\u7684\u539f\u7406\u5c31\u662f\u8131\u79bb\u4e0d\u4e86\u54cd\u5e94\u5f0f\u7684\u90e8\u5206\u4ee3\u7801\uff0c\u9488\u5bf9\u8fd9\u4e24\u4e2aapi\u8fdb\u884c\u5904\u7406\uff0c\u4e0e\u5728data\u4e2d\u5b9a\u4e49\u53d8\u91cf\u4e00\u6837\u3002\u5bf9\u4e8esetup\u4e2d\u4f7f\u7528\u7684\u5176\u4ed6api\u4e0d\u8fdb\u884c\u8fc7\u591a\u63cf\u8ff0\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\u5728observe\u7684\u65f6\u5019\u52a0\u4e86\u5bf9ref\u7684\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u5c31\u662f\u89e3\u6784ref\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5982\u679cset\u7684\u6570\u636e\u662fref\u7c7b\u578b\u7684\u6570\u636e\u90a3\u4e48\u5bf9ref.value\u76f4\u63a5\u8d4b\u503c\uff0c\u5c31\u4e0d\u9700\u8981\u81ea\u5df1\u624b\u52a8\u7528.value\u7684\u65b9\u5f0f\u8fdb\u884c\u8d4b\u503c\uff0c\u5728\u6df1\u5c42\u54cd\u5e94\u5f0f\u5bf9\u8c61\u4f7f\u7528\u65f6\u53ef\u4ee5\u4f53\u73b0\u8fd9\u4e2a\u64cd\u4f5c"),(0,o.kt)("p",null,"apiInject apiLifecycle\u8fd9\u4e9bapi\u6bd4\u8f83\u7b80\u5355\uff0c\u5c31\u662f\u5728\u5bf9vm\u5b9e\u4f8b\u4e0a\u6dfb\u52a0\u5bf9\u5e94\u5c5e\u6027\u5c31\u53ef\u4ee5\u4f7f\u7528"),(0,o.kt)("p",null,"\u9644\u4e0a\u7b80\u5355\u601d\u7ef4\u5bfc\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(4613).Z,width:"1858",height:"880"})))}s.isMDXComponent=!0},4613:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/21669042788-922b8468052f54e2b0522248e5f52507.jpg"}}]);