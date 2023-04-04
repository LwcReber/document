使用yalc开发npm项目

总结了使用yalc进行本地开发时遇到的问题，以及解决方案

问题点以及解决办法

1. yalc push的是npm项目打包后的lib产物，每次修改代码都需要build，然后yalc push

   针对每次都要手动更改的问题是必须要解决的，用`nodemon`就能解决这个问题，只要项目内代码有变更，则执行build命令，打包代码，并且最后用yalc push上传

   

2. yalc 包命名如果跟npm包一样，在使用yalc包的demo项目需要频繁修改package.json引入的方式

   实际是package.json的name问题，解决方案是本地调试的使用一个name，正式包的用另一个name，但是为了避免要不断手动改name的麻烦，也是为了避免直接发布错的问题，编写一个webpack 自定义插件，直接修改package.json的name，同时区分开几个环境，不同环境不同name，使得demo发布到不同环境时也能使用不同的npm包。同时编写快速添加yalc和移除yalc包的命令，比如`npm run add`就能添加yalc包到项目内

   

3. demo项目无法识别yalc的更新从而触发热更新，需要手动重新run一次

   同样是使用`nodemon` 进行处理，检测到.yalc文件夹发生变更就重新运行项目

   

4. demo重新运行打包时间比较慢，两边都要重新运行一次到刷新页面的用时比较长

   demo项目可以使用vite作为构建工具，能够显著提高开发环境的构建速度，这样热更新的时间就少了一大半



完整代码可看git地址：https://github.com/LwcReber/yalc-project