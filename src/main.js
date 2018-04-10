import Vue from 'vue'
import App from './App'
import "./assets/css/new_mui.scss";
import "./assets/css/common.scss";
import router from './router'
import store from './store'
import Http from './common/http'
import './icons'
//导出自定义组件
import {BreadcrumbItem,Breadcrumb} from'./components/breadcrumb'
import Radio from './components/radio'
import {CheckBox,CheckBoxGroup }from './components/checkbox'
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Radio)
Vue.use(CheckBox)
Vue.use(CheckBoxGroup)
//  import './assets/css/mui.scss'

import {plusReady} from "./common/plus";


Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$http', {value: Http});
/*监听返回按钮*/
// router.beforeEach((to,from,next)=>{
//  console.log('beforeEach')
//   //store.dispatch('addNavigation',{page:to.meta.title})
//   next()
// })
// router.afterEach((to,from)=>{
//   if(to&&from){
//     store.dispatch('removeNavigation')
//     store.dispatch('addNavigation',{page:to.meta.title})
//   }
//   console.log('afterEach',to,from)
//   //store.dispatch('removeNavigation',{page:to.meta.title})
// })
/* eslint-disable no-new */
const vm=new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

