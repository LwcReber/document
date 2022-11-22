"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),g=a,y=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Nginx\u4ee3\u7406\u548c\u4ee3\u7406\u7f13\u5b58",date:new Date("2019-08-21T22:36:45.000Z"),tags:["nginx"]},l=void 0,p={permalink:"/document/blog/2019/Nginx\u4ee3\u7406\u548c\u4ee3\u7406\u7f13\u5b58",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019/Nginx\u4ee3\u7406\u548c\u4ee3\u7406\u7f13\u5b58.md",source:"@site/blog/2019/Nginx\u4ee3\u7406\u548c\u4ee3\u7406\u7f13\u5b58.md",title:"Nginx\u4ee3\u7406\u548c\u4ee3\u7406\u7f13\u5b58",description:"\u57fa\u7840\u4ee3\u7406\u914d\u7f6e",date:"2019-08-21T22:36:45.000Z",formattedDate:"2019\u5e748\u670821\u65e5",tags:[{label:"nginx",permalink:"/document/blog/tags/nginx"}],readingTime:1.995,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nginx\u4ee3\u7406\u548c\u4ee3\u7406\u7f13\u5b58",date:"2019-08-21T22:36:45.000Z",tags:["nginx"]},prevItem:{title:"Vuex \u6e90\u7801\u89e3\u8bfb",permalink:"/document/blog/2019/Vuex-\u6e90\u7801\u89e3\u8bfb"},nextItem:{title:"html lang\u5c5e\u6027",permalink:"/document/blog/2019/html-lang\u5c5e\u6027"}},c={authorsImageUrls:[]},i=[{value:"\u57fa\u7840\u4ee3\u7406\u914d\u7f6e",id:"\u57fa\u7840\u4ee3\u7406\u914d\u7f6e",level:3},{value:"\u4ee3\u7406\u7f13\u5b58",id:"\u4ee3\u7406\u7f13\u5b58",level:2}],s={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u57fa\u7840\u4ee3\u7406\u914d\u7f6e"},"\u57fa\u7840\u4ee3\u7406\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0b\u8f7dnginx\u5230\u7535\u8111\u4e0a\u540e\uff0c\u627e\u5230nginx.conf\u6587\u4ef6\n\u6dfb\u52a0server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\n  listen 80;\n  server_name testb.com;\n  location / {\n    proxy_pass http://127.0.0.1:8887;\n    proxy_set_header Host $host;\n  }\n}\n")),(0,a.kt)("p",null,"listen\uff1a \u76d1\u542c\u7aef\u53e3\uff0c\u73b0\u5728\u7684\u65b9\u5f0f\u662f\u76d1\u542c\u5230\u57df\u540d\uff0c\u7136\u540e\u5230",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8887%E8%BF%99%E4%B8%AA%E5%9C%B0%E5%9D%80%EF%BC%8C%E6%89%80%E4%BB%A5%E9%BB%98%E8%AE%A480%E7%AB%AF%E5%8F%A3"},"http://127.0.0.1:8887\u8fd9\u4e2a\u5730\u5740\uff0c\u6240\u4ee5\u9ed8\u8ba480\u7aef\u53e3"),"\nserver_name\uff1a \u5c31\u662f\u57df\u540d\u5730\u5740\uff0c"),(0,a.kt)("p",null,"location\uff1a \u5339\u914d\u7684\u8def\u5f84"),(0,a.kt)("p",null,"proxy_pass\uff1a\u4ee3\u7406\u5230\u54ea\u4e2a\u5730\u5740\uff0c \u8fd9\u91cc\u662f\u672c\u5730\u8d77\u7684node\u670d\u52a1\uff0c\u6240\u4ee5\u662f127.0.0.1\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u672c\u5730\u4f7f\u7528\u57df\u540d\uff0c\u9700\u8981\u8bbe\u7f6e\u7535\u8111\u7684hosts\u6587\u4ef6\uff0c\u6dfb\u52a0\u8fd9\u4e2a\u57df\u540d\u5230hosts\u4e2d\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1  www.testb.com")),(0,a.kt)("p",null,"proxy_set_header\uff1a\u8bbe\u7f6e\u4ee3\u7406\u5934\u4fe1\u606f\uff0c\u8fd9\u91cc\u8bbe\u7f6ehost\u5f53\u524d\u7684\u57df\u540d\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u662f\u4ee3\u7406\u7684\u5730\u5740"),(0,a.kt)("h2",{id:"\u4ee3\u7406\u7f13\u5b58"},"\u4ee3\u7406\u7f13\u5b58"),(0,a.kt)("p",null,"\u5728nginx\u4e2d\uff0c\u53ea\u8981\u6709\u4e00\u6b21\u7f13\u5b58\uff0c\u5176\u4ed6\u7528\u6237\u518d\u6b21\u8bf7\u6c42\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58"),(0,a.kt)("p",null,"nginx\u7f13\u5b58\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"proxy_cache_path cache levels=1:2 keys_zone=my_cache:10m;\n")),(0,a.kt)("p",null,"proxy_cache_path \u914d\u7f6e\u5b58\u653e\u5730\u5740"),(0,a.kt)("p",null,"cache \u76ee\u5f55"),(0,a.kt)("p",null,"levels \u662f\u5426\u8981\u521b\u5efa\u4e8c\u7ea7\u6587\u4ef6\u5939"),(0,a.kt)("p",null,"keys_zone \u540d\u79f0\u4ee5\u53ca\u7f13\u5b58\u5927\u5c0f"),(0,a.kt)("p",null,"\u5728server\u4e2d\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\n  listen 80;\n  server_name test.com;\n  location / {\n    proxy_cache my_cache;\n    proxy_pass http://127.0.0.1:8887;\n    proxy_set_header Host $host;\n  }\n}\n\n")),(0,a.kt)("p",null,"\u5728\u670d\u52a1\u7aef\u8bbe\u7f6e'max-age'\u542f\u7528\u7f13\u5b58\n's-max-age'\u4ee3\u7406\u670d\u52a1\u5668\u4e2d\u6709\u6548"),(0,a.kt)("p",null,"\u5982\u679c\u540c\u65f6\u8bbe\u7f6e\u4e86'max-age''s-max-age'\uff0c\u4ee3\u7406\u7f13\u5b58\u4f1a\u4f7f\u7528's-max-age'\uff0c\u6d4f\u89c8\u5668\u4f1a\u4f7f\u7528'max-age'"),(0,a.kt)("p",null,"'private'\uff1a \u53ea\u6709\u6d4f\u89c8\u5668\u80fd\u7f13\u5b58\uff0c\u4ee3\u7406\u670d\u52a1\u5668\u7684\u7f13\u5b58\u4e0d\u751f\u6548\uff0c\u4e5f\u5c31\u662f's-max-age'\u65e0\u4f5c\u7528"),(0,a.kt)("p",null,"'no-store' \u90fd\u4e0d\u7f13\u5b58"),(0,a.kt)("p",null,"'Vary'\uff1a\u8bf7\u6c42\u5934\u7684Vary\u503c\u76f8\u540c\u7684\u65f6\u5019\u624d\u4f7f\u7528\u7f13\u5b58\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e00\u6b21\u8bf7\u6c42\u7684\u8be5Vary\u503c\u4e0d\u7f13\u5b58\uff0c\u7b2c\u4e8c\u6b21\u8bf7\u6c42\u65f6\uff0c\u53d1\u73b0Vary\u503c\u5df2\u7ecf\u8bf7\u6c42\u8fc7\uff0c\u5219\u4f7f\u7528\u7f13\u5b58"))}u.isMDXComponent=!0}}]);