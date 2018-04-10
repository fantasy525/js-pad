/**
 * Created by zxf on 2018.4.10.
 */
import CheckBox from './src/checkbox'
import CheckBoxGroup from './src/checkbox-group'
CheckBox.install=function(Vue){
  Vue.component('my-checkbox',CheckBox)
}
CheckBoxGroup.install=function(Vue){
  Vue.component('my-checkbox-group',CheckBoxGroup)
}
export {CheckBox,CheckBoxGroup}
