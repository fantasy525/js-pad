<template>
  <div class="el-transfer-panel">
    <p class="el-transfer-panel__header">
      <el-checkbox
        v-model="allChecked"
        :disabled="canSelectAll"
        @change="handleAllCheckedChange"
        :indeterminate="isIndeterminate">
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </el-checkbox>
    </p>
    <div :class="['el-transfer-panel__body', hasFooter ? 'is-with-footer' : '']">
      <el-input
        class="el-transfer-panel__filter"
        v-model="query"
        size="small"
        :placeholder="placeholder"
        @mouseenter.native="inputHover = true"
        @mouseleave.native="inputHover = false"
        v-if="filterable">
        <i slot="prefix"
          :class="['el-input__icon', 'icon-' + inputIcon]"
          @click="clearQuery"
        ></i>
      </el-input>
     <el-scrollbar :style="{height:height}">
      <el-radio-group
         v-model="radioChecked"
         v-if="mode==='radio'"
         v-show="!hasNoMatch && data.length > 0"
         :class="{ 'is-filterable': filterable }"
         class="el-transfer-panel__list"
        >
        <el-radio

          :label="item[keyProp]"
          :disabled="item[disabledProp]"
          :key="item[keyProp]"
          v-for="item in filteredData"
          class="el-transfer-panel__item">
          <option-content :option="item"></option-content>
        </el-radio>
      </el-radio-group>
       <el-checkbox-group
         v-else
         v-model="checked"
         v-show="!hasNoMatch && data.length > 0"
         :class="{ 'is-filterable': filterable }"
         class="el-transfer-panel__list">
         <el-checkbox
           class="el-transfer-panel__item"
           :label="item[keyProp]"
           :disabled="item[disabledProp]"
           :key="item[keyProp]"
           v-for="item in filteredData">
           <option-content :option="item"></option-content>
         </el-checkbox>
       </el-checkbox-group>
     </el-scrollbar>
      <p
        class="el-transfer-panel__empty"
        v-show="hasNoMatch">{{ t('el.transfer.noMatch') }}</p>
      <p
        class="el-transfer-panel__empty"
        v-show="data.length === 0 && !hasNoMatch">{{ t('el.transfer.noData') }}</p>
    </div>
    <p class="el-transfer-panel__footer" v-if="hasFooter">
      <slot></slot>
    </p>
  </div>
</template>

