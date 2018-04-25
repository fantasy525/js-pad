<style lang="scss" scoped>
  .variable_result{
    padding:40px 60px 0;
  }
  .table-head{
    font-size:30px;/*px*/
    background-color:#eaedef;
    .table-head__table{
      border-collapse: collapse;
      border:1px solid #cccccc;/*no*/
      table-layout: fixed;
      width:100%;
      .table-inner{
        width:100%;height:100%;
        table-layout: fixed;
        th{
          height:80px;
          border:1px solid #cccccc;/*no*/
        }
      }
    }
    th{
      height:158px;
      border:1px solid #cccccc;/*no*/
    }
  }
  .table-body{

    font-size:30px;/*px*/
    .table-side{
      background-color:#eaedef;
      border-right:1px solid #cccccc;/*no*/
    }
    .table-body__table{
      border:1px solid #cccccc;/*no*/
      table-layout: fixed;
      width:100%;
      tr{
        height:120px;

        &:nth-child(odd){
          background-color:#fdfdfe;
        }
        &:nth-child(even){
          background-color:#f7f8fa;
        }
      }

    }
  }
</style>
<template>
    <div class="variable_result">
      <div class="table-head">
        <table class="table-head__table">
          <colgroup>
            <col width="358">


          </colgroup>
          <thead>
           <tr>
             <th>变量</th>
             <th>总体</th>
             <th v-if="type===1">
               非MCI
             </th>
             <th  v-else colspan="3">
               <table class="table-inner">
                 <tr><th :colspan="childColums.length">各年龄组</th></tr>
                 <tr >
                   <th v-for="child in childColums">{{child}}</th>

                 </tr>
               </table>
              </th>
           </tr>
          </thead>
        </table>
      </div>
      <div class="table-body">
       <table class="table-body__table">
         <colgroup>
           <col width="358">
           <col v-if="type===2" width="306">
         </colgroup>
         <tbody>
          <tr v-for="item in dataList">
            <td class="table-side">{{item.name}}</td>
            <td v-for="itemData in item.data">{{itemData}}</td>
          </tr>
         </tbody>
       </table>
      </div>
    </div>
</template>

<script>
    export default {
      name:'variable_result',
      created(){
         if(this.type===2){
           const ageColums=['<60','60-64','65-69','70-74','>75']
           this.selType==='sex'?this.childColums=ageColums:this.childColums=['男','女']
         }
      },
      data(){

        const dataList2=[
          {
            name:'病例数',
            data:[150,200,500]
          },
          {
            name:'性别(男/女)',
            data:[10,20,500]
          }
        ]
        const dataList1=[
          {
            name:'病例数',
            data:[150,200]
          },
          {
            name:'性别(男/女)',
            data:[10,20]
          }
        ]
        function getData(type){
          console.log('type',type)
          if(type===1){
            return dataList1
          }else{
            return dataList2
          }
        }
        return{
          type:1,
          selType:'age',
          dataList:getData(1)
        }
      }
    }
</script>


