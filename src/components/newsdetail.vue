<template>
  <div class="newsdetail">
    <h4>新闻标体</h4>
    <p>
      <span>发表时间:2019-06-31</span>
      <span>点击次数</span>
    </p>
    <hr>
    <div class="newsdetail-content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        id:ths.$route.params.id,
    };
  },
  methods: {
    getNewsDetail() {
      this.$http.jsonp("https://api.jisuapi.com/news/get"+ths.id).then(
        result => {
          console.log(result);
          //   if ((result.body.status = 0)) {
          //     Toast("获取数据成功");
          //   } else {
          //     Toast("获取数据失败");
          //   }
        },
        result => {
          Toast("网络错误");
        }
      );
    }
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


