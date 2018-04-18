<style lang="scss" scoped>
  .hidden-columns{
    visibility: hidden;
    position:absolute;
    z-index:-1;
  }
</style>
<template>
    <div class="my-table" :style="{height:height}">
      <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
      <my-table-head :columns="columns">

      </my-table-head>
      <my-table-body :columns="columns">

      </my-table-body>
    </div>
</template>

<script>
  import MyTableBody from './table-body'
  import MyTableHead from './table-head.vue'
    export default {
      name:'myTable',
      data(){
        return {
          lists:[],
          columns:[]
        }
      },
      props:{
        data:{},
        height:{}
      },
      created(){


      },
      mounted(){
        this.$slots.default.forEach((item,index)=>{
          if(item.tag){
            this.columns.push({width:item.componentInstance.width,label:item.componentInstance.label})
          }
        })
      },
      components:{
        'my-table-body':MyTableBody,
        MyTableHead
      }
    }
</script>


