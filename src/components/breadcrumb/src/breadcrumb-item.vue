<style lang="scss" scoped>
  .breadcrumb-item{
    .breadcrumb_inner{
      margin-left:30px;
    }
    .breadcrumb-separator{
      margin-left:30px;

    }
    &:last-child{

      .breadcrumb-separator{
        display:none;

      }
    }
  }
</style>

<template>
   <span class="breadcrumb-item">
     <span class="breadcrumb_inner" ref="link">
       <slot></slot>
     </span>
     <span class="breadcrumb-separator">{{separator}}</span>
   </span>
</template>

<script>
    export default {
      name:'breadcrumbItem',
      props:{
        to:{}
      },
      data(){
        return {
          separator:''
        }
      },
      inject:['breadcrumb'],
      mounted(){
        this.separator=this.breadcrumb.separator
        let self=this
       setTimeout(()=>{//此处必须异步，因为store中navigations的更新是在导航enter时异步处理的
         let link=this.$refs.link
         link.addEventListener('click',_ => {
           let to=this.to
           if(self.to){
             this.$store.dispatch('buttonNav',{value:true})
             self.$router.push(to);
           }

         },false)

       },16.7)
      }
    }
</script>

