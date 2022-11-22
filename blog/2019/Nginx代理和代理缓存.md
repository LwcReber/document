---
title: Nginx代理和代理缓存
date: 2019-08-21 22:36:45
tags: [nginx]
---

### 基础代理配置
下载nginx到电脑上后，找到nginx.conf文件
添加server
```
server {
  listen 80;
  server_name testb.com;
  location / {
    proxy_pass http://127.0.0.1:8887;
    proxy_set_header Host $host;
  }
}
```
listen： 监听端口，现在的方式是监听到域名，然后到http://127.0.0.1:8887这个地址，所以默认80端口
server_name： 就是域名地址，

location： 匹配的路径

proxy_pass：代理到哪个地址， 这里是本地起的node服务，所以是127.0.0.1，需要注意的是本地使用域名，需要设置电脑的hosts文件，添加这个域名到hosts中，比如`127.0.0.1  www.testb.com`

proxy_set_header：设置代理头信息，这里设置host当前的域名，如果不设置，则默认是代理的地址

<!-- more -->
## 代理缓存

在nginx中，只要有一次缓存，其他用户再次请求时，可以直接使用缓存

nginx缓存配置

```
proxy_cache_path cache levels=1:2 keys_zone=my_cache:10m;
```
proxy_cache_path 配置存放地址

cache 目录

levels 是否要创建二级文件夹

keys_zone 名称以及缓存大小

在server中配置
```
server {
  listen 80;
  server_name test.com;
  location / {
    proxy_cache my_cache;
    proxy_pass http://127.0.0.1:8887;
    proxy_set_header Host $host;
  }
}

```

在服务端设置'max-age'启用缓存
's-max-age'代理服务器中有效

如果同时设置了'max-age''s-max-age'，代理缓存会使用's-max-age'，浏览器会使用'max-age'

'private'： 只有浏览器能缓存，代理服务器的缓存不生效，也就是's-max-age'无作用

'no-store' 都不缓存

'Vary'：请求头的Vary值相同的时候才使用缓存，也就是第一次请求的该Vary值不缓存，第二次请求时，发现Vary值已经请求过，则使用缓存
