<style lang="scss" scoped>

</style>
<template>
    <div class="my_tabs">

        <slot></slot>
    </div>
</template>

<script>
    export default {
      name:'myTabs',
      componentName:'myTabs',
      provide(){
        return {
          tabs:this
        }
      },
      props:{
        value:{},
        borderBottomColor:{
          type:String,
          default:'#1fa2fe'
        }
      },
      created(){
        this.$on('changeTab',(curTab)=>{

          this.$emit('input',curTab)
        })
      }
    }
</script>


