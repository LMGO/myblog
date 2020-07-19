<template>
  <div id="app">
    <!-- <navbar v-if="ispc"/> -->
    <div class="g-main">
      技术分享
    </div>
  </div>
</template>
<script>
// import Navbar from '../../components/navbar'
export default {
  name: 'technologyShare',
  components: {
    // Navbar,
  },
  data(){
    return{
      ispc:false,
    }
  },
  // mounted(){
  //   let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  //   if (htmlWidth<=414){
  //     // 移动端包含我的页面，首页和和pc端不一致，目前采用每个页面引入navbar，底层组件app.vue里隐藏
  //     this.ispc = true
  //   }
  // },
}
</script>
<style lang="scss">

</style>