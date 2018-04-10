import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const _import=require('./_import_'+process.env.NODE_ENV)

/*LayOut*/
const LayOut=_import('layout/layout')
// appMain
const AppMain=_import('layout/app-main')
const menuRoutes=[
  {
    path: '/',
    name: 'Home',
    component: LayOut,
    menu:true,
    redirect:'/home',
    children:[
      {
        name:'home',
        path:'home',
        component:_import('home'),
        meta:{
          icon:'shouye',
          title:'首页',
          canExit:true
        }
      },
      {
        name:'assess',
        path:'assess',
        component:_import('assess'),
        meta:{
          icon:'fanganguihua',
          title:'评估',
          canExit:true
        }

      },
      {
        name:'data',
        path:'data',
        component:_import('data'),
        meta:{
          icon:'wxbbaobiao',
          title:'数据',
          canExit:true
        }

      },
      {
        name:'sci_res',
        path:'sci_res',
        component:_import('data'),
        meta:{
          icon:'kexue',
          title:'科研',
          canExit:true
        }

      },{
        name:'patient',
        path:'patient',
        component:_import('patient'),
        meta:{
          icon:'qunzu',
          title:'患者',
          canExit:true
        }
      }
    ]
  }
]
//区分一级界面，二级以外界面都是这个路由的子页面，因为要公用navbar中的面包屑导航
const pageRoutes=[
  {
    path:'/page',
    name:'page',
    component:AppMain,
    meta:{
      title:'',
    },
    alias:'/',//用了别名时跳转的to属性和push时就可以不写/page,而写为/
    children:[
      {
        path:'assess_list/:menu',

        name:'assess_list',
        component:_import('assess_list')
      },{
        path:'/test_list/:assess_item',
        name:'test_list',
        component:_import('test_paper_list')
      }
    ]
  }
]
export const myRoutes=[
  ...menuRoutes,...pageRoutes
]
const router=new Router({
  routes:myRoutes
})

export default router
