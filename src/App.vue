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
