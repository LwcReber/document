"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,l(l({ref:t},i),{},{components:n})):r.createElement(d,l({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Vue2.7 \u4f7f\u7528 h\u51fd\u6570\u62a5\u9519\u89e3\u51b3\u529e\u6cd5",date:new Date("2024-04-08T23:21:00.000Z"),tags:["Vue"]},l="Vue2.7 \u4f7f\u7528 h\u51fd\u6570\u62a5\u9519\u89e3\u51b3\u529e\u6cd5",c={permalink:"/document/blog/2024/vue2.7 h\u51fd\u6570\u62a5\u9519",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024/vue2.7 h\u51fd\u6570\u62a5\u9519.md",source:"@site/blog/2024/vue2.7 h\u51fd\u6570\u62a5\u9519.md",title:"Vue2.7 \u4f7f\u7528 h\u51fd\u6570\u62a5\u9519\u89e3\u51b3\u529e\u6cd5",description:"\u9879\u76ee\u4f7f\u7528 element-ui\uff0c\u4f7f\u7528\u4e86 MessageBox \u5f39\u6846\u7ec4\u4ef6",date:"2024-04-08T23:21:00.000Z",formattedDate:"2024\u5e744\u67088\u65e5",tags:[{label:"Vue",permalink:"/document/blog/tags/vue"}],readingTime:5.27,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Vue2.7 \u4f7f\u7528 h\u51fd\u6570\u62a5\u9519\u89e3\u51b3\u529e\u6cd5",date:"2024-04-08T23:21:00.000Z",tags:["Vue"]},nextItem:{title:"\u4f7f\u7528yalc\u5f00\u53d1npm\u9879\u76ee",permalink:"/document/blog/2023/\u4f7f\u7528yalc\u5f00\u53d1npm\u9879\u76ee"}},u={authorsImageUrls:[]},p=[],i={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9879\u76ee\u4f7f\u7528 element-ui\uff0c\u4f7f\u7528\u4e86 MessageBox \u5f39\u6846\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u7ec4\u4ef6\u7684\u4e00\u4e2a demo \u662f\u8fd9\u6837\u7684\uff0c\u5c31\u662f\u53ef\u4ee5\u901a\u8fc7 vnode\u81ea\u5b9a\u4e49message\u7684\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n  <el-button type=\"text\" @click=\"open\">\u70b9\u51fb\u6253\u5f00 Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        const h = this.$createElement;\n        this.$msgbox({\n          title: '\u6d88\u606f',\n          message: h('p', null, [\n            h('span', null, '\u5185\u5bb9\u53ef\u4ee5\u662f '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: '\u786e\u5b9a',\n          cancelButtonText: '\u53d6\u6d88',\n        })\n      }\n    }\n  }\n<\/script>\n")),(0,o.kt)("p",null,"\u56e0\u4e3a\u9879\u76ee\u5347\u7ea7\u4e86 vue \u7684\u7248\u672c\u4e3a 2.7\uff0c\u6240\u4ee5\u90fd\u4f7f\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),"\u7684\u65b9\u5f0f\u6765\u5199\u4ee3\u7801\u3002\u56e0\u4e3avue 2.7 \u4e2d\u6709\u4e00\u4e2a h \u51fd\u6570\uff0c\u6240\u4ee5\u4e5f\u5c31\u76f4\u63a5 import \u8fdb\u6765\u4f7f\u7528"))}s.isMDXComponent=!0}}]);