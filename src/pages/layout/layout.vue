<style lang="scss" scoped>
  $navBarHeight:100px;
.app-wrap{
  height:100%;
  .nav-bar{
    height:$navBarHeight;
  }
  .main-content{
    height:100%;
    padding-top:$navBarHeight+2;
    .sidebar-wrap{
      flex:0 0 300px;
      height:100%;

    }
  }

}
</style>

<template>
    <div class="app-wrap">
      <NavBar class="nav-bar">
        <span class="title" slot="left">京师脑博士认知测评系统</span>
        <div class="navbar__tools" slot="right">
          <icon-fontClass  iconName="youjian" class="message"></icon-fontClass>
          <icon-fontClass iconName="set" class="setup"></icon-fontClass>
        </div>
      </NavBar>
      <div class="main-content flex">
        <div class="sidebar-wrap">
          <SideBar></SideBar>
        </div>
        <div class="main-container">
          <AppMain></AppMain>
        </div>
      </div>
    </div>
</template>

<script>
  import { NavBar,SideBar ,AppMain} from '@/pages/layout'
    export default {
      name:'Layout',
      components:{
        NavBar,
        SideBar,
        AppMain
      }
    }
</script>

