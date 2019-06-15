<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg" alt>
      <h1>小米胜多负少防守打法胜多负少的方式</h1>
      <div class="info">
        <p class="price">
          <span class="new">100</span>
          <span class="old">200</span>
        </p>
        <p class="sell">
          <span>好</span>
          <span>不好</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg" alt>
      <h1>小米</h1>
      <div class="info">
        <p class="price">
          <span class="new">100</span>
          <span class="old">200</span>
        </p>
        <p class="sell">
          <span>好</span>
          <span>不好</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg" alt>
      <h1>小米是的范德萨发生的水电费第三方</h1>
      <div class="info">
        <p class="price">
          <span class="new">100</span>
          <span class="old">200</span>
        </p>
        <p class="sell">
          <span>好</span>
          <span>不好</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: space-between;
}
.goods-item {
  width: 46%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 6px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 260px;
}
.goods-item img {
  width: 100%;
}
h1 {
  font-size: 14px;
}
p{
    margin: 0;
}
.info{
     background-color: #eee;
}
.new{
    color: red;
    font-weight: bold;
    font-size: 14px;
}
.old{
    text-decoration: line-through;
    font-size: 10px;
}
.sell{
    display: flex;
    justify-content: space-between;
}
</style>

