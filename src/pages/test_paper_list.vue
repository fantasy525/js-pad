<style lang="scss" scoped>
.test_list{
  width:1800px;
  margin:0 auto;
  background-color:#fff;
  .title{
    font-size:50px;/*px*/
    text-align:center;
    height:155px;
  }
  .table{
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
}
</style>
<template>
    <div class="test_list">
        <h2 class="title">
          基础脑健康评估
        </h2>
      <table class="table">
        <thead>
          <tr class="table-head">
            <th width="530">量表名称</th><th width="460">预估时间</th><th width="520"><img :src="require('../../static/img/jianjie.png')" alt=""></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>图片记忆测试（简版）</td><td>5分钟</td><td>
            <my-checkbox-group v-model="country">
            <my-checkbox  ></my-checkbox>
            <!--<my-checkbox  label="usa">美国</my-checkbox>-->
            </my-checkbox-group>
            <!--<my-checkbox  v-model="country" >中国</my-checkbox>-->
          </td>

          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          country:[]
        }
      },
      created(){
        console.log(this.$route.query)
      },
      beforeRouteEnter(to,from,next){
        console.log('test_list进入')
        next(vm=>{
          vm.$store.dispatch('addNavigation',{path:vm.$route.path,name:vm.$route.query.name})
        })
      },
    }
</script>


