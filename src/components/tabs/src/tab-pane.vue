<style lang="scss" >
  .my-tabs_pane{
    display:inline-block;
  }
  .my-tabs_pane_item{
    color:#666;
  }
  .my-tabs_pane-active{
    color:#5f5f5f;

  }
</style>
<template>
    <div class="my-tabs_pane" :class="{'my-tabs_pane-active':isActive}">
         <span class="my-tabs_pane_item"
               @click="change"
          >
       <slot></slot>
      </span>
    </div>
</template>

<script>
    export default {
      name:'tabPane',
      data(){
      },
      props:{
        label:{},
        currentTab:{}
      },
      computed:{
        isActive(){
          return this.label===this.currentTab
        },

      },
      methods:{
        change(){
          this.$parent.$emit('changeTab',this.label)
        }
      }
    }
</script>


