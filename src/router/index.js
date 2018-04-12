import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const _import=require('./_import_'+process.env.NODE_ENV)

/*LayOut*/
const LayOut=_import('layout/layout')
// appMain
const AppMain=_import('layout/app-main')
export const menuRoutes=[
  {
    path: '/',
    name: 'Home',
    component: LayOut,
    menu:true,
    redirect:'/home',
    meta:{
      level:0
    },
    children:[
      {
        name:'home',
        path:'home',
        component:_import('home'),
        meta:{
          icon:'shouye',
          title:'首页',
          canExit:true,
          level:1,
          isMenu:true
        }
      },
      {
        name:'assess',
        path:'assess',
        component:_import('assess/assess'),
        meta:{
          icon:'fanganguihua',
          title:'评估',
          canExit:true,
          level:1,
          isMenu:true
        }
      },
      {
        name:'data',
        path:'data',
        component:_import('data'),
        meta:{
          icon:'wxbbaobiao',
          title:'数据',
          canExit:true,
          level:1,
          isMenu:true
        }

      },
      {
        name:'sci_res',
        path:'sci_res',
        component:_import('data'),
        meta:{
          icon:'kexue',
          title:'科研',
          canExit:true,
          level:1,
          isMenu:true
        }

      },
      {
        name:'patient',
        path:'patient',
        component:_import('patient'),
        meta:{
          icon:'qunzu',
          title:'患者',
          canExit:true,
          level:1,
          isMenu:true
        }
      }
    ]
  }
]
//区分一级界面，二级以外界面都是这个路由的子页面，因为要公用navbar中的面包屑导航
const pageRoutes=[
  {
    path:'/main',//一级菜单的动态路径
    name:'page',
    component:AppMain,
    meta:{
      title:'',
    },
    children:[
      {
        path:'assess_list/:menu',
        name:'assess_list',
        component:_import('assess_list'),
        meta:{
          level:2
        }
      },{
        path:'test_list/:assess_item',
        name:'test_list',
        component:_import('test_paper_list'),
        meta:{
          level:3
        }
      },{
         path:'patient_list/:id',
         name:'patient_list',
         component:_import('patient'),
         meta:{
          level:4
         }
      },
      {
        name:'tools',
        path:'tools',
        component:_import('assess/tools'),
        meta:{
        }
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
