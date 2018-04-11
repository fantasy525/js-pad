
<style lang="scss" scoped>
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
  .app-main {
    .nav-bar {
      height: 100px;
      color:#999;
      .currentNav{
        color:#1fa2fe;
      }
    }
  }
  .isMarginTop{
    padding-top:100px;
  }

</style>
<template>
  <section class="app-main">
    <NavBar class="nav-bar" v-show="showNavBar">
      <breadcrumb separator="&gt;" slot="left">
        <template v-for="(nav,index) in navigations">

          <breadcrumb-item v-if="index<navigations.length-1" :name="nav.path"  :to="nav.path" :key="index" >
            {{nav.name}}
          </breadcrumb-item>
          <breadcrumb-item v-else :name="nav.path"  :key="index"   :class="{currentNav:index===navigations.length-1}">
            {{nav.name}}
          </breadcrumb-item>
        </template>
      </breadcrumb>
    </NavBar>
   <div class="router-view" :class="{isMarginTop:showNavBar}">
     <transition name="fade" mode="out-in">
       <keep-alive>
         <router-view :key="key"></router-view>
       </keep-alive>
     </transition>
   </div>
  </section>
</template>

<script>
  import  NavBar from './navbar.vue'
  import { mapGetters } from 'vuex'
    export default {
      name:'AppMain',
      created(){
        console.log('app-main created',JSON.stringify(this.navigations))
      },
      mounted(){
        console.log('app-main挂载')
      },
      computed: {
        ...mapGetters(['navigations']),
        key() {
          return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
        },
        showNavBar(){
          console.log(!(['/home','/assess','/data'].indexOf(this.$route.path)>-1))
          return !(['/home','/assess','/data'].indexOf(this.$route.path)>-1)
        }
      },
      components:{
        NavBar
      },
      beforeRouteEnter(to,from,next){
        console.log('app-main enter')
        next()
      },
      beforeRouteLeace(to,from,next){
        console.log('app-main leave')
        next()
      }
    }
</script>

