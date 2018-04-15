import Vue from 'vue'
import App from './App'
import "./assets/css/new_mui.scss";
import "./assets/css/common.scss";
import router from './router'
import store from './store'
import Http from './common/http'
import {SessionStorge} from './common/util'
import './icons'
import native from './common/plus'

//导出自定义组件
import {BreadcrumbItem,Breadcrumb} from'./components/breadcrumb'
import Radio from './components/radio'
import {CheckBox,CheckBoxGroup }from './components/checkbox'
import NavButton from './components/router-link'
import {Tabs,TabsNav} from './components/tabs'
Vue.use(NavButton)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Radio)
Vue.use(CheckBox)
Vue.use(CheckBoxGroup)
Vue.use(Tabs)
Vue.use(TabsNav)
//  import './assets/css/mui.scss'

import {plusReady} from "./common/plus";


Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$http', {value: Http});
Object.defineProperty(Vue.prototype,'$native',{value:native})
/*监听返回按钮*/
import {menuRoutes} from './router'
const menuName=menuRoutes[0].children.map((item)=>{
  return item.path
})
/**
 * 是否是一级菜单
 * @param from
 */
const isMenu=function(from){
   return menuName.find((menu)=>{
    return '/'+menu===from.path
  })
}
let isButtonBack=false
let urlStack=[]
const findUrl=function(statck,url){
  for(let i=0;i<statck.length;i++){
    if(statck[i].path===url){
      return {index:i,url:statck[i]}
    }
  }
  return false
}
let nextPath='/home'
router.beforeEach((to,from,next)=>{
  console.log('beforeEach',to,from.path)
  urlStack=store.getters.navigations//获取保存在vuex的已访问的url数组
  let url
  if(store.getters.isButtonNavigation){// 如果是点击了按钮离开
    if(findUrl(urlStack,to.path)!==false){//要去的页面存在历史数组中
      url=findUrl(urlStack,to.path)
      store.dispatch('removeNavigation',{index:url.index+1})
    }else{//不存在
      if(isMenu(to)&& isMenu(from)){//一级菜单清空原来的并增加新的
        store.dispatch('removeNavigation',{index:0})
      }
      store.dispatch('addNavigation',{name:to.query.name?to.query.name:to.meta.title,path:to.path})
    }
    console.log('----------是按钮离开')
  }else{
    url=findUrl(urlStack,to.path)
    if(findUrl(urlStack,to.path)!==false){//要去的页面存在历史数组中
        console.log('存在',url)
      store.dispatch('removeNavigation',{index:url.index+1})
    }
    else{//不存在，进入数组中倒数第二个url所在页面
      console.log('不存在',to.path,urlStack)
      if(to.path===nextPath){
        next()
      }else{
        let currentPathIndex=findUrl(urlStack,from.path).index//找到当前url在urlStack中的index
        nextPath=currentPathIndex===0?urlStack[currentPathIndex].path:urlStack[currentPathIndex-1].path//获取当前url前一个url
        console.log('else---',nextPath)
        if(nextPath){
          router.push({path:nextPath})
        }else{
          debugger
        }
      }
      store.dispatch('removeNavigation',{index:urlStack.length-1})
    }
    console.log('----------是物理离开')
  }

    next()

})
router.afterEach((to,from)=>{
  store.dispatch('buttonNav',{value:false})
  //store.dispatch('removeNavigation',{page:to.meta.title})
})
/* eslint-disable no-new */
const vm=new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

