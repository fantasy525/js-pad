<style lang="scss" scoped>
  .my-table-head{
    background-color:#eaedef;
  }
</style>
<template>

      <div class="my-table-head-wrap">
        <table class=" my-table-head" width="100%">
          <colgroup>
            <col :width="col.width" v-for="(col ,index) in columns">   <!--序号-->

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
            <tr class="my-table-head" :height="headHeight">
              <th v-for="(colTh,index2) in columns">{{colTh.label}}</th>
            </tr>
          </thead>
        </table>
      </div>
</template>

<script>
    export default {
      props:{
        columns:{
          type:Array,
          default(){
            return []
          }
        },
        headHeight:{
          default:'100'
        }

      }
    }
</script>


