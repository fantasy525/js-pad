<style lang="scss" scoped>
  .home_view{
    padding:20px 20px 10px 20px;
    flex-wrap:wrap;
    .view_item{
      background-color:#fff;
      border-radius:8px;
      box-shadow: 14px 13px 64px -10px #dadee8;
      margin-bottom:16px;
      position:relative;
      &:active{
        background-color:#eeeeee;
      }
      .button-more{
        font-size:50px;/*px*/
        position:absolute;
        bottom:30px;
        right:30px;
        color:#2491f5;
      }
      .home_item_title{
        font-size:50px;/*px*/
        color:#5f5f5f;
      }
      .item_text{

        p:nth-of-type(1){
          @extend .home_item_title;
        }
        p:nth-of-type(2){
          font-size:24px;/*px*/
          color:#9a9a9a;
          margin-top:40px;
        }
      }
    }
    .view_item1{
      width:820px;
      height:330px;
      .item_text{
        margin-left:74px;
      }
    }
    .view_item2{
      width:700px;
      height:330px;
      padding-top:53px;
      .home_item_title{
        font-size:40px!important;/*px*/
      }
      .list{
        text-align:left;
        margin-top:36px;
        li{
          margin-left:70px;
          font-size:30px;/*px*/
          a{
            &:active{
              color:rgba(81,81,81,0.8);
            }
          }
        }
      }
      .li-icons{
        font-size:60px;/*px*/
        vertical-align: middle;
        margin-right:43px;
      }
    }
    .view_middle{
      width:500px;
      height:380px;
      padding-top:77px;
      .item_text{
        margin-top:54px;
      }
    }

    .view_item6{
      width:98%;
      height:240px;
      margin-bottom:0;
      padding-top:40px;
      .view_icons{
        font-size:30px;/*px*/
        color:#4ca3f2;
        margin-right:22px;
      }
      .item_text{
        margin-bottom:77px;
      }
    }

  }
</style>
<template>
    <div class="home_view flex space-around">
      <nav-button
        :to="{path:'/main/assess_list/nao_jian_kang',query:{name:'脑健康评估'}}"
        >
        <div class="view_item view_item1 flex justify-center align-center">
          <img :src="require('../../static/img/nao.png')">
          <div class="item_text">
              <p >脑健康评估</p>
              <p>Brain health assessment</p>
        </div>
          <icon-fontclass iconName="gengduo-2" class="button-more"></icon-fontclass>
        </div>
      </nav-button>
     <nav-button to="/">
       <div class="view_item view_item2">
         <div class="item_text">
           <p class="home_item_title">认知测评常用工具</p>
           <ul class="list">
             <li><router-link to="/"><icon-svg iconName="shuxie" class="li-icons"></icon-svg>记忆门诊3分钟筛查</router-link></li>
             <li><router-link to="/assess"><icon-svg iconName="shuxie" class="li-icons"></icon-svg>简易精神状态量表</router-link></li>
             <li><router-link to="/assess"><icon-svg iconName="shuxie" class="li-icons"></icon-svg>认知障碍测评（北师大版）</router-link></li>
           </ul>
         </div>
         <icon-fontclass iconName="gengduo-2" class="button-more"></icon-fontclass>
       </div>
     </nav-button>
      <nav-button :to="{path:'/main/assess_list/ren_zhi',query:{name:'认知障碍筛查'}}">
        <div class="view_item view_middle">
          <img class="view_item_img" :src="require('../../static/img/home1.png')" >
          <div class="item_text">
            <p >认知障碍筛查</p>
            <p>Cognitive impairment
              screening</p>
          </div>
        </div>
      </nav-button >
      <nav-button :to="{path:'/main/assess_list/chi_dai',query:{name:'痴呆筛查'}}">
        <div class="view_item view_middle">
          <img :src="require('../../static/img/home2.png')" >
          <div class="item_text">
            <p >痴呆筛查</p>
            <p>Dementia screening</p>
          </div>
        </div>
      </nav-button>


      <div class="view_item view_middle">
        <img :src="require('../../static/img/home3.png')" >
        <div class="item_text">
          <p >神经精神疾病筛查</p>
          <p>Neuropsychiatric screening</p>
        </div>
      </div>
     <router-link style="display:inline-block;width:100%;" :to="{path:'/assess_list/train',query:{name:'认知训练'}}">
       <div class="view_item view_item6">
         <div class="item_text">
           <p >认知训练方案</p>

         </div>
         <div class="flex space-around">
           <span class=""><icon-fontclass iconName="shu-" class="view_icons"></icon-fontclass>认知康复训练</span>
           <span class=""><icon-fontclass iconName="shu-" class="view_icons"></icon-fontclass>脑智提升训练</span>
         </div>
         <icon-fontclass iconName="gengduo-2" class="button-more"></icon-fontclass>
       </div>
     </router-link>
    </div>
</template>

<script>
    import NavButton from "../components/router-link/src/index.vue";
    import {mapGetters} from 'vuex'
    export default {
      components: {NavButton},
      name:'Home',
      created(){

      },
      mounted(){

      },
      computed:{
        ...mapGetters(['isButtonNavigation'])
      },
      methods:{

        go(){
          mui.openWindow({
            url:'./game.html',
            show:{
              aniShow:'fade-in'
            },
            extras:{
              url:'http://139.196.40.88:8080/upload/gameUrl/23j5lec992hv4qaokukhrqiutc/TeZhengSouSuoCeYan/index.html'
            }
          })

        }
      },
      beforeRouteEnter(to,from,next){
        next()
//        console.log('home enter')
//        next(vm=>{
//          vm.$store.dispatch('addNavigation',{path:to.path,name:to.meta.title})
//        })
      },
      beforeRouteLeave(to,from,next){

        console.log('home leave',this.$store.getters.isButtonNavigation)

        next()
      }
    }
</script>


