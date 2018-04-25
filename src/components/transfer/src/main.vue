<template>
  <div class="el-transfer">
    <transfer-panel
      v-bind="$props"
      ref="leftPanel"
      :data="sourceData"
      :title="titles[0] || t('el.transfer.titles.0')"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onSourceCheckedChange">
      <slot name="left-footer"></slot>
    </transfer-panel>
    <div class="el-transfer__buttons">
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        @click.native="addToLeft"
        :disabled="rightChecked.length === 0">
        <i class="iconfont icon-fanhui"></i>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        @click.native="addToRight"
        :disabled="leftChecked.length === 0">
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
        <i class="iconfont icon-qianjin-copy"></i>
      </el-button>
    </div>
    <transfer-panel
      v-bind="$props"
      ref="rightPanel"
      :data="targetData"
      :height="height"
      :title="titles[1] || t('el.transfer.titles.1')"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onTargetCheckedChange">
      <slot name="right-footer"></slot>
    </transfer-panel>
  </div>
</template>

<script>
  import ElButton from 'element-ui/packages/button';
  import Emitter from 'element-ui/src/mixins/emitter';
  import Locale from 'element-ui/src/mixins/locale';
  import TransferPanel from './transfer-panel.vue';
  import Migrating from 'element-ui/src/mixins/migrating';

  export default {
    name: 'ElTransfer',

    mixins: [Emitter, Locale, Migrating],
    provide(){
      return {
        mode:this.mode
      }
    },
    components: {
      TransferPanel,
      ElButton
    },

    props: {
      height:'',
      mode:{
        type:String,
        default:'checkbox'
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      titles: {
        type: Array,
        default() {
          return [];
        }
      },
      buttonTexts: {
        type: Array,
        default() {
          return [];
        }
      },
      filterPlaceholder: {
        type: String,
        default: ''
      },
      filterMethod: Function,
      leftDefaultChecked: {
        type: Array,
        default() {
          return [];
        }
      },
      rightDefaultChecked: {
        type: Array,
        default() {
          return [];
        }
      },
      renderContent: Function,
      value: {
        type: Array,
        default() {
          return [];
        }
      },
      format: {
        type: Object,
        default() {
          return {};
        }
      },
      filterable: Boolean,
      props: {
        type: Object,
        default() {
          return {
            label: 'label',
            key: 'key',
            disabled: 'disabled'
          };
        }
      },
      targetOrder: {
        type: String,
        default: 'original'
      }
    },

    data() {
      return {
        leftChecked: [],
        rightChecked: []
      };
    },
    created(){
      console.log('main created')
    },

    computed: {
      dataObj() {
        const key = this.props.key;
        return this.data.reduce((o, cur) => (o[cur[key]] = cur) && o, {});
      },

      sourceData() {//从已经选择到右边的数组中查找哪些没有选择
        return this.data.filter(item => this.value.indexOf(item[this.props.key]) === -1);
      },

      targetData() {//从原始数据中查找哪个被选择了，返回被选择的元素
        return this.targetOrder === 'original'
          ? this.data.filter(item => this.value.indexOf(item[this.props.key]) > -1)
          : this.value.map(key => this.dataObj[key]);
      },

      hasButtonTexts() {
        return this.buttonTexts.length === 2;
      }
    },

    watch: {
      value(val) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'footer-format': 'footer-format is renamed to format.'
          }
        };
      },

      onSourceCheckedChange(val, movedKeys) {
        this.leftChecked = val;
        if (movedKeys === undefined) return;
        this.$emit('left-check-change', val, movedKeys);
      },

      onTargetCheckedChange(val, movedKeys) {
        this.rightChecked = val;
        if (movedKeys === undefined) return;
        this.$emit('right-check-change', val, movedKeys);
      },
      addRadioToLeft(){

        this.$emit('input', this.leftChecked)
        this.$emit('change',  this.leftChecked);
      },
      addToLeft() {

        let currentValue = this.value.slice();
        this.rightChecked.forEach(item => {//判断当前选择的是否在已选的value中
          const index = currentValue.indexOf(item);
          if (index > -1) {
            currentValue.splice(index, 1);
          }
        });
        if(this.mode==='radio'){//单选
          this.addRadioToLeft()
          return false
        }
        this.$emit('input', currentValue);
        this.$emit('change', currentValue, 'left', this.rightChecked);
      },
      addRadioToRight(){

        this.$emit('input', this.leftChecked)
        this.$emit('change',  this.leftChecked);

      },
      addToRight() {

        let currentValue = this.value.slice();
        console.log(currentValue)
        const itemsToBeMoved = [];
        const key = this.props.key;
        this.data.forEach(item => {
          const itemKey = item[key];

          if (
            this.leftChecked.indexOf(itemKey) > -1 &&
            this.value.indexOf(itemKey) === -1
          ) {
            itemsToBeMoved.push(itemKey);
          }
        });
        if(this.mode==='radio'){//单选
          this.addRadioToRight()
          return false
        }
        //多选，把之前选的跟新选的数组合并，合并方式有两种
        currentValue = this.targetOrder === 'unshift'
          ? itemsToBeMoved.concat(currentValue)
          : currentValue.concat(itemsToBeMoved);
        this.$emit('input', currentValue);
        this.$emit('change', currentValue, 'right', this.leftChecked);
      },

      clearQuery(which) {
        if (which === 'left') {
          this.$refs.leftPanel.query = '';
        } else if (which === 'right') {
          this.$refs.rightPanel.query = '';
        }
      }
    }
  };
</script>