<script>
  import ElCheckboxGroup from 'element-ui/packages/checkbox-group';
  import ElCheckbox from 'element-ui/packages/checkbox';
  import ElInput from 'element-ui/packages/input';
  import ElRadioGroup from 'element-ui/packages/radio-group'
  import ElRadio from 'element-ui/packages/radio'
  import Locale from 'element-ui/src/mixins/locale';

  export default {
    mixins: [Locale],

    name: 'ElTransferPanel',

    componentName: 'ElTransferPanel',
    inject:['mode'],
    components: {
      ElCheckboxGroup,
      ElCheckbox,
      ElInput,
      ElRadio,
      ElRadioGroup,
      OptionContent: {
        props: {
          option: Object
        },
        render(h) {
          const getParent = vm => {
            if (vm.$options.componentName === 'ElTransferPanel') {
              return vm;
            } else if (vm.$parent) {
              return getParent(vm.$parent);
            } else {
              return vm;
            }
          };
          const panel = getParent(this);
          const transfer = panel.$parent || panel;
          return panel.renderContent
            ? panel.renderContent(h, this.option)
            : transfer.$scopedSlots.default
              ? transfer.$scopedSlots.default({ option: this.option })
              : <span>{ this.option[panel.labelProp] || this.option[panel.keyProp] }</span>;
        }
      }
    },

    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      renderContent: Function,
      placeholder: String,
      title: String,
      filterable: Boolean,
      format: Object,
      filterMethod: Function,
      defaultChecked: Array,
      props: Object,
      height:String
    },

    data() {
      return {
        checked:[],
        mode:this.mode,
        allChecked: false,
        query: '',
        inputHover: false,
        checkChangeByUser: true,
        radioChecked:''
      };
    },

    watch: {
      radioChecked(val){//单选时处理
        console.log('8888',val)
        if(val===''){
          this.checked=[]
          return
        }
        this.checked.pop()
        this.checked.push(val)
        //this.$emit('checked-change', [val],[val]);
      },
      checked(val, oldVal) {
        this.updateAllChecked();//每个列表项目改变时都要更新查看是否达到了全选
        if (this.checkChangeByUser) {
          const movedKeys = val.concat(oldVal).filter(v => val.indexOf(v) === -1 || oldVal.indexOf(v) === -1);
          this.$emit('checked-change', val, movedKeys);
        } else {
          this.$emit('checked-change', val);
          this.checkChangeByUser = true;
        }
      },

      data() {
        console.log('this.checked',this, this.checked)

        const checked = [];
        const filteredDataKeys = this.filteredData.map(item => item[this.keyProp]);
        this.checked.forEach(item => {
          if (filteredDataKeys.indexOf(item) > -1) {
            checked.push(item);
          }
        });
        console.log(filteredDataKeys,checked)
        this.checkChangeByUser = false;
        this.checked = checked;
        if(checked.length===0){
          this.radioChecked=''
        }
      },

      checkableData() {
        this.updateAllChecked();
      },

      defaultChecked: {
        immediate: true,
        handler(val, oldVal) {
          //先判断旧的是否存在，并且新旧长度一致，再判断新数组中是否存在旧的数组
          if (oldVal && val.length === oldVal.length &&
            val.every(item => oldVal.indexOf(item) > -1)) return;
          const checked = [];
          const checkableDataKeys = this.checkableData.map(item => item[this.keyProp]);
          val.forEach(item => {
            if (checkableDataKeys.indexOf(item) > -1) {
              checked.push(item);
            }
          });
          this.checkChangeByUser = false;
          this.checked = checked;
        }
      }
    },

    computed: {
      filteredData() {
        return this.data.filter(item => {

          if (typeof this.filterMethod === 'function') {
            return this.filterMethod(this.query, item);
          } else {
            const label = item[this.labelProp] || item[this.keyProp].toString();
            return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          }
        });
      },

      checkableData() {
        return this.filteredData.filter(item => !item[this.disabledProp]);
      },

      checkedSummary() {
        const checkedLength = this.checked.length;
        const dataLength = this.data.length;
        const { noChecked, hasChecked } = this.format;
        if (noChecked && hasChecked) {
          return checkedLength > 0
            ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength)
            : noChecked.replace(/\${total}/g, dataLength);
        } else {
          return `${ checkedLength }/${ dataLength }`;
        }
      },

      isIndeterminate() {
        const checkedLength = this.checked.length;
        return checkedLength > 0 && checkedLength < this.checkableData.length;
      },

      hasNoMatch() {
        return this.query.length > 0 && this.filteredData.length === 0;
      },

      inputIcon() {
        return this.query.length > 0 && this.inputHover
          ? 'circle-close'
          : 'sousuo';
      },

      labelProp() {
        return this.props.label || 'label';
      },

      keyProp() {
        return this.props.key || 'key';
      },

      disabledProp() {
        return this.props.disabled || 'disabled';
      },

      hasFooter() {
        return !!this.$slots.default;
      },
      canSelectAll(){
        return this.mode==='radio'
      }
    },

    methods: {
      /**
       * 更新全选按钮额状态，思路是查看已经选择的数组中是否存在左边列表的所有元素
       */
      updateAllChecked() {
        const checkableDataKeys = this.checkableData.map(item => item[this.keyProp]);
        this.allChecked = checkableDataKeys.length > 0 &&
          checkableDataKeys.every(item => this.checked.indexOf(item) > -1);//every方法当所有条件满足时才返回true,否则返回false
      },

      handleAllCheckedChange(value) {
        this.checked = value
          ? this.checkableData.map(item => item[this.keyProp])
          : [];
      },

      clearQuery() {
        if (this.inputIcon === 'circle-close') {
          this.query = '';
        }
      }
    }
  };
</script>
