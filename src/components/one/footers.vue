<template>
    <div class="foot">
      <ul>
          <li>
              <a>
                <span class="span">首页</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">购物车 (0)</span>
                <i class="i"></i>
              </a>
          </li>

           <li>
              <a>
                <span class="span">我的亚马逊</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">您的订单</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">我的心愿单</span>
                <i class="i"></i>
              </a>
          </li>

           <li>
              <a>
                <span class="span">查找其他人的心愿单</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">您最近查看的商品</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">默认地址及支付方式</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">联系客服</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">帮助中心</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">亚马逊完整网站</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">我的账户</span>
                <i class="i"></i>
              </a>
          </li>
           <li>
              <a>
                <span class="span">我的账户</span>
                <i class="i"></i>
              </a>
          </li>
      </ul>

      <div class="meil">
        已经是客户了吗？
        <a href="">登录</a>
      </div>
      <div id="nav-ftr-copyright">版权所有© 1996-2021，亚马逊公司或其关联公司</div>
    </div>
</template>
<style lang="scss" scoped>
.foot{
    padding-bottom: .28rem;
    background: #f3f3f3;
    width: 3.75rem;
    height: 0 auto;
    padding-top:.14rem ;
     margin: 0 auto;
    ul{
        width: 3.45rem;
        margin: 0 auto;
        border: 1px #cdcdcd solid;
    border-radius: .04rem .04rem .04rem .04rem;
    border-radius: 0\9;
    background: #fff;
    overflow: hidden;
        li{
            height: .47rem;
            width: 100%;
            border-bottom: .01rem solid #e7e7e7;
            a{
                width: 100%;
                height: 100%;
                display: block;
                display: flex;
                align-items: center;
                justify-content: space-between;
                // padding: 0 .14rem ;
            }
            .span{
                display: inline-block;
                max-width: 100%;
                padding-left: .14rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .i{
                display: block;
                background-position: -1.70rem -3.40rem;
                width: .06rem;
                height: .14rem;
                padding-right: .14rem;
                opacity: .32;
                background-image: url(https://images-cn.ssl-images-amazon.cn/images/G/28/gno/sprites/global-sprite-32-v1._CB485972286_.png);
               background-repeat: no-repeat;
            }
        }
    }
    .meil{
        color: #333;
    font-size: .15rem;
    text-align: center;
    padding: .17rem;
    height: .20rem;
    line-height: .20rem;
    a{
        padding-left: .03rem;
    color: #0066c0;
    }
    }
    #nav-ftr-copyright {
    text-align: center;
    font-size: 11px;
    color: #aaa;
}
}
</style>