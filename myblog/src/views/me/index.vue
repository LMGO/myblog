<template>
 <div id="app">
    <div class="g-main">
      <router-view/>
    </div>
    <bottomnav/>
  </div>
</template>
<script>
import Bottomnav from '../../components/bottomNav'
export default {
  name: 'me',
  components: {
    Bottomnav
  },
    data(){
      return{

      }
  },
  mounted(){
    // let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // if (htmlWidth<=414){
    //   // 根据判断设备宽度，调整显示移动端的首页为技术分享
    //   this.$router.push({name:'TechnologyShare'})
    // }
  },  
}
</script>
<style lang="scss">

</style>