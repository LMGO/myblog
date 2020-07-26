<template>
 <div >
    <div class="main">
      <div class="headimg">
          <div class="head"><img src="http://img.qqzhi.com/uploads/2018-12-02/052721779.jpg" alt=""></div>
          <div class="user_name">沐雙惜</div>
          <div class="sign" v-if="true">登录 / 注册</div>
          <div class="welcome" v-else>您好，欢迎您！</div>
      </div>
      <div class="content">
        <div class="item" v-for="(item,index) in mylist" :key="index">
          <div class="icon_box"></div>
          <div class="title">{{item.title}}</div>
          <div class="icon_row"><img src="http://img.qqzhi.com/uploads/2018-12-02/052721779.jpg" alt=""></div>
        </div>
      </div>
    </div>
    <bottomnav :meactive="meactive" :indexactive="indexactive" />
  </div>
</template>
<script>
import Bottomnav from '../../components/bottomNav'
export default {
  name: 'me',
  components: {
    Bottomnav
  },
  props:{
    
  },
    data(){
      return{
        meactive:true,
        indexactive:false,
        mylist:[{
          icon:'',
          title:'我的点赞',
        },{
          icon:'',
          title:'我的收藏',
        },{
          icon:'',
          title:'设置',
        }],
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

<style lang="scss" scoped>
  @import "../../assets/scss/me/index.scss"; 
</style>