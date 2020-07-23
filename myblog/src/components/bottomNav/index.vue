<template>
    <div>
        <ul class="bottomnav">
            <li class="nav-li" @click="Toindex()">
                <div class="nav-content">
                  <img src="@/assets/icons/index-active.png" alt="" v-if="indexactive">
                  <img src="@/assets/icons/index.png" alt="" v-else>
                </div>
                <div :class="{'text':true,'textactive':indexactive}">首页</div>
            </li>
            <li class="nav-li" @click="Tome()">
              <div class="nav-content">
                <img src="@/assets/icons/me-active.png" alt="" v-if="meactive">
                <img src="@/assets/icons/me.png" alt="" v-else>
              </div>
              <div :class="{'text':true,'textactive':meactive}">我的</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'bottomNav',
  props:["indexactive","meactive"],
  // {
  //   indexactive:{
  //     type:Boolean,
  //     default:true
  //   },
  //   meactive:{
  //     type:Boolean,
  //     default:false
  //   },
  // },
    
  data(){
    return{
      // iactive:this.indexactive,
      // mactive:this.meactive,
    }
  },
  computed: {
      navactive: {
        get() {
          return this.indexactive,this.meactive;
        },
        set(val1,val2) {
          //grants_改变由父组件控制
          this.$emit("change-active", val1,val2);
        }
      }
  },
  methods:{
    Toindex(){
      // this.indexactive = true;
      // this.meactive = false;
      this.$router.push({name:'MobileIndex'})
    },
    Tome(){
      // this.indexactive = false;
      // this.meactive = true;
      this.$router.push({name:'Me'})
    }
  }

}
</script>
<style lang="scss">
  @import "../../assets/scss/bottomNav/index.scss";
</style>