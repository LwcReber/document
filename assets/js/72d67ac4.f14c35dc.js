"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,c(c({ref:t},i),{},{components:r})):n.createElement(d,c({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u4f7f\u7528jest\uff0c\u5728vue\u7684script\u4e2d\u5f15\u5165css\u62a5\u9519\u89e3\u51b3\u529e\u6cd5",date:new Date("2020-07-19T15:44:53.000Z")},c=void 0,s={permalink:"/document/blog/2020/\u4f7f\u7528jest\uff0c\u5728vue\u7684script\u4e2d\u5f15\u5165css\u62a5\u9519\u89e3\u51b3\u529e\u6cd5",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020/\u4f7f\u7528jest\uff0c\u5728vue\u7684script\u4e2d\u5f15\u5165css\u62a5\u9519\u89e3\u51b3\u529e\u6cd5.md",source:"@site/blog/2020/\u4f7f\u7528jest\uff0c\u5728vue\u7684script\u4e2d\u5f15\u5165css\u62a5\u9519\u89e3\u51b3\u529e\u6cd5.md",title:"\u4f7f\u7528jest\uff0c\u5728vue\u7684script\u4e2d\u5f15\u5165css\u62a5\u9519\u89e3\u51b3\u529e\u6cd5",description:"bable 6.x\u7248\u672c",date:"2020-07-19T15:44:53.000Z",formattedDate:"2020\u5e747\u670819\u65e5",tags:[],readingTime:.385,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u4f7f\u7528jest\uff0c\u5728vue\u7684script\u4e2d\u5f15\u5165css\u62a5\u9519\u89e3\u51b3\u529e\u6cd5",date:"2020-07-19T15:44:53.000Z"},prevItem:{title:"\u6d45\u8c08Vue\u6e90\u7801",permalink:"/document/blog/2020/\u6d45\u8c08Vue\u6e90\u7801"},nextItem:{title:"egg\u5b9e\u8df5\uff0c\u6559\u4f60\u5982\u4f55\u5165\u95e8",permalink:"/document/blog/2020/egg\u5b9e\u8df5\uff0c\u6559\u4f60\u5982\u4f55\u5165\u95e8"}},l={authorsImageUrls:[]},p=[],i={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"bable 6.x\u7248\u672c"),(0,a.kt)("p",null,"\u6309\u7167\u6587\u6863\u88c5\u5b8cjest\u540e\uff0c\u4e00\u76f4\u62a5\u9519\u3002\u53d1\u73b0\u662f\u5728.vue\u6587\u4ef6\u4e2d\uff0cscript\u5f15\u5165\u4e86\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u7684css\u6587\u4ef6\u3002\n\u4e00\u756a\u5ea6\u5a18\u540e\uff0c\u7ec8\u4e8e\u627e\u5230\u89e3\u51b3\u529e\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148npm install --save-dev identity-obj-proxy"),(0,a.kt)("li",{parentName:"ol"},"\u7136\u540e\u5728package.json\u4e2d,Jest\u7684\u914d\u7f6e\u4e2d\u52a0\u5165\u5373\u53ef",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'"moduleNameMapper": {\n   "\\\\.(s?css|less)$": "identity-obj-proxy"\n }\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0}}]);