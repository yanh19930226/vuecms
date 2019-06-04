# vuecms

> A Vue.js project
1.vue中引入mui的时候字体编译不了的问题：https://blog.csdn.net/unbraler/article/details/83339687（修改了webpackconfig文件需要重新编译）
2.制作底部购物车的时候需要另外的mui的扩展图标和样式
3.linkActiveClass: "mui-active" //覆盖默认的路由active样式使用mui的active样式
4.使用Animate动画 右侧进入左侧消失，修改消失的position为absolute
5.顶部的滑动条的使用mui的tap-top-webview组件,删除mui-fullscreen的样式去除占满全屏的问题
6.mui的滑动条需要导入mui的js
7.关闭webpack中的严格模式
8.关于引入局部滚动条后底部tab不能使用的问题



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
