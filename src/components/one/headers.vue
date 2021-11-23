<template>
    <div class="head">
       <div class="head_t">
          <p>
            <a  class="nav-logo-link" tabindex="">
                <span class="simg"></span>
            </a>
          </p>
          <div class="nn">
             <a class="tu">
               <i class="tu_img"></i>
             </a>
          </div>
       </div>

       <div class="input">
         <div class="shu">
           <input type="text" placeholder="我们收到收到">
         </div>
         <p class="let">
              <span class="yan">
                  <i></i>
              </span>
          </p>
       </div>
    </div>
</template>
<style lang="scss" scoped>
.head{
    margin: 0 auto;
    width: 3.75rem;
    height: .98rem;
    background: -webkit-linear-gradient(top,#fff,#eee);
}
.head_t{
    position: relative;
    height: .48rem;
    width: 100%;
    border-bottom: 1px solid #d4d4d4;
    p{
     width: 1.04rem;
     height: .33rem;
     padding: .09rem 0 0 .15rem;
     float: left;
     .nav-logo-link {
         width: 1.04rem;
         height: .29rem;
        clear: both;
        display: inline-block;
        cursor: pointer;
     }
  .simg {
      display: block;
    background-position: -.10rem -2.00rem;
    width: .65rem;
    height: .28rem;
    background-image: url(https://images-cn.ssl-images-amazon.cn/images/G/28/gno/sprites/global-sprite-32-2x-v1._CB485971876_.png);
    background-size: 3.50rem;
     }
    }
}
.nn{
    width: .62rem;
    height: .43rem;
    float: right;
    .tu{
        float: left;
    padding: .10rem .18rem .11rem .12rem;
    }
    .tu_img{
        display: block;
        position: static;
        background-position: -1.30rem -3.40rem;
        width: .32rem;
        height: .22rem;
        background-image: url(https://images-cn.ssl-images-amazon.cn/images/G/28/gno/sprites/global-sprite-32-2x-v1._CB485971876_.png);
        background-size: 3.50rem;
    }
}
.input{
    width: 100%;
    height: 0.50rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .let{
     width: 0.47rem;
    align-items: center;
    float: right;
    justify-content: center;
    display: flex;
    height: 0.45rem;
    }
    .yan{
        position: relative;
    height: 0.35rem;
    width: 0.35rem;
    // margin: 0.1rem 0.1rem 0 0;
    border: 1px solid;
    border-color: #3d444c #2f353b #2c3137;
    background-color: #5b626a;
    float: right;
    border-radius: 0.1rem;
        i{
           background-image: url(https://images-cn.ssl-images-amazon.cn/images/G/28/gno/sprites/global-sprite-32-2x-v1._CB485971876_.png);
    background-size: 3.5rem;
    position: absolute;
    top: 0.06rem;
    left: 0.06rem;
    width: 0.21rem;
    height: 0.21rem;
    background-position: -0.4rem -2.9rem;
        }
    }
    
}
.shu{
    width: 2.93rem;
    position: relative;
    height: .35rem;
    background: #fff;
    float: left;
    // margin: .10rem .10rem .05rem .12rem;
    input{
        border-radius: .08rem .08rem .08rem .08rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        direction: ltr;
        display: block;
        border: 0;
        width: 100%;
        color: #000;
        padding-left: .10rem;
        font-size: .15rem;
        font-family: inherit;
        outline: 0;
        outline-width: 0;
        border: 1px solid #d0d0d0;
    }
}
</style>