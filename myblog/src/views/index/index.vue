<template>
  <div id="app">
    <div class="g-main">
      最新发布
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {
  },
    data(){
      return{
        ispc:false,
      }
  },
  mounted(){
    this.$forceUpdate()
    //暂无首页
    this.$router.push({name:'TechnologyShare'})
  },  
}
</script>
<style lang="scss">

</style>