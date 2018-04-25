<template>
    <div class="my-table-body-wrap">
      <scroll-view class="scroll"
                   ref="scroll"
                   :pullUpLoad="{threshold:-50}"
                   :pullDownRefresh="true"
                   :style="{height:height}"
                   @pullingUp="loadData"
                    @pullingDown="reloadData">
        <table width="100%" class="my-table-body">
          <colgroup>
            <col :width="colItem.width" v-for="(colItem,index) in columns">   <!--序号-->

          </colgroup>
          <tbody>
          <tr v-for="(item ,index ) in lists" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
            <td>{{item.assessName}}（简版）</td>
            <td>{{item.score}}</td>
            <td>{{item.assessSource}}</td>
            <td>{{item.assessTime}}.09.14</td>
            <td>{{item.assessMan}}</td>
          </tr>
          </tbody>
        </table>
      </scroll-view>
    </div>
</template>

<script>
  import Bus from './bus'
    export default {
      name:'MyTableBody',
      data(){
        return {
            lists:[]
        }
      },
      created(){
        let self=this
        Bus.$on('get-data',(data)=>{

          console.log('getData',data)
          self.lists=data
        })
      },
      props:{
        props:{
          type:Array,
          default(){
            return []
          }
        },
        columns:{
          type:Array,
          default(){
            return []
          }
        }
      },
      computed:{
        height(){
          return this.$parent.height?this.$parent.height+'px':'auto'
        }
      },
      methods:{
        loadData(){
         setTimeout(()=>{
           this.$refs.scroll.forceUpdate()
         },2000)
        },
        reloadData(){
          setTimeout(()=>{
            this.$refs.scroll.forceUpdate()
          },2000)
        }
      }
    }
</script>

<style lang="scss" >
  .my-table-body{

    tr{
      height:120px;
      font-size:26px;/*px*/
      color:#5f5f5f;
    }
    tr:nth-of-type(odd){
      background-color:#f9fbff;
    }
    tr:nth-of-type(even){
      background-color:#f4f7fe;
    }
  }
  .scroll{
    overflow: hidden;
    position:relative;
  }
</style>
