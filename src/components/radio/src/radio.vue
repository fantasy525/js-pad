<style lang="scss" scoped>
  .radio{
    position:relative;
    display:inline-block;
    outline:none;
    .radio-label{
      vertical-align: middle;
    }
  }
  .radio__origial{
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }
  .radio__inner{
    display:inline-block;
    width:70px;
    height:70px;
    background:url("../../../../static/img/test_list_icon.png")center center no-repeat;
    background-size:100% 100%;
    vertical-align: middle;
  }
  .radioSel{
   .radio__inner{
     background:url("../../../../static/img/test_list_icon_sel.png")center center no-repeat;
     background-size:100% 100%;
   }
  }
</style>

<template>
    <label class="radio">
        <span class="radio-input" :class="{radioSel:model===label}">
          <span class="radio__inner" :class="iconClass" ></span>
          <input type="radio" class="radio__origial"
            v-model="model"
            :value="label"

            @change="handleChange">
        </span>
        <span class="radio-label">
          <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
      name:'radio',
      componentName:'radio',
      data(){
        return {
          isSel:false
        }
      },
      props:{
        value:{},
        label:{},
        iconClass:{}
      },
      computed:{
        isGroup(){
          let parent=this.$parent;
          while(parent){
            if(parent.$options.componentName!=='radioGroup'){
              parent=parent.$parent
            }else{
              this._radioGroup=parent
              return true
            }
          }
          return false
        },
        model:{
          set(val){
            if(this.isGroup){
              this.$parent.$emit('groupSel',val)//因为父组件不能用$on监听到子组件$emit的事件，所以只能获取到父组件自己$emit自己。
            }else{
              this.$emit('input', val)
            }
          },
          get(){
            return  this.isGroup?this._radioGroup.value:this.value
          }
        }
      },
      methods:{
        handleChange() {
          this.$nextTick(() => {
            this.$emit('change', this.model);
          });
        }
      }
    }
</script>

