---
title: react + typescript + vite实战
date: 2021-08-05 22:49:06
tags: [react, vite]
---


create-react-app 相信开发者已经非常熟悉，最近vite也火了，我也在项目中用了起来。

试了一把vite带来的极速体验，同时也踩了它的坑

下面描述下，用vite创建一个react的项目过程

### 创建项目
   根据官网提供的，使用了 react-ts 模板，创建完成后，页面跟create-react-app相差不大

   ```
   npm init vite@latest my-react-app --template react-ts
   ```

    看到index.html 模板的时候，script标签变成这种，type="module"，关键就是这个

   ```html
   <script type="module" src="/src/main.tsx"></script>
   ```
<!--truncate-->
### 修改server服务，项目端口等

   查看文档，可以看到server的配置非常的简单了，这时候已经看到这样，感觉vite用起来就是太爽了

   ``` js
   server: {
       port: 3000,
       host: '0.0.0.0'
     }
   ```

   相比较create-react-app的配置，create-react-app简直太麻烦，要安装一堆的外置npm包，然后想要修改个项目端口都是各种麻烦，虽然后面找到简单的办法可以在环境变量文件中直接加入端口快速配置，但不是很友好

### 配置项目文件夹别名

   在vite.config.ts中添加alias，同时tsconfig中也要对paths进行配置
    ```js
    resolve: {
        alias: {
          // 键必须以斜线开始和结束
          '@': path.resolve(__dirname, './src')
        }
      }
    ```

### 对antd主题色进行配置
    antd的主题色这里分几种情况

    1. #### 样式按需加载，但不支持主题色变量配置
        使用`vite-plugin-importer`(需要通过npm安装)在vite中的plugin配置即可，页面也无需引入antd的css
        ```js
        usePluginImport({
          libraryName: "antd",
          libraryDirectory: "es",
          style: "css"
        })
        ```

    2. #### 样式全部引入，支持主题色变量配置
        在上面1的基础，在vite中添加
        ```js
        css: {
          preprocessorOptions: {
            less: {
              javascriptEnabled: true,
                modifyVars: {
                  "primary-color": "#1DA57A",
                  "link-color": "#1DA57A",
                  "border-radius-base": "2px"
                }
            }
          }
        } 
        ```
        同时在main.tsx中引入antd的样式`import 'antd/dist/antd.less'  `注意是less，css无效，因为上面配置的是less

    3. #### 自定义主题样式配置，支持样式按需加载
        使用`vite-plugin-imp`在plugin中配置
        ```js
          import fs from 'fs'
          import lessToJS from 'less-vars-to-js'
          
          var themeVariables = lessToJS(
            fs.readFileSync(path.resolve(__dirname, 'src/styles/variables.less'), 'utf8')
          )
          
          defineConfig({
            plugins: [
              ...
              vitePluginImp({
                libList: [
                  {
                    libName: "antd",
                    style: (name) => \`antd/es/${name}/style` // 这个地方样式实现按需引入
                  }
                ]
                })
              ...
            ]
          })
        ```
        css配置改为
        ```js
          css: {
            preprocessorOptions: {
              less: {
                javascriptEnabled: true,
                modifyVars: themeVariables
              }
            }
          }
        ```

 ### 配置多环境时也是比较方便，在添加.env.xxx的文件即可，然后在build的命令上添加--mode xxx的方式

    只是环境变量的使用有些改变命名需要是VITE_APP开头，使用环境变量时`const url = import.meta.env.VITE_APP_URL`变为这样

 #### build
   在build的时候发现打包后的文件比较大，在build配置中添加rollupOptions
    ```js
      // 忽略某些文件不分割
      var ignoreFile = []
      ...
      rollupOptions: {
            output: {
              manualChunks: (id) => {
                // 使用这种方式在项目里确实遇到过因为分割包后,因为加载问题出现一些报错的异常情况,所以声明了ignoreFile对有问题的文件不进行分割处理
                if (id.includes('node_modules')) {
                  var fileName = id.toString().split('node_modules/')[1].split('/')[0].toString()
                  if (ignoreFile.indexOf(fileName) === -1) {
                    return fileName
                  }
                }
              }
            }
          }
        ...
     ```

   使用了代码分割后，react，react-dom，antd等都被单独打包出来了



### 一些问题

1. 打包后，出现的文件过大，目前看到只有通过rollupOptions来进行切片，官方没有给出相应demo，还要去rollup查看如何使用，网上的配置代码也不多，可能很多项目并没有用到切片并没有像webpack那种有成熟的代码分割方案SplitChunksPlugin。比如项目比较大时，react，antd，lodash都会打包成vendor的大包，这样页面加载容易出现白屏现象



2. 开发环境下,如果删掉了node_modules,每次进入一个新页面,因为要在node_module文件中的.vite文件夹生成加载的文件,会导致进入一个新页面就会一直刷新,直到页面用到的所有模块都加入到.vite文件夹中为止，项目体量小的话是没有多大感觉，但是页面多的话,有了几十个页面，就会经常出现这种体验不好的问题



3. 目前eslint的报错提醒没有，不会在命令面包上提示，代码报错也只在浏览器上才有提示，所以加上husky，在提交代码前做一次eslint检测很有必要

   

**代码仓库  >>> https://github.com/LwcReber/react-vite**


### 参考文章

https://blog.csdn.net/weixin_41277748/article/details/116431789 (rollupOptions 处理)

https://juejin.cn/post/6933562433264943111#heading-4

https://juejin.cn/post/6938671679153373214#heading-6
