<template>
    <span class="icon iconfont" :class="[iconClass]"></span>
</template>

<script>
    export default {
      props:{
        iconName:''
      },
      computed:{
        iconClass(){
          return `icon-${this.iconName}`
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
