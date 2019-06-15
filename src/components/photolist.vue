<template>
  <div class="photolist">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',$index==0?'mui-active':'' ]"
            v-for="(item,$index) in categaryList"
            :key="$index"  @click="getImage($index)"
          >推荐</a>
        </div>
      </div>
    </div>
    <div>
      <ul>
        <router-link v-for="(item,$index) in list" :key="$index" tag="li" to="/home/photoinfo">
          <img v-lazy="item">
          <div class="info">
            <h1 class="info-title">这是标日</h1>
            <div class="info-content">
              这是内容
              这是内容
              这是内容
              这是内容
              这是内容
              这是内容
              这是内容
              这是内容
              这是内容
              这是内容
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
// 导入muijs
import mui from "../lib/mui/dist/js/mui";
export default {
  data() {
    return {
      categaryList: [],
      list: []
    };
  },
  created() {
    this.getCategary();
    this.getImage(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getCategary() {
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
    },
    getImage(id) {
      this.$http
        .jsonp(
          "https://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b"
        )
        .then(
          result => {
            if (result.ok === true) {
              setTimeout(() => {
                this.list.push(
                  "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg"
                );
                this.list.push(
                  "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
                );
              }, 2000);
              // this.list = result.body.subjects;
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
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0 15px;
}
li {
  background-color: #ccc;
  list-style: none;
  margin-bottom: 10px;
  text-align: center;
  box-shadow: 0 0 6px #999;
  position: relative;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img {
  width: 100%;
  vertical-align: middle;
}
.info{
  max-height: 84px;
  position: absolute;
  text-align: left;
  color: white;
  bottom: 0px;
  background-color: rgba(0,0,0,0.4);
}
.info-title{
  font-size: 14px;
}.info-content{
  font-size: 10px;
}
</style>


