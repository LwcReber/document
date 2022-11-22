---
title: http特性
date: 2019-08-10 21:23:09
tags: [http]
---



## 缓存头的含义

#### 可缓存性
public: 在http经过的任何地方（包括代理服务器）都可缓存

private: 发起请求http请求的浏览器

no-cache 任何节点都不缓存，但是要去服务器验证后才能重新请求
<!--truncate-->
#### 到期
max-age 缓存多长时间（秒）到期

s-maxage 在代理服务器端才有作用
max-stale 过期后，在max-stale的期限内使用过期的缓存，服务端无效，在发起端用

#### 重新验证
must-revadate 设置max-age，过期后，在（原）服务端重新发起请求，再验证缓存是否真的过期
proxy-validate 用在缓存服务器中，过期后先去缓存服务器中请求，再验证缓存

#### 其他
no-store 完全不缓存

no-transform 告知代理服务器，不要更改缓存端内容，比如不允许压缩

防止服务端文件更新后，客户端还继续有缓存，修改文件名hash码

## 缓存验证
last-Modified 上次修改时间

配合if-Moified-Since 或者if-Unmodified-Since使用，对比上次修改时间，验证资源是否需要更新

etag
数据签名
配合if-Match或者if-Non-Match使用，对比资源签名是否一致

服务端当前判断etag为本次的etag，当需要发布新资源时，修改判断的etag值即可。客户请求过来时是上次的etag值，经过服务端判断后，校验是旧的etag。就会返回新的资源

## CSP
限制资源获取,报告资源获取越权

限制方式
Default-src 限制全局
制定资源类型 connect-src img-src style-src script-src font-src等

#### 限制加载
`'Content-Security-Policy':  'default-src  \'self\'   http： https:'`

default-src禁用类型，默认所有的src类型限制src路经，可配置白名单，自己的服务器self，或者http，https的路径才允许使用。不允许插入的script标签js代码直接执行，防止xss攻击

添加一个参数 可进行一个上报申请，发送一个请求

`'Content-Security-Policy':  'default-src  \'self\'   http： https:; report-uri /report'`

#### 允许加载，只做report的处理
`'Content-Security-Policy-Report-Only': 'default-src  \'self\'   http： https:; report-uri /report'`

在html中使用
`<meta http-equiv="Content-Security-Policy" content="script-src ‘self';">`不可使用report上报的方式
