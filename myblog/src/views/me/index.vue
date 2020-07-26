<template>
 <div >
    <div class="main">
      <div class="headimg">
          <div class="head"><img src="http://img.qqzhi.com/uploads/2018-12-02/052721779.jpg" alt=""></div>
          <div class="user_name">沐雙惜</div>
          <div class="sign" v-if="true" @click="toLogin">登录 / 注册</div>
          <div class="welcome" v-else>您好，欢迎您！</div>
      </div>
      <div class="content">
        <div class="item" v-for="(item,index) in mylist" :key="index">
          <div class="icon_box"><img :src="item.icon" alt=""></div>
          <div class="title">{{item.title}}</div>
          <div class="icon_row"><img src="../../assets/icons/right_arrow.png" alt=""></div>
        </div>
      </div>
      <div class="unlogin">退出登录</div>
    </div>
    <bottomnav :meactive="meactive" :indexactive="indexactive" />
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
import Bottomnav from '../../components/bottomNav'
import Login from '@/components/login'
import Register from '@/components/register'

export default {
  name: 'me',
  components: {
    Bottomnav,
    Login,
    Register
  },
  props:{
    
  },
    data(){
      return{
        meactive:true,
        indexactive:false,
        mylist:[{
          icon:require('../../assets/icons/likes.png'),
          title:'我的点赞',
        },{
          icon:require('../../assets/icons/mycollections.png'),
          title:'我的收藏',
        },{
          icon:require('../../assets/icons/set.png'),
          title:'设置',
        }],
        isMask: false,
        isLogin: false,
        isRegister: false,
        userInfo: {}
      }
  },
  mounted(){
    // let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // if (htmlWidth<=414){
    //   // 根据判断设备宽度，调整显示移动端的首页为技术分享
    //   this.$router.push({name:'TechnologyShare'})
    // }
  }, 
  methods:{
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
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/me/index.scss"; 
</style>