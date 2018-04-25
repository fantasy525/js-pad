<style lang="scss" scoped>
  .scroll-view{
    position:relative;
  }
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
  .pullup-wrapper{
    .after-trigger{
      flex:1 1;
      height:100%;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
  .pulldown-wrapper{
    position:absolute;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    transition:all;
    .after-trigger{
      flex:1 1;
      height:100%;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
<template>

      <div class="scroll-view"  ref="wrapper">

        <div class="scroll-view-content">
          <slot>
          </slot>
          <div class="loading-wrap pullup-wrapper" v-if="pullUpLoad">
            <div class="before-trigger" v-if="!isPullUpLoad">
              {{pullUpText}}
            </div>
            <div class="after-trigger" v-else>
              <img class="loading" :src="require('../../../assets/loading.gif')" alt="">
            </div>

          </div>

        </div>
        <div class="loading-wrap pulldown-wrapper"
             :style="pullDownStyle"
             v-if="pullDownRefresh">
          <div class="before-trigger" v-if="!isPullingDown">
            {{pullDownText}}
          </div>
          <div class="after-trigger" v-else>
            <img class="loading" :src="require('../../../assets/loading.gif')" alt="">
          </div>

        </div>
      </div>

</template>

<script>
  import BScroll from 'better-scroll/src'
    export default {
      name:'ScrollView',
      data(){
        return {
          beforePullDown: true,
          isRebounding: false,
          isPullingDown: false,
          isPullUpLoad: false,
          pullUpDirty: true,//用于判断是否能继续加载更多
          pullDownDirty: true,//用于判断是否能继续加载更多
          pullDownStyle: '',
          bubbleY: 0
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
        },
        pullDownRefresh: {
          type: null,
          default: false
        },
      },
      created(){
        this.pullDownInitTop = -100//下拉加载的图标的位置位移
      },
      mounted(){
        this._initScroll()

      },
      computed:{
        pullUpText(){
          const moreText='上拉加载更多'
          const noMoreText='暂无更多数据'
          return this.pullUpDirty?moreText:noMoreText
        },
        pullDownText(){
          const moreText='松开刷新'
          const refreshSuccess='加载成功'
          return this.pullDownDirty?moreText:refreshSuccess
        }
      },
      methods:{
        _initScroll(){
          console.log('*********初始化scroll')
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
             pullUpLoad: this.pullUpLoad?this.pullUpLoad.threshold?this.pullUpLoad:{threshold:-50}:this.pullUpLoad,
             pullDownRefresh:this.pullDownRefresh
           })
           // 是否派发滚动事件
           if (this.listenScroll) {
             let me = this
             this.scroll.on('scroll', (pos) => {
               me.$emit('scroll', pos)
             })
           }
           //上拉加载更多
           if (this.pullUpLoad) {

             this._initPullUpLoad()
           }
           //下拉刷新
           if(this.pullDownRefresh){
             this._initPullDownRefresh()
           }


         },16.7)
        },
        _initPullUpLoad(){
            // 是否派发滚动到底部事件，用于上拉加载
              this.scroll.on('pullingUp', () => {
                // 滚动到底部
                console.log('pullingUp')
                this.isPullUpLoad=true //显示加载更多
                this.$emit('pullingUp')

              })


        },
        _initPullDownRefresh(){
          this.scroll.on('pullingDown',()=>{
            this.isPullingDown = true
            this.$emit('pullingDown')
          })
          this.scroll.on('scroll',(pos)=>{
            if(!this.pullDownRefresh){
              return false
            }
            if(this.beforePullDown){
              //滑动时要把下拉刷新的图片往下偏移

              this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
            }
          })
        },
        forceUpdate(dirty){
          if(this.pullUpLoad && this.isPullUpLoad){
            this.isPullUpLoad=false
            this.pullUpDirty = dirty
            this.scroll.finishPullUp()
            this.refresh()
          }
          if(this.pullDownRefresh&& this.isPullingDown){
            this.isPullingDown=false
            this.pullDownDirty=dirty
           setTimeout(()=>{//暂停1秒让用户看到显示加载成功
             this.pullDownDirty=true
             this.scroll.finishPullDown()
             this.pullDownStyle = `top:${this.pullDownInitTop}px`
           },1000)
          }
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


