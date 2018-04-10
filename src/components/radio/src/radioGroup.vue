<template>
    <div>
      <slot></slot>
    </div>
</template>

<script>
    export default {
      name:'radioGroup',
      componentName: 'radioGroup',
      created(){
        this.$on('groupSel',(val)=>{
          this.$emit('input', val);
          this.$emit('change',val)
        })
      },
      props:{
        value:{}
      }
    }
</script>

<style lang="scss" scoped>

</style>
