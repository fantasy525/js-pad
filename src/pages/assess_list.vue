<style lang="scss" scoped>
  .assess_list{

    overflow-x: scroll;
    padding-top:72px;
    .list_item{
      display:inline-block;
      height:890px;
      flex:0 0 500px;
      background-color:#fff;
      color:#5f5f5f;
      margin-left:105px;
      .icon_wrap{
        height:360px;
      }
      .list_item_large{
        color:#5f5f5f;
        font-size:48px;/*px*/
      }
      .list_item_small{
        font-size:30px;/*px*/
        margin-top:47px;
      }
      section{
        margin-top:58px;
        line-height:36px;
        font-size:24px;/*px*/
        text-align:left;
        padding:0 54px;
        color:#5f5f5f;
      }
    }
    .router_link_keydown{
      &:active{
        color:rgba(81,81,81,0.8);
      }
      &:active{
        background-color:#eeeeee;
      }
    }
  }
  .game_trains{
    padding:80px 96px 0 ;
    .train{
      padding:78px 88px;
      background-color:#fff;
      width:100%;
      .train_title{
        font-size:48px;/*px*/
        text-align:center;
      }
      .train_lists{
        margin-top:82px;
        .link{
          display:inline-block;
          font-size:30px;/*px*/
          .button-more{
            color:#4ca3f2;
            font-size:50px;/*px*/
            vertical-align: middle;
            margin-right:31px;

          }
        }
      }
    }
    .train:nth-of-type(2){
      .train_lists{
        margin-top:0;
      }
      .link{
        flex:0 0 350px;
        text-align:left;
        margin-top:70px;
      }
    }
  }
</style>
<template>
    <div>
      <template v-if="isAssess">
        <div class="assess_list flex" ref="list">
          <nav-button
            class="list_item router_link_keydown"
            :to="{path:'/main/test_list/'+index,query:{name:item.title}}"
            v-for="(item,index) in lists"
            :key="index"

          >
            <div>
              <div class="icon_wrap flex align-center justify-center">
                <img :src="item.imgUrl" alt="">
              </div>
              <p class="list_item_large">
                {{item.title}}
              </p>
              <p class="list_item_small">预计{{item.time}}分钟</p>
              <section>
                {{item.detail}}
              </section>
            </div>
          </nav-button>
        </div>
      </template>
      <div v-else class="game_trains">
        <div class="train">
          <h2 class="train_title">
            认知康复训练
          </h2>
          <ul class="train_lists flex space-between">
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>认知康复训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>认知康复训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>认知康复训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>认知康复训练</li></router-link>
          </ul>
        </div>
        <div class="train">
          <h2 class="train_title">
            脑智提升训练
          </h2>
          <ul class="train_lists flex space-between flex-wrap">
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>记忆力训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>注意力训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>执行功能训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>感知觉训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>视空间训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>逻辑推理训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>语言训练</li></router-link>
            <router-link to="/" class="link"><li> <icon-fontClass iconName="shu-" class="button-more"></icon-fontClass>决策训练</li></router-link>
          </ul>
        </div>
      </div>

    </div>

</template>

<script>
    export default {
      data(){
        return {
          lists:[],
          type:''
        }
      },
      computed:{
        isAssess(){
          return this.type!=='train'
        }
      },
      created(){
       const data=require('../mock/assessL_list.json')
        this.lists=data[this.$route.params.menu]
        this.type=this.$route.params.menu

        console.log('assess_list created')
      },
      mounted(){


        console.log('assess_list mounted')
      },
      beforeRouteEnter(to,from,next){
        console.log('assess_list进入')
        next()
      },
      beforeRouteLeave(to,from,next){
        console.log('assess leave to=',to.name)


        next()
      }
    }
</script>


