<template>
    <div class="navbar flex space-between align-center">

      <slot name="left"></slot>
      <slot name="middle"></slot>
      <slot name="right"></slot>



    </div>
</template>

<script>

    export default {
      name:'NavBar',
      created(){
        console.log('navBar created')
      },
      mounted(){
        console.log('navBar mounted')
      },
      beforeRouteEnter(to,from,next){
        console.log('navbar enter')
        next()
      }

    }
</script>

<style lang="scss" scoped>
  .navbar{
    position:fixed;
    width:100%;
    z-index:999;
    height:100%;
    background-color:#fdfdfe;
    .title{
     font-size:24px;/*px*/
      padding-left:30px;
   }
    .message{
      font-size:50px;/*px*/
      margin-right:76px;
    }
    .setup{
      font-size:50px;/*px*/
      margin-right:100px;
    }

  }
</style>
