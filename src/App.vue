<template>
  <div id="app">
    <Header></Header>
    <!-- <router-view></router-view> -->
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
</style>
