/**
 * Created by zxf on 2018.4.3.
 */
import Vue from 'vue'
import IconSvg from '@/components/icon-svg'
import IconFontClass from '@/components/icon-font-class'
//全局注册
Vue.component('icon-svg',IconSvg)
Vue.component('icon-fontclass',IconFontClass)
/**
 *  通过webpack的require.context功能来引入某个文件夹下的文件
 * @param requireContext
 */
const requireAll=function(requireContext){
//requireContext.keys() 返回一个数组如["./arrow_up.svg"],然后遍历这个数组，传入require.context这个方法

  /*requireContext是一个方法，有静态属性
   ƒ webpackContext(req) {
	  return __webpack_require__(webpackContextResolve(req));这个方法会导入.svg文件，同时svg-sprite-loader会处理这个.svg文件加入到html中
    }
  * */

  return requireContext.keys().map(requireContext)//其实这里不用返回也可以，
}
const req=require.context('./svg',false,/\.svg$/)//返回一个方法，方法可以传入上面获取到的key值，然后去require这个文件
requireAll(req)


