<style lang="scss" >
  .my-tabs_nav{
    width:200px;
    border-bottom:4px solid transparent;/*no*/
    color:#666;
  }
  .my-tabs_nav-active{
    color:#1fa2fe;
  }
</style>
<template>
  <div class="my-tabs_nav flex align-center justify-center"
       :style="styObj"
       @click="change"
       :class="{'my-tabs_nav-active':isActive}">
         <span class="my-tabs_nav_item"

         >
       <slot></slot>
      </span>
  </div>
</template>

<script>
  export default {
    name:'TabNav',
    props:{
      label:{},
      borderBottomColor:'blue'
    },
    computed:{
      currentTab(){
        return this.$parent.value
      },
      isActive(){
        return this.label===this.currentTab
      },
      styObj(){
        let color
        if(this.isActive){
          color=this.$parent.borderBottomColor
        }else{
          color='transparent'
        }
        return {'border-bottom-color':color}
      }

    },
    methods:{
      change(){
        console.log(this.label)
        this.$parent.$emit('changeTab',this.label)
      }
    }
  }
</script>


