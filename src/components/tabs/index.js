/**
 * Created by zxf on 2018.4.13.
 */
import Tabs from './src/tabs'
import TabsNav from './src/tab-nav'
Tabs.install=function(Vue){
  Vue.component('my-tabs',Tabs)
}
TabsNav.install=function(Vue){
  Vue.component('my-tabs-nav',TabsNav)
}
export {Tabs,TabsNav}
