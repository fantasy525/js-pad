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
import NavButton from './components/router-link'
Vue.use(NavButton)
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
import {menuRoutes} from './router'
const menuName=menuRoutes[0].children.map((item)=>{
  return item.name
})
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
let curPath='/home'
router.beforeEach((to,from,next)=>{
  console.log('beforeEach',to,from.path)

  urlStack=store.getters.navigations
  let url
  if(store.getters.isButtonNavigation){
    isButtonBack=true
    if(findUrl(urlStack,to.path)!==false){
      url=findUrl(urlStack,to.path)
      store.dispatch('removeNavigation',{index:url.index+1})
    }else{
      store.dispatch('addNavigation',{name:to.query.name?to.query.name:to.meta.title,path:to.path})
    }
    console.log('----------是按钮离开')
  }else{
    isButtonBack=false
    url=findUrl(urlStack,to.path)
    if(findUrl(urlStack,to.path)!==false){//存在
        console.log('存在',url)
      store.dispatch('removeNavigation',{index:url.index+1})
    }
    else{//不存在

      console.log('不存在',to.path,urlStack)
      if(to.path===curPath){
        next()

      }else{
        curPath=urlStack[urlStack.length-2].path
        console.log('else---',curPath)
        if(curPath){
          router.push({path:curPath})
        }else{
          debugger
        }

      }
      store.dispatch('removeNavigation',{index:urlStack.length-2})
    }
    console.log('----------是物理离开')
  }


    // if(store.state.navigationState.length!==0&&store.state.navigationState.find(url=>{return url.path===to.path})){//后退
    //   store.dispatch('removeNavigation',{length:from.meta.level-to.meta.level})
    // }else{//前进
    //   store.dispatch('addNavigation',{name:to.query.name?to.query.name:to.meta.title,path:to.path})
    // }

    next()
  // if(from.path!=='/'){//第一次进入首页时增加首页
  //   console.log(to.meta.level,from.meta.level)
  //   if(to.meta.level>from.meta.level){//增加导航
  //     store.dispatch('addNavigation',{name:to.query.name,path:to.path})
  //   }else{//删除导航
  //     store.dispatch('removeNavigation',{length:from.meta.level-to.meta.level})
  //   }
  //   next()
  //   return
  // }
  // if(menuName.indexOf(to.name)>-1){
  //   store.dispatch('addNavigation',{name:to.meta.title,path:to.path})
  //   next()
  //   return
  // }
  //store.dispatch('addNavigation',{page:to.meta.title})

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

