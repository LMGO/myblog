<template>
  <div id="navbar">
    <ul class="navbar-ul">
      <!-- <li v-if="navindex" class="navbar-li" :class="{'h-active': isActive === 1}" @click="toIndex">最新发布</li> -->
      <li class="navbar-li" :class="{'h-active': isActive === 2}" @click="toTechShare">技术分享</li>
      <li class="navbar-li" :class="{'h-active': isActive === 3}" @click="tolifeShare">日常点滴</li>
      <li class="navbar-li" :class="{'h-active': isActive === 4}" @click="toCasualTalk">心情随笔</li>
      <!-- <li class="navbar-li" :class="{'h-active': isActive === 6}" @click="toMessage">留言</li>  -->
      <!-- <li class="navbar-li" :class="{'h-active': isActive === 7}" @click="toAboutMe">关于我</li> -->
    </ul>
    <div v-if="navindex" class="login-register" v-show="!userInfo.username">
      <span @click="toLogin">登录</span>&nbsp;/
      <span @click="toRegister">注册</span>
    </div>
    <div class="welcome" v-if="userInfo.username">
      <span class="username">{{userInfo.nickname}}&nbsp;,</span>
      欢迎您~
    </div>
    <div class="mask" v-if="isMask">
      <div class="login" v-if="isLogin">
        <login 
        @unLogin="unLoginFromSon" 
        @toRegister="toRegisterFromSon"
        @loginInfo="getLoginInfo"/>
      </div>
      <div class="register" v-if="isRegister">
        <register 
        @unRegister="unRegisterFromSon" 
        @toLogin="toLoginFromSon"
        @registerInfo="getRegisterInfo"/>
      </div>
    </div>
  </div>
</template>

<script>
// import Login from '@/components/login'
// import Register from '@/components/register'

export default {
  name: 'navbar',
  data(){
    return {
      navindex:true,
      isActive: 2,//最新发布暂时未实现，技术分享为第一个页面
      isMask: false,
      isLogin: false,
      isRegister: false,
      userInfo: {}
    }
  },
  components: {
    // Login,
    // Register
  },
  // mounted(){
  //   let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  //   if (htmlWidth<=414){
  //     this.navindex = false
  //     this.isActive = 2//当前设置技术分享为active
  //   }
  // },
  methods: {
    toIndex(){
      this.$router.push({name:'Index'})
      this.isActive = 1
    },
    toTechShare(){
      this.$router.push({name:'TechnologyShare'})
      this.isActive = 2
    },
    tolifeShare(){
      this.$router.push({name:'LifeShare'})
      this.isActive = 3
    },
    toCasualTalk(){
      this.$router.push({name:'CasualTalk'})
      this.isActive = 4
    },
    toTimeAxis(){
      this.$router.push({name:'TimeAxis'})
      this.isActive = 5
    },
    toMessage(){
      this.$router.push({name:'Message'})
      this.isActive = 6
    },
    toAboutMe(){
      this.$router.push({name:'AboutMe'})
      this.isActive = 7
    },

    toLogin(){
      this.isMask = true
      this.isLogin = true
      this.isRegister = false
    },
    toRegister(){
      this.isMask = true
      this.isRegister = true
      this.isLogin = false
    },
    unLoginFromSon(data){
      this.isMask = data
    },
    unRegisterFromSon(data){
      this.isMask = data
    },
    toRegisterFromSon(data){
      this.isMask = data.isMask
      this.isLogin = data.isLogin
      this.isRegister = data.isRegister
    },
    toLoginFromSon(data){
      this.isMask = data.isMask
      this.isLogin = data.isLogin
      this.isRegister = data.isRegister
    },
    getLoginInfo(data){
      this.userInfo = data
    },
    getRegisterInfo(data){
      this.userInfo = data
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/navbar/index.scss";
</style>