<template>
  <a class="nav_button" ref="a"  @click="change"><slot></slot></a>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
      name:'NavButton',
      props:{
        to:{},
        isListen:{
          type:Boolean,
          default:true
        }
      },
      mounted(){
        this.$refs.a.setAttribute('name',this.to.path)
      },
      methods:{
        ...mapActions(['buttonNav']),
        change(){

          if(this.isListen){
            console.log('点击了按钮，要去',this.to)
            this.buttonNav({value:true})
          }
          this.$router.push(this.to)
        }
      }
    }
</script>

<style lang="scss" >
  .nav_button{
    display:inline-block;
  }
</style>
