<template>
  <div class="breadcrumb" >
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name:'breadcrumb',
      props:{
        separator:{},

      },
      provide(){
        return {
          breadcrumb:this
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
