import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './routerconfig'
// import axios from 'axios'
import VueResource from 'vue-resource'

import './mint-ui.js'
import "../src/lib/mui/dist/css/mui.min.css"
import "../src/lib/mui/dist/css/icons-extra.css"
import animated from 'animate.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(animated)



const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: routerConfig,
    linkActiveClass: "mui-active" //覆盖默认的路由active样式使用mui的active样式
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})