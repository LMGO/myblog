<template>
  <div id="app">
    <banner/>
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Banner from './components/banner'
import Navbar from './components/navbar'
// import GFooter from './components/footer'
// import Canvas from '@/assets/js/heart.js'

export default {
  name: 'app',
  components: {
    Banner,
    Navbar,
    // GFooter
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
