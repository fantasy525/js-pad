<style lang='scss'>
.person{
  position:fixed;
  width:100%;
  height:100%;
  background-color:red;
}
</style>

<template>
<div>
  个人
</div>

</template>

<script>
export default{
  name:'Person',
  data(){
    return{
      ques:[
        {
          title:'',
          optins:[{

          }]
        },
        {
          title:'',

        }
      ]
    }
  },
  mounted(){
    //alert(document.documentElement.clientHeight)
  }
}
</script>
