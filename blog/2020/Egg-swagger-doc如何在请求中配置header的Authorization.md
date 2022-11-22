---
title: Egg-swagger-doc如何在请求中配置header的Authorization
date: 2020-06-02 23:53:12
tags: [egg]
---


1. 在config.defautl.js中

   ```javascript
   config.swaggerdoc = {
     ...
     securityDefinitions: {
         Bearer: {
           type: 'apiKey',
           name: 'Authorization',
           in: 'header',
         }
     }
      ...
   }
   ```

   在securityDefinitions中定义Bearer属性（任意字段都可以，Bearer是因为Authorization中的配置需要书写，所以用该字段比较好cv）

2. 在接口controller定义里面，swagger的书写添加上面定义那个属性即可,  如下

   ```javascript
   /**
      * @summary 新增article
      * @description 新增article
      * @router post /api/v1/article
      * @Bearer
      * @response 200 baseResponse
      */
   ```

   只要在接口定义中加上`@Bearer`即可

这样在swagger-ui中配置了Authorization值后，请求header的Authorization属性都会带有配置的值
