/**
 * Created by zxf on 2018.4.8.
 */
import Breadcrumb from './src/breadcrumb'
import BreadcrumbItem from './src/breadcrumb-item'

Breadcrumb.install=function(Vue){
  Vue.component(Breadcrumb.name,Breadcrumb)

}
BreadcrumbItem.install=function(Vue){
  Vue.component(BreadcrumbItem.name,BreadcrumbItem)
}
export {
  Breadcrumb,BreadcrumbItem
}
