<template>
  <div class="contone">
    <div class="contone_lunbo">
      <div class="swiper mySwiper" id="contone_lunone">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://images-cn.ssl-images-amazon.cn/images/G/28/bag/GS/Event/2020WINTER/MP/jy_Winter-Opening_mbpage-_01._CB417077220_SX828_.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://images-cn.ssl-images-amazon.cn/images/G/28/img19/other/SLW42/mb/mb-w42-1008b_01._CB451931413_SX828_.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://images-cn.ssl-images-amazon.cn/images/G/28/xywang/201904/jy_Mobile1242x450_BeautyWK14._CB468608861_SX828_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="contone_lunx">
        <div class="swiper mySwiper" id="contone_luntwo">
          <div class="swiper-wrapper">
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/414dae9PjOL._SR270,360_.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/41qQ9JjMZPL._SR270,360_.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/313tU1U5VuL._SR270,360_.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/31n3jzKfKfL._SR270,360_.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/31PfRLIgnJL._SR270,360_.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/41kDgLzduGL._SR270,360_.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/41kDgLzduGL._SR270,360_.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/41kDgLzduGL._SR270,360_.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide contone_ltone">
              <img
                src="https://images-cn.ssl-images-amazon.cn/images/I/41kDgLzduGL._SR270,360_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Conttwo />
    <Contthree />
    <Contfour />
    <Contimg />
    <Contfour />
    <Contfive />
    <Contfour />
    <Contfive />
    <Contfour />
    <Contimg />
    <Contsix />
    <Contimg />
    <Contimg />
    <Contimg />
    <Contseven/>
    <!-- <Conteight/>
    <Contnine/>
    <Contten/> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import Header from "@/components/header.vue";
import Conttwo from "@/views/coniner/conttwo.vue";
import Contthree from "@/views/coniner/contthree.vue";
import Contfour from "@/views/coniner/contfour.vue";
import Contfive from "@/views/coniner/contfive.vue";
import Contsix from "@/views/coniner/contsix.vue";
import Contimg from "@/views/coniner/contimg.vue";
import Contseven from "@/views/coniner/contseven.vue";
import Conteight from "@/views/coniner/conteight.vue";
import Contnine from "@/views/coniner/contnine.vue";
import Contten from "@/views/coniner/contten.vue";


export default {
  components: {
    Header,
    Conttwo,
    Contthree,
    Contfour,
    Contfive,
    Contsix,
    Contimg,
    Contseven,
    Conteight,
    Contnine,
    Contten
  },
  mounted() {
    var mySwiper = new Swiper("#contone_lunone", {
      loop: true, // 循环模式选项
        autoplay: true, //自动播放
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper("#contone_luntwo", {
      slidesPerView: 3,
      spaceBetween: 1,
      // autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.contone {
  width: 3.75rem;
  // height: 4.2rem;
  margin: 0 auto;
}
.contone_lunbo {
  width: 3.75rem;
  height: 4.2rem;
  position: relative;
  #contone_lunone {
    width: 3.75rem;
    height: 3.27rem;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.contone_lunx {
  width: 100%;
  position: absolute;
  top: 2.3rem;
  overflow: hidden;
  .contone_ltone {
    position: relative;
    width: 1.35rem;
    height: 1.8rem;
    border-radius: 0.1rem;
    float: left;
    margin: 0 0.08rem 0 0.08rem;
    box-shadow: 0 0.02rem 0.05rem rgba(15, 17, 17, 0.15);
    overflow: hidden;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
