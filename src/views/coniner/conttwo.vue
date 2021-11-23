<template>
<div class="conttwo">
  <div class="conttwo_title">
    <div class="swiper mySwiper" id="conttwo_lun">
      <div class="swiper-wrapper">
        <div class="swiper-slide conttwo_cont">
          <router-link to="totay">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/21Y2bQS3irL._AC_SR160,140_.png"
            alt=""
          />
          <p>今日特惠</p>
          </router-link>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/211EXAkD16L._AC_SR160,140_.png"
            alt=""
          />
          <p>领券中心</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/11+IKKqNvWL._AC_SR160,140_.png"
            alt=""
          />
          <p>Kindle商店</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/11q7lktHdcL._AC_SR160,140_.png"
            alt=""
          />
          <p>Prime会员</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/41IMzdharNL._AC_SR160,140_.png"
            alt=""
          />
          <p>海外购精选</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/21uYYRduXcL._AC_SR160,140_.png"
            alt=""
          />
          <p>海外购上心</p>
        </div>
       
      </div>
    </div>
  </div>
  <!--  -->
  <div class="conttwo_title">
    <div class="swiper mySwiper" id="conttwo_lunt">
      <div class="swiper-wrapper">
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/21Y2bQS3irL._AC_SR160,140_.png"
            alt=""
          />
          <p>今日特惠</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/211EXAkD16L._AC_SR160,140_.png"
            alt=""
          />
          <p>领券中心</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/11+IKKqNvWL._AC_SR160,140_.png"
            alt=""
          />
          <p>Kindle商店</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/11q7lktHdcL._AC_SR160,140_.png"
            alt=""
          />
          <p>Prime会员</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/41IMzdharNL._AC_SR160,140_.png"
            alt=""
          />
          <p>海外购精选</p>
        </div>
        <div class="swiper-slide conttwo_cont">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/I/21uYYRduXcL._AC_SR160,140_.png"
            alt=""
          />
          <p>海外购上心</p>
        </div>
       
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  mounted() {
    var swiper = new Swiper("#conttwo_lun", {
      slidesPerView: 4,
      //  centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
      },
    });
    var swiper = new Swiper("#conttwo_lunt", {
      slidesPerView: 4,
      //  centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.conttwo{
  width: 3.75rem;
   margin: 0 auto;
}
.conttwo_title {
  width: 3.75rem;
  border-top: 0.05rem solid #cccccc;
  // border-bottom: 0.04rem solid #cccccc;
  overflow: hidden;
  .conttwo_cont {
    padding-top: 0.1rem;
    width: 1rem;
    height: 1.15rem;
    text-align: center;
    img {
      width: 0.8rem;
      height: 0.7rem;
    }
  }
}
</style>