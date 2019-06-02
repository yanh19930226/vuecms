<template>
  <div id="app">
    <Header></Header>
    <transition enter-active-class="zoomInLeft">
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
}
</style>
