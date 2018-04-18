<style lang="scss" scoped>
 .my-select-option{
   display:flex;
   align-items: center;
   justify-content: flex-start;
   width:100%;
   height:60px;
   background-color:#fff;
   padding-left:20px;
   border-bottom:1px solid #d2d9e0;/*px*/
   border-radius:3px;
   position:relative;
   .touch_add{

     &:after{
       position:absolute;
       content:'';
       width:100%;
       height:100%;
       display:inline-block;
       top:0;
       left:0;
     }
   }
   .my-select-option__inner{
     position:relative;
     display:flex;
     align-items: center;
     width:100%;
     height:100%;
     .my-select-option-input{
       position:absolute;
       width:0;
       height:0;
       top:0;
       left:0;
       z-index:-1;
     }
     .my-select-option-label{

       text-align:left;
     }
   }
   &:last-of-type{
     border-bottom:none;
   }
 }


</style>
<template>
    <li class="my-select-option" @click="itemClick($event)">
      <label class="my-select-option__inner touch_add">
        <input type="checkbox" :true-value="label" :false-value="label" v-model="model" class="my-select-option-input">
        <span class="my-select-option-label touch_add">{{label}}</span>
      </label>
    </li>
</template>

<script>
    export default {
      name:'MySelectOption',
      props:{
        label:''
      },
      methods:{
        itemClick(e){
          e.stopPropagation()
        }
      },
      computed:{
        model:{
          get(){
            return this.$parent.value
          },
          set(val){
            this.$parent.$emit('selected',val)
          }
        }
      }
    }
</script>


