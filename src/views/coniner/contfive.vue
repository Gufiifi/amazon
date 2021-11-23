<template>
  <div class="contfive">
    <div class="confour_title">
      <h2>黑色星期五分会场</h2>
    </div>
    <div class="contfive_cont">
      <div class="contfive_one">
        <img
          src="https://images-cn.ssl-images-amazon.cn/images/I/41xb4hf09ZL._AC_SR420,420_.jpg"
          alt=""
        />
        <span>时尚新趋势 49元起</span>
      </div>
      <div class="contfive_one">
        <img
          src="https://images-cn.ssl-images-amazon.cn/images/I/31l83kcChNL._AC_SR420,420_.jpg"
          alt=""
        />
        <span>时尚新趋势 49元起</span>
      </div>
      <div class="contfive_one">
        <img
          src="https://images-cn.ssl-images-amazon.cn/images/I/41Sor+WVdkL._AC_SR420,420_.jpg"
          alt=""
        />
        <span>时尚新趋势 49元起</span>
      </div>
      <div class="contfive_one">
        <img
          src="https://images-cn.ssl-images-amazon.cn/images/I/41s5p9EuOyL._AC_SR420,420_.jpg"
          alt=""
        />
        <span>时尚新趋势 49元起</span>
      </div>
    </div>
    <div class="contfour_geng">
      <a href="#">进去主会场</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contfive {
  width: 3.45rem;
  margin: 0 auto;
  margin-top: 0.05rem;
  background-color: #fff;
  padding: 0.15rem;
  border-top: 0.05rem solid #cccccc;
}
.confour_title {
  width: 3.45rem;
  padding-bottom: 0.1rem;
  h2 {
    font-weight: normal;
  }
}
.contfive_cont {
  width: 3.45rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .contfive_one {
    width: 1.67rem;
    height: 1.91rem;
    margin-top: 0.01rem;
    img {
      width: 1.67rem;
      height: 1.67rem;
    }
    span {
      display: inline-block;
      width: 1.67rem;
    }
  }
}
.contfour_geng {
  padding-top: 0.13rem;
  a {
    color: #007185;
  }
}
</style>