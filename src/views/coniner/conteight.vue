<template>
  <div class="conteight">
    <span  @click="backTop"></span>
    <p  class="go-top" @click="backTop" >返回顶部</p>
  </div>
</template>

<script>
export default {
  // vue的两个生命钩子，这里不多解释。
// window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
 
 
methods: {
  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
 
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
  scrollToTop () {
    const that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 60) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
}
};
</script>

<style lang="scss" scoped>
.conteight {
  width: 3.75rem;
  height: 0.5rem;
  margin: 0 auto;
  text-align: center;
  padding-top: .1rem;
  border-bottom: #cdcdcd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.07), 0 -1px 0 #fff inset;
  background-color: #fff;
    border-top: .1rem solid #cccccc;
  span {
    display: inline-block;
    border-style: solid;
    border-width: 5px;
    border-color: transparent;
    border-top-width: 0;
    border-bottom: 5px solid #cdcdcd;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
  p {
    font-size: 0.12rem;
    font-weight: 600;
  }
}
</style>