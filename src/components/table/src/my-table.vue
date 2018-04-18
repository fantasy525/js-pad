<template>
    <div class="my-table" :style="{height:height}">
      <slot></slot>
      <my-table-body>

      </my-table-body>
    </div>
</template>

<script>
  import MyTableBody from './table-body'
    export default {
      name:'myTable',
      props:{
        data:{},
        height:{}
      },
      mounted(){
        console.log(this.$scopedSlots)
      },
      components:{
        'my-table-body':MyTableBody
      }
    }
</script>

<style lang="scss" scoped>

</style>
