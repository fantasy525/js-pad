<style lang="scss" scoped>
  .checkbox__original{
   /* opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;*/
  }
  .checkbox_wrap{
    label{
      display:inline-block;
      margin-left:50px;
    }
    input{
      width:50px;
      height:100px;

      display:inline-block;

    }
    .checkbox_inner{
      display:inline-block;
      width:40px;
      height:40px;
      background:url("../../../../static/img/test_list_icon.png")center center no-repeat;
      background-size:100% 100%;
      vertical-align: middle;
    }
    .is-checked{
      .checkbox_inner{
        background:url("../../../../static/img/test_list_icon_sel.png")center center no-repeat;
        background-size:100% 100%;
      }
    }
  }
</style>

<template>
  <label class="checkbox_wrap">

    <label >Jack <input type="checkbox"  value="Jack" v-model="model"></label>

    <label >John <input type="checkbox"  value="John" v-model="model"></label>

    <label >Mike <input type="checkbox"  value="Mike" v-model="model"></label>
    <!--<span class="checkbox_input" :class="{'is-checked':isChecked}">-->
      <!--<span class="checkbox_inner" ></span>-->
      <!--<input type="checkbox"-->
             <!--v-if="trueLabel || falseLabel"-->
             <!--class="checkbox__original"-->
             <!--v-model="model"-->
             <!--:true-value="trueLabel"-->
             <!--:false-value="falseLabel"-->
              <!--&gt;-->
            <!--<input type="checkbox"-->
                   <!--v-else-->
                   <!--:value="label"-->
                   <!--v-model="model"-->
                   <!--ref="ipt"-->
                   <!--class="checkbox__original"-->
                   <!--&gt;-->
    <!--</span>-->
    <!--<span class="checkbox_label"><slot></slot></span>-->
  </label>
</template>

<script>
    export default {
      name:'checkbox',
      data(){
        return {
          selfModel:false,

        }
      },
      props:{
        value:{},
        label:{},
        trueLabel:[String,Number],
        falseLabel:[String,Number]
      },
      computed:{
        model:{
          get(){
            if(this.isGroup){
              return this.$parent.value
            }else{
              return this.value!==undefined?this.value:this.selfModel
            }
          },
          set(val){
          if(this.isGroup){
            console.log(val)
            this.$parent.$emit('groupSel',val)
          }else{
            this.$emit('input',val)
          }

            this.selfModel=val
          }
        },
        isChecked(){
          if({}.toString.call(this.model)==='[object Boolean]'){
            return this.model
          }
          if(Array.isArray(this.model)){
            return this.model.indexOf(this.trueLabel)>-1
          }else if(this.model!==null&&this.model!==undefined){
            return this.model===this.trueLabel
          }

        },
        isGroup(){
          let parent=this.$parent;
          while(parent){

            if(parent.$options.componentName!=='checkboxGroup'){
              parent=parent.$parent
            }else{
              this._checkboxGroup=parent
              return true
            }
          }
          return false
        }
      },

    }
</script>

