<template>
    <div class="warp">
        <Header />
          <main>
              <router-view></router-view>
          </main>
           <Fanhui />
        <Footers />
        
    </div>
    
</template>
<script>

import Header from '@/components/one/headers.vue'
import Footers from '@/components/one/footers.vue' 
import Fanhui from "@/components/one/fanhui.vue"
export default {
    components:{
        Header,
        Fanhui,
        Footers,
    }
}
</script>

<style lang='scss' scoped>
.warp{
    // background: #eaeaea;
    width: 100%;
    // padding: 0 0 .42rem 0;
}

</style>
