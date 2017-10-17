# 乐联音频技术支持

这是我以前写的乐联音频技术支持的页面。旨在让大家在现场有需求的时候能查到。有闲情逸致的话，一起搞啦

## 代码
这是一些非常老的代码了，纯前端的，甚至没有js的代码。由于有AJAX，需要搭个服务才能本地跑。未来希望能够用vue再连个包含一定逻辑的flask后端做得更好一点

## UX 和 UE
目前的UX和UE是非常糟糕的，基本就是进去了估计也没什么人要看。
我的想法是根据使用场景和目标用户重构整个平台。把它搭到公众号的一个链接里，在微信上实现。并根据角色来方面用户查询其想要的音频技术支持。
一些简单的想法我做在我称为[Recho](http://jinchenhao.phonicavi.com/#/recho)的demo里，可以参考一下，不过这个偏教程的感觉。

## 内容
目前的代码库最有价值的信息其实是我已经基本写好的所有关于现场音频的一些资料，可以在`./content`里看到

## 前端build

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
