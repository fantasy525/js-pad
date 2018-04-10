<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
      name:'checkboxGroup',
      componentName:'checkboxGroup',
      props:{
        value:{}
      },
      created(){
        this.$on('groupSel',val=>{
          this.$emit('input', val);
        })
      }
    }
</script>

<style lang="scss" scoped>

</style>
