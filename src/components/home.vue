<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item,$index) in lunbotu" :key="$index">
        <img :src="item.image" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../assets/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/newslst">
          <img src="../assets/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/newslst">
          <img src="../assets/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/newslst">
          <img src="../assets/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/newslst">
          <img src="../assets/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/newslst">
          <img src="../assets/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </router-link >
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotu: [] // 轮播图的数组
    };
  },
  created() {
    this.getSwipe();
  },
  methods: {
    getSwipe() {
      this.$http.jsonp("https://api.douban.com/v2/movie/subject/26004132/photos?count=100&apikey=0df993c66c0c636e29ecbb5344252a4a").then(
        result => {
            console.log(result);
          if ((result.status ===200)) {
             this.lunbotu.push(result.body.photos[1]);
             this.lunbotu.push(result.body.photos[2]);
             this.lunbotu.push(result.body.photos[3]);
          } else {
            Toast("获取数据失败");
          }
        },
        result => {
          Toast("网络错误");
        }
      );
    }
  }
};
</script>
<style scoped>
/* 轮播样式 */
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  /* background-color: red; */
}
img{
    width: 100%;
}
/* 九宫格样式 */
.mui-grid-9{
    background-color:white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img{
    width: 60px;
    height: 60px;
}
</style>
