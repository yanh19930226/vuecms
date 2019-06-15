<template>
  <div class="photoinfo-container">
    <h3 class="title">33</h3>
    <p class="info">
      <span>发表时间：33</span>
      <span>点击：33次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <div class="thumb-img-list">
      <!-- 使用 v-for 循环渲染缩略图 -->
      <img
        height="100"
        v-for="(item, index) in imginfolist"
        :src="item"
        :key="index"
        preview="0" preview-text="描述文字"
      >
    </div>
    <!-- 内容区域 -->
    <div
      class="content"
    >使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图使用 v-for 循环渲染缩略图</div>
  </div>
</template>
<script>
import Vue from "vue";
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
export default {
  data() {
    return {
      id: this.$route.params.id,
      imginfolist: []
    };
  },
  created() {
  },
  mounted() {
    this.imginfolist.push(
      "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
    );
    this.imginfolist.push(
      "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
    );
    this.imginfolist.push(
      "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
    );
    this.imginfolist.push(
      "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
    );
    this.imginfolist.push(
      "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
    );
    this.imginfolist.push(
      "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
    );
  },
  methods: {
    getImageInfo(id) {
      this.$http
        .jsonp(
          "https://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b"
        )
        .then(
          result => {
            console.log(result);
            if (result.ok === true) {
              this.categaryList = result.body.subjects;
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
.photoinfo-container {
  padding: 3px;
}
.title {
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
  color: #26a2ff;
}
.info {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
.content {
  font-size: 13px;
  line-height: 30px;
}

.thumb-img-list {
  img {
    margin: 10px;
    box-shadow: 0 0 7px gray;
  }
}
</style>


