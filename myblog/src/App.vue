<template>
  <div id="app">
    <banner v-if="showbanner"/>
    <navbar v-if="shownavbar"/>
    <div class="g-main">
      <router-view/>
    </div>
    <!-- <bottomnav v-if="showbottomnav"/> -->
  </div>
</template>
<script>
import Banner from './components/banner'
import Navbar from './components/navbar'
// import Bottomnav from './components/bottomNav'
// import Canvas from '@/assets/js/heart.js'
export default {
  name: 'app',
  components: {
    Banner,
    Navbar,
    // Bottomnav
  },
  data(){
    return {
      showbanner: true,
      shownavbar:true,
      // showbottomnav:false,//pc端不显示
      myProfile: {},
      screenWidth: document.documentElement.clientWidth || document.body.clientWidth
    }
  },
  mounted(){
    let self = this
    window.addEventListener('resize', function(){
      let Width = document.documentElement.clientWidth || document.body.clientWidth;
      self.screenWidth = Width
    })
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if(htmlWidth<1024){
          //移动端隐藏banner和nav,显示角底部nav
          self.showbanner = false;
          self.shownavbar = false;
          self.showbottomnav = true;
          self.$router.push({name:'MobileIndex'})
    }else{
          self.$router.push({name:'Index'})
    }
    
  },
   watch: {
      screenWidth (val) {
        console.log("宽度"+this.screenWidth)
        if(!this.timer) {
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function (){
            that.timer = false
          },500)
        }
        if(this.screenWidth<1024){
          //移动端隐藏banner和nav,显示角底部nav
          this.showbanner = false;
          this.shownavbar = false;
          // this.showbottomnav = true;
          this.$router.push({name:'MobileIndex'})
        }else{
          this.showbanner = true;
          this.shownavbar = true;
          // this.showbottomnav = false;
          this.$router.push({name:'Index'})
        }
      }
    }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// .g-main{
//   background-color: rgb(212, 223, 228);
// }
</style>
