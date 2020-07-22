<template>
<!-- ---------------此页面为移动端首页----------------- -->
 <div id="app">
    <banner/>
    <div id="navbar">
      <ul class="navbar-ul">
        <!-- <li class="navbar-li" :class="{'h-active': isActive === 1}" @click="toNew">最新发布</li> -->
        <li class="navbar-li" :class="{'h-active': isActive === 2}" @click="toTechShare">技术分享</li>
        <li class="navbar-li" :class="{'h-active': isActive === 3}" @click="tolifeShare">日常点滴</li>
        <li class="navbar-li" :class="{'h-active': isActive === 4}" @click="toCasualTalk">心情随笔</li>
      </ul>
    </div>
    <div class="g-main">
      {{content}}
    </div>
    <bottomnav :indexactive="indexactive" :meactive="meactive" v-if="showbottomNav"/>
  </div>
</template>
<script>
import Banner from '../../components/banner'
import Bottomnav from '../../components/bottomNav'
export default {
  name: 'mobileIndex',
  components: {
    Banner,
    Bottomnav
  },
    data(){
      return{
        indexactive:true,
        meactive:false,
        isActive: 2,
        content:"技术分享文章",
        showbottomNav:true,
        screenWidth: document.documentElement.clientWidth || document.body.clientWidth
      }
  },
  methods:{
    toNew(){
    this.isActive = 1
    },
    toTechShare(){
      this.isActive = 2
      this.content = "技术分享文章"
    },
    tolifeShare(){
      this.isActive = 3
      this.content = "生活点滴文章"
    },
    toCasualTalk(){
      this.isActive = 4
      this.content = "心情随笔文章"
    },
  },
  mounted(){
    let self = this
    self.isActive = 2//最新发布暂时不实现
    window.addEventListener('resize', function(){
      let Width = document.documentElement.clientWidth || document.body.clientWidth;
      self.screenWidth = Width
      if (htmlWidth>768){
      // 调整为pc端首页
      console.log("hhahah")
      self.$router.push({name:'Index'})
    }
    })
    
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (htmlWidth>768){
      // 调整为pc端首页
      self.$router.push({name:'Index'})
    }
  },  
  //  watch: {
  //     screenWidth (val) {
  //       console.log(this.screenWidth)
  //       if(!this.timer) {
  //         this.screenWidth = val
  //         this.timer = true
  //         let that = this
  //         setTimeout(function (){
  //           that.timer = false
  //         },500)
  //       }
  //       if(this.screenWidth>750){
  //         this.$router.push({name:'Index'})
  //       }
  //     }
  //   }
}
</script>
<style lang="scss">
  @import "../../assets/scss/navbar/index.scss";
</style>