<style lang="scss" scoped>
  .sidebar{
    background-color:#fff;
    height:100%;
    flex:0 0;
    .avatar{
      padding-bottom:70px;
      .img-wrap{
        margin-top:85px;
      }
      .avatar-name{
        font-size:24px;/*px*/
        color:#5f5f5f;
        font-weight:bold;
        margin-top:28px;
      }
    }
    .js-menu{

      .js-menu__item{
        height:100px;
        line-height:100px;
        text-align:left;
        padding-left:50px;
        position:relative;
        .a-link{
          color:#5f5f5f;
          &:before{
            position:absolute;
            content:'';
           top:0;
            right:0;
            left:0;
            bottom:0;
            height:100%;
            display:inline-block;
          }
          .js-menu-icons{
            font-size:40px;/*px*/
          }
          .js-menu__item-text{
            font-size:36px;/*px*/
            margin-left:40px;
          }
        }
      }
      .js-menu__item-selected{
       .a-link{
         color:#fff;
       }
        background-color:#2491f5;
        .js-menu-icons{
          font-size:50px;/*px*/
        }
      }
    }
  }
</style>
<template>
    <div class="sidebar">
        <section class="avatar flex direction-column">
          <div class="img-wrap"><img :src="require('../../../static/img/avatar.png')" ></div>
          <p class="avatar-name">李主任</p>
        </section>
      <ul class="js-menu">
        <template v-for="(menu,menuIndex) in routes" v-if="(menu.menu )">

         <template v-for="(item,childIndex) in menu.children">
           <li  class="js-menu__item "
                :class="{'js-menu__item-selected':isActive(item.name)}"
           >
             <router-link :to="(menu.path+item.path)" class="a-link">
               <i class="js-menu-icons"><icon-fontClass :iconName="item.meta.icon" class="js-menu-icons"></icon-fontClass></i>
               <span class="js-menu__item-text">{{item.meta.title}}</span>
             </router-link>
           </li>
         </template>
        </template>

        <!--<li class="js-menu__item " :class="{'js-menu__item-selected':isActive('/assess')}">-->
          <!--<router-link to="/assess" class="a-link">-->
            <!--<i class="js-menu-icons"><icon-svg iconClass="shouye"></icon-svg></i>-->
            <!--<span class="js-menu__item-text">评估</span>-->
          <!--</router-link>-->
        <!--</li>-->
      </ul>
    </div>
</template>

<script>
  import {myRoutes} from'@/router'
    export default {
      name:'SideBar',
      data(){
        return{
          routes:myRoutes
        }
      },
      created(){

      },
      methods:{
        isActive(bindPath){

          return this.$route.name===bindPath
        }
      }
    }
</script>


