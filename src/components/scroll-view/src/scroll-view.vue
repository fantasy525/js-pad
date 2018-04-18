<style lang="scss" scoped>

</style>
<template>

      <div class="scroll-view"  ref="wrapper">
        <slot></slot>
      </div>

</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      name:'ScrollView',
      props: {
        click: {
          type: Boolean,
          default: true
        },
        bounce: {
          type: Boolean,
          default: false
        },
        probeType: {
          type: Number,
          default: 3
        }
      },
      mounted(){
        this._initScroll()

      },
      methods:{
        _initScroll(){
          if(!this.$refs.wrapper) return false
         setTimeout(()=>{
           this.scroll=new BScroll(this.$refs.wrapper,{
             click: this.click,
             bounce: this.bounce,
             probeType: this.probeType,
             scrollbar: {
               fade: false

             }
           })
         },16.7)
        },
        refresh(){
          this.scroll&&this.scroll.refresh()
        },
        scrollToElement(...values){
          this.scroll && this.scroll.scrollToElement(...values);
        }
      }
    }
</script>


