<style lang="scss" scoped>

  .loading-wrap{
   width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    height:100px;
    .loading{
      position:absolute;
      width:50px;
      height:50px;
      display:inline-block;
    }
  }
</style>
<template>

      <div class="scroll-view"  ref="wrapper">
        <div class="scroll-view-content">
          <slot>
          </slot>
          <div class="loading-wrap" v-if="pullUpLoad">
            <div class="before-trigger" v-if="!isPullUpLoad">
              {{pullUpText}}
            </div>
            <div class="after-trigger" v-else>
              <img class="loading" :src="require('../../../assets/loading.gif')" alt="">
            </div>

          </div>
        </div>
      </div>

</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      name:'ScrollView',
      data(){
        return {
          isPullUpLoad:false//是否显示加载更多
        }
      },
      props: {
        click: {
          type: Boolean,
          default: true
        },
        data:{},
        refreshDelay:{
          type:Number,
          default:20
        },
        bounce: {
          type: Boolean,
          default: true
        },
        probeType: {
          type: Number,
          default: 2
        },
        listenScroll:{
          type:Boolean,
          default:false
        },
        pullUpLoad: {
          type: null,
          default: false
        }
      },
      mounted(){
        this._initScroll()

      },
      computed:{
        pullUpText(){
          const moreText='松开加载更多'
          const noMoreText='暂无更多数据'
          return this.hasMoreData?moreText:noMoreText
        }
      },
      methods:{
        _initScroll(){
          if(!this.$refs.wrapper) return false
         setTimeout(()=>{
           this.scroll=new BScroll(this.$refs.wrapper,{
             click: this.click,
             bounce: this.bounce,
             probeType: this.probeType,
             bounceTime:500,
             momentumLimitTime:300,
             scrollbar: {
               fade: true

             },
             pullUpLoad: this.pullUpLoad
           })
           // 是否派发滚动事件
           if (this.listenScroll) {
             let me = this
             this.scroll.on('scroll', (pos) => {
               me.$emit('scroll', pos)
             })
           }

           // 是否派发滚动到底部事件，用于上拉加载
           if (this.pullUpLoad) {
             this.scroll.on('pullingUp', () => {
               // 滚动到底部

                 this.$emit('pullingUp')

             })
           }
         },16.7)
        },
        refresh(){
          this.scroll&&this.scroll.refresh()
        },
        scrollToElement(...values){
          this.scroll && this.scroll.scrollToElement(...values);
        }
      },
      watch:{
        data(){
          setTimeout(()=>{
            this.scroll&&this.refresh()
          },this.refreshDelay)
        }
      }
    }
</script>


