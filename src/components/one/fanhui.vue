<template>
  <div class="scrollTop">
    <i></i>
    <button v-show="flag_scroll" @click="backTop">返回顶部</button>
  </div>
</template>    
<script>
export default {
  name: "scrollTop",
  data() {
    return {
      flag_scroll: false,
      scroll: 0,
    };
  },

  methods: {
    //返回顶部事件
    backTop() {
      //  var obj= document.getElementsByClassName('scrollTop')[0].scrollTop
      var objwin = document.documentElement.scrollTop;
      var timer = setInterval(function () {
        document.documentElement.scrollTop -= 20;
        if (document.documentElement.scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 1);
      // console.log(obj);
      console.log(objwin);
    },
    //滑动超过500时显示按钮
    handleScroll() {
      let scrollobj =
        document.body.scrollTop + document.documentElement.scrollTop;
      console.log(scrollobj);
      if (scrollobj > 500) {
        this.flag_scroll = true;
      } else {
        this.flag_scroll = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  created() {},
};
</script>
 
<style scoped>
.scrollTop {
  width: 100%;
  display: block;
  height: 0.52rem;
  /* padding-top: 10px; */
  text-align: center;
  border-bottom: #cdcdcd;
  box-shadow: 0 0.01rem 0.01rem rgb(0 0 0 / 7%), 0 -0.01rem 0 #fff inset;
  background-color: #fff;
  background: #f9f9f9;
}
i {
  display: inline-block;
  border-style: solid;
  _border-style: dashed;
  border-width: 0.05rem;
  box-shadow: 0 0.01rem 0.01rem rgb(0 0 0 / 7%), 0 -0.01rem 0 #fff inset;
  border-color: transparent;
  border-top-width: 0;
  border-bottom: 0.05rem solid #cdcdcd;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
}
button {
  width: 100%;
  display: block;
  color: #111;
  font-size: 0.11rem;
  font-weight: 700;
  line-height: 0.3rem;
  background: none;
  border: none;
  text-transform: uppercase;
}
</style>