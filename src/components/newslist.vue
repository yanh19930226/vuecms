<template>
  <div class="newslist">
    <ul class="mui-table-view">
      <router-link tag="li" class="mui-table-view-cell mui-media" to="/home/newsdetail/2" v-for="(item,$index) in newslist" :key="$index">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.pic">
          <div class="mui-media-body">
            <h4 v-text="item.title"></h4>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.time}}</span>
              <span>点击次数:1次</span>
            </p>
          </div>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newslist: []
    };
  },
   created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.jsonp("https://api.jisuapi.com/news/get?channel=头条&start=0&num=10&appkey=73065569db3dfcef").then(
        result => {
            console.log(result);
          if ((result.body.status === 0)) {
              this.newslist=result.body.result.list;
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

<style lang="scss" scoped>
.newslist {
  ul {
    li {
      h4 {
        font-size: 14px;
      }
      .mui-ellipsis {
        color: #226aff;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>

