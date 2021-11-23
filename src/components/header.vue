<template>
  <div class="amazon_header">
    <div class="amahead_left">
      <a href="#">
        <div class="ahl_img"></div>
      </a>
    </div>

    <div class="amahead_right">
      <a href="#" class="ahr_logn"> 登录 </a>
      <a href="#" class="ahr_right">
        <i class="ahr_shop"></i>
      </a>
    </div>

    <div class="header_shang">
      <div class="hes_con">
        <a href="#"
          >商品分类
          <i> 选择 </i>
        </a>
        <a href="#">镇店之宝</a>
      </div>
    </div>
    <!--  -->
    <div class="header_input">
      <div class="heinp_left">
        <div class="heinp_lein">
          <input type="text" />
        </div>
      </div>
      <div class="heinp_right">
        <i></i>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
.amazon_header {
  position: relative;
//   height: 0.48rem;
  width: 3.75rem;
  margin: 0 auto;
  border-bottom: 1px solid #333333;
  background-color: #f6f6f6;
}
.amahead_left {
  position: relative;
  float: left;

  .ahl_img {
    margin: 0.09rem 0 0 0.15rem;
    background-position: -0.1rem -2rem;
    width: 0.65rem;
    height: 0.28rem;
    background-image: url(https://images-cn.ssl-images-amazon.cn/images/G/28/gno/sprites/global-sprite-32-2x-v1._CB485971876_.png);
    background-size: 3.5rem;
  }
}
.amahead_right {
  position: relative;
  float: right;
  width: auto;
  display: inline-block;
  .ahr_logn {
    float: left;
    line-height: 0.48rem;
    font-size: 0.13rem;
    color: #007185;
  }
  .ahr_right {
    float: left;
    padding: 0.1rem 0.18rem 0.11rem 0.12rem;
  }
  .ahr_shop {
    background-image: url(https://images-cn.ssl-images-amazon.cn/images/G/28/gno/sprites/global-sprite-32-2x-v1._CB485971876_.png);
    background-size: 3.5rem;
    display: block;
    position: static;
    background-position: -1.3rem -3.4rem;
    width: 0.32rem;
    height: 0.22rem;
    float: left;
    // padding: 10px 18px 11px 12px;
  }
}
//
.header_shang {
  display: block;
  height: 0.48rem;
  width: 100%;
  background: #f8f8f8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  .hes_con {
    a {
      position: relative;
      color: #666;
      float: left;
      margin: 0.24rem 0.1rem 0 0.14rem;
      font-size: 0.13rem;
      font-weight: 700;
      font-family: inherit;
      text-decoration: none;
      white-space: nowrap;
    }
    i {
      position: absolute;
      top: -14px;
      left: 0;
      font-size: 0.11rem;
      font-weight: 400;
      font-style: normal;
    }
  }
}
//
.header_input {
  position: relative;
  height: .56rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  flex: 1;
  margin-bottom: 0;
  .heinp_left {
    width: 3.28rem;
    height: .5rem;
    float: left;
    .heinp_lein {
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 2.8rem;
        height: .35rem;
        display: block;
        padding: 0 .05rem 0 .1rem;
        border: 0;
        color: #000;
        font-size: .15rem;
        border: 1px solid #d0d0d0;
        margin: .1rem;
        border-radius: .1rem;
        outline: none;
      }
    }
  }
  .heinp_right {
    position: relative;
    height: .35rem;
    width: .35rem;
    margin: .1rem .1rem 0 0;
    border: 1px solid;
    border-color: #3d444c #2f353b #2c3137;
    background-color: #5b626a;
    float: right;
    border-radius: .1rem;
    i {
      background-image: url(https://images-cn.ssl-images-amazon.cn/images/G/28/gno/sprites/global-sprite-32-2x-v1._CB485971876_.png);
      background-size: 3.5rem;
      position: absolute;
      top: .06rem;
      left: .06rem;
      width: .21rem;
      height: .21rem;
      background-position: -.4rem -2.9rem;
    }
  }
}
</style>