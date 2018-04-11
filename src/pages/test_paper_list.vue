<style lang="scss" scoped>
.test_list{
  width:1500px;
  margin:0 auto;

  background-color:#fff;
  .title{
    font-size:50px;/*px*/
    text-align:center;
    height:155px;
    line-height:155px;
  }
  .table_wrap{

  }
  .t-head{
    .table-head{
      background-color:#f4f4f4;
      height:80px;
    }
    /deep/ .item_icon{
      display: inline-block;
      width:40px;
      height:40px;
    }
  }
  .t-body-wrap{
    height:501px;
    overflow-y:scroll;
  }
  .t-body{
    .tbody{
      tr{
        height:100px;
        border-bottom:1px solid #dddddd;/*no*/
      }
    }
  }
  .button_large{
    border-radius:100px;
  }
}
</style>
<template>
    <div class="test_list">
        <h2 class="title">
          基础脑健康评估
        </h2>
      <div class="table_wrap">
        <table class="t-head">
          <thead>
          <tr class="table-head">
            <th width="530">量表名称</th><th width="460">预估时间</th><th width="520"><img :src="require('../../static/img/jianjie.png')" alt=""></th>
          </tr>
          </thead>
        </table>
       <div class="t-body-wrap">
         <table class="t-body">
           <tbody class="tbody">
             <tr>
               <td width="530">图片记忆测试（简版）<img :src="require('../../static/img/jianjie.png')" alt=""></td>
               <td width="460">5分钟</td>
               <td width="520">
                 <my-checkbox v-model="list" trueLabel="0" ></my-checkbox>
               </td>
             </tr>
             <tr>
               <td>图片记忆测试（简版）</td><td>5分钟</td><td>

               <my-checkbox v-model="list" trueLabel="0" ></my-checkbox>



             </td>

             </tr>
             <tr>
               <td>图片记忆测试（简版）</td><td>5分钟</td><td>

               <my-checkbox v-model="list" trueLabel="0" ></my-checkbox>



             </td>

             </tr>
             <tr>
               <td>图片记忆测试（简版）</td><td>5分钟</td><td>

               <my-checkbox v-model="list" trueLabel="0" ></my-checkbox>



             </td>

             </tr>
             <tr>
               <td>图片记忆测试（简版）</td><td>5分钟</td><td>

               <my-checkbox v-model="list" trueLabel="0" ></my-checkbox>



             </td>

             </tr>
             <tr>
               <td>图片记忆测试（简版）</td><td>5分钟</td><td>

               <my-checkbox v-model="list" trueLabel="0" ></my-checkbox>



             </td>

             </tr>
             <tr>
               <td>图片记忆测试（简版）</td><td>5分钟</td><td>

               <my-checkbox v-model="list" trueLabel="0" ></my-checkbox>



             </td>

             </tr>

           </tbody>
         </table>
       </div>
      </div>
      <p>预计12分钟</p>
     <p class="flex justify-center "> <nav-button :to="{path:'/main/patient_list/2'}"><button   class="button button_large">下一步</button></nav-button></p>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          country:[],
          list:''
        }
      },
      created(){
        console.log(this.$route)
      },
      beforeRouteEnter(to,from,next){
        console.log('test_list进入')
        next()

      },
    }
</script>


