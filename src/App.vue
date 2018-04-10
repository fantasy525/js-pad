<style lang="scss">


  html{
    width:100%;
    height:100%;
    body{
      width:100%;
      height:100%;
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size:24px;/*px*/
  width:100%;
  height:100%;

}
.fade-enter,.fade-leave-to{
  opacity:0;
  // transform:translate(100%)
}
.fade-leave-to{
  opacity:0;
  // transform:translate(-100%)
}
.fade-leave-active{
  transition:all .2s;
}
.fade-enter-active{
  transition:all .2s;
}
</style>
<template>
  <div id="app">
    <!-- <span class="mui-icon mui-icon-contact"></span>
    <img src="./assets/logo.png"> -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>


