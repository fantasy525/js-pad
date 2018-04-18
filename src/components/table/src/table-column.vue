
<style lang="scss" scoped>
  .my-table-head{
    width:100%;
    background-color:#eaedef;
    height:80px;
    font-size:26px;/*px*/
    color:#5d7f94;

  }
</style>
<template>
  <div functional>

  </div>
</template>

<script>
    export default {
      name:'MyTableColumn',
      props:{
        prop:{},//列的字段名字
        label:'',//列显示的名字
        width:'',//列的宽度

      }
    }
</script>

