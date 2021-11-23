<template>
  <div class="contnine">
    <div class="contnine_cont">
      <ul>
        <li>
          <span class="conne_"
            >购物车(<span class="conne_number">0</span>)</span
          >
          <i></i>
        </li>

        <li>
          <span class="conne_">我的亚马逊</span>
          <i></i>
        </li>
         <li>
          <span class="conne_">您的订单</span>
          <i></i>
        </li>
        
         <li>
          <span class="conne_">我的心愿单</span>
          <i></i>
        </li>
         <li>
          <span class="conne_">查找其他人的心愿单</span>
          <i></i>
        </li>
         <li>
          <span class="conne_">我的账户</span>
          <i></i>
        </li>
         <li>
          <span class="conne_">您最近查看的商品</span>
          <i></i>
        </li>
         <li>
          <span class="conne_">默认地址及支付方式</span>
          <i></i>
        </li>

         <li>
          <span class="conne_">联系客服</span>
          <i></i>
        </li>
         <li>
          <span class="conne_">帮助中心</span>
          <i></i>
        </li>
         <li>
          <span class="conne_">亚马逊完整网站</span>
          <i></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contnine {
  width: 3.75rem;
  margin: 0 auto;
  .contnine_cont {
    width: 3.47rem;
    height: 5.21rem;
    border: 0.01rem solid #ccc;
    margin: 0 auto;
    margin-top: 0.1rem;
    border-radius: 0.1rem;
    font-weight: 400;
    li {
      width: 3.04rem;
      height: 0.2rem;
      padding: 0.135rem 0.27rem 0.13rem 0.17rem;
      border-bottom: 0.01rem solid #ccc;
      i {
        float: right;
        display: block;
        background-position: -170px -340px;
        width: 10px;
        height: 14px;
        margin-right: -10px;
        opacity: 0.32;
        background-image: url(https://images-cn.ssl-images-amazon.cn/images/G/28/gno/sprites/global-sprite-32-v1._CB485972286_.png);
        background-repeat: no-repeat;
      }
    }
    .conne_number {
      color: #e47911;
      font-weight: 400;
    }
  }
}
</style>