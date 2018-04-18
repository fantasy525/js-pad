
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
    <div class="my-table-head-wrap">
      <table class=" my-table-head" width="100%">
        <colgroup>
          <col :width="width">   <!--序号-->

          <!--<col width="150">&lt;!&ndash;姓名&ndash;&gt;-->
          <!--<col width="100">&lt;!&ndash;性别&ndash;&gt;-->
          <!--<col width="100">&lt;!&ndash;年龄&ndash;&gt;-->
          <!--<col width="350">&lt;!&ndash;评估名称&ndash;&gt;-->
          <!--<col width="100">&lt;!&ndash;得分&ndash;&gt;-->
          <!--<col width="300">&lt;!&ndash;评估来源&ndash;&gt;-->
          <!--<col width="200">&lt;!&ndash;评估时间&ndash;&gt;-->
          <!--<col width="150">&lt;!&ndash;评估人&ndash;&gt;-->
        </colgroup>
        <thead>
        <tr class="my-table-head">
          <th >{{label}}</th>
        </tr>
        </thead>
      </table>
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

