/**
 * Created by zxf on 2018.4.17.
 */
import Select from './src/my-select'
import SelectItem from './src/select-item'
Select.install=function(Vue){
  Vue.component('my-select',Select)
}
SelectItem.install=function(Vue){
  Vue.component('my-select-option',SelectItem)
}
export {
  SelectItem,Select
}
