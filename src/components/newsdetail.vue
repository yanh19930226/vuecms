<template>
  <div class="newsdetail">
    <h4>{{news.title}}</h4>
    <p>
      <span>发表时间:{{news.year}}</span>
      <span>点击次数</span>
    </p>
    <hr>
    <div class="newsdetail-content" v-html="news.summary"></div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comments from "./comment.vue"
export default {
  data() {
    return {
      id: this.$route.params.id,
      news: {}
    };
  },
  created() {
    this.getNewsDetail();
  },
  methods: {
    getNewsDetail() {
      this.$http
        .jsonp(
          "https://api.douban.com/v2/movie/subject/" +
            this.$route.params.id +
            "?apikey=0b2bdeda43b5688921839c8ecb20399b"
        )
        .then(
          result => {
            console.log(result);
            if (result.ok === true) {
              this.news = result.body;
            } else {
              Toast("获取数据失败");
            }
          },
          result => {
            Toast("网络错误");
          }
        );
    }
  },
  components: {

  }
};
</script>
<style lang="scss" scoped>
.newsdetail {
  padding: 0 10px;
  h4 {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  p {
    font-size: 13px;
    color: #22a6ff;
    display: flex;
    justify-content: space-between;
  }
}
</style>


