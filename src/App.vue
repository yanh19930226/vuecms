<template>
  <div id="app">
    <Header></Header>
    <transition enter-active-class="animated fadeInRight" leave-to-class="animated fadeOutLeft"  :duration="{ enter: 3500, leave: 3500 }">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../src/components/header.vue";
import Footer from "../src/components/footer.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app{
  padding-top: 40px;
   padding-bottom: 50px;
}
.fadeOutLeft{
  position: absolute;
}

.mint-header.is-fixed{
  z-index:99;
}
.mui-bar-tab .mui-tab-item-yh.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-yh {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-yh .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-yh .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-yh.mui-active {
    color: #007aff;
}

/* 没有用 */
/* 动画效果相关的类样式 */
.v-enter {
  opacity: 0;
  /* 让即将进入的页面，向右偏移 100% 屏幕的宽度 */
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  /* 让即将进入的页面，向右偏移 100% 屏幕的宽度 */
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
</style>
