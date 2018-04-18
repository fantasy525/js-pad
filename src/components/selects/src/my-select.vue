<style lang="scss">
  .my-select-icon{
    position:absolute;
    right:50px;
    top:50%;
    transform: translate(0,-50%) ;
    margin-left:30px;

  }
  .my-select-icon-open{
    transition:transform .5s;
    transform:translate(0,-50%) rotate(180deg);
  }
  .my-select-icon-close{
    transition:transform .5s;
    transform:translate(0,-50%) rotate(0deg);
  }
</style>
<style lang="scss" >
  .my-select-wrap{


    .my-select-outer{
      display:flex;
      position:relative;
      height:100%;
      align-items: center;

    }
    .my-select-label{
      padding-left:20px;
    }
    .my-select-dropdown{
      width:100%;
      position:absolute;
      display: none;
      top:90px;
      z-index:99;
      border:1px solid #e5e5e5;
    }
    .my-select-dropdown-open{
      display:block;
      animation:fadeshow .1s linear;
      animation-fill-mode:forwards;
    }
    .my-select-dropdown-close{
      display:block;
      animation:fadehide .1s linear;

    }
    @keyframes fadeshow {
      0%{
        opacity:0;
        top:60px;
      }
      100%{
        top:90px;
        opacity:1;
      }
    }
    @keyframes fadehide {
      0%{
        top:90px;
        opacity:1;
      }
      100%{
        top:60px;
        opacity:0;
      }
    }
    .icon{
      font-size:30px;
    }
  }
</style>
<template>
  <div class="my-select-wrap " @click="handleClick" >
   <div class="my-select-outer">
     <span class="my-select-label">{{value?value:placeholder}}</span>
     <icon-fontclass class="my-select-icon" :class="{'my-select-icon-open':open,'my-select-icon-close':!open}" iconName="jiantou1-copy" slot="icon"></icon-fontclass>
     <ul class="my-select-dropdown" ref="dropdown" :class="{'my-select-dropdown-open':open,'my-select-dropdown-close':close}">
       <slot></slot>
     </ul>
   </div>
  </div>
</template>

<script>
  export default {
    name:'MySelect',
    data(){
      return{
        open:false,
        close:false
      }
    },
    props:{
      placeholder:'',
      value:{}
    },
    created(){
      this.$on('selected',(val)=>{
        this.$emit('input',val)
        if(this.open){
          this.close=!this.close
        }
        this.open=!this.open
      })
    },
    methods:{
      handleClick(){
        if(this.open){
          this.close=!this.close
        }
        this.open=!this.open

      }
    },
    mounted(){
      let self=this
      this.$refs.dropdown.addEventListener('webkitAnimationEnd',()=>{
        console.log('ddd')
        self.close=false
      })
    }
  }
</script>


