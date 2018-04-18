/**
 * Created by zxf on 2018.4.18.
 */
import MyTable from './src/my-table.vue'
import MyTableColumn from './src/table-column.vue'
MyTable.install=function(Vue){
  Vue.component('my-table',MyTable)
  Vue.component('my-table-column',MyTableColumn)
}
export {MyTable,MyTableColumn}
