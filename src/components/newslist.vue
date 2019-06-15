<template>
  <div class="newslist">
    <ul class="mui-table-view">
      <router-link tag="li" class="mui-table-view-cell mui-media" :to="'/home/newsdetail/'+item.id" v-for="item in newslist" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.images.large">
          <div class="mui-media-body">
            <h4 v-text="item.title"></h4>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.year}}</span>
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
      this.$http.jsonp("https://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b").then(
        result => {
            console.log(result);
          if ((result.ok === true)) {
              this.newslist=result.body.subjects;
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

