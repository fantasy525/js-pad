/**
 * Created by zxf on 2018.4.4.
 */
import router from '@/router'

// mui.init({//关闭mui的监听事件
//   keyEventBind: {
//     backbutton: false  //关闭back按键监听
//   }
// })

/**
 * 安卓原生返回按钮监听事件
 */
class JsBridge{
  constructor(){
    this.plusReady=[]
  }
  init() {
  }
  plusOnReady(cb){
    if(window.plus) {
      setTimeout(()=>{
        cb()
      }, 0);
    } else {
      document.addEventListener("plusready", ()=> {
        cb();
      }, false);
    }
  }
  toast(message){
    this.plusOnReady(()=>{

      plus.nativeUI.toast(message, {
        verticalAlign: 'bottom',
        duration:2000
      });
    })

  }
}
function handleButtonBack(){
  let _back_first=null
  // 获取所有Webview窗口
  var wvs = plus.webview.currentWebview();
  setTimeout(()=>{
    plus.key.addEventListener('backbutton', function() {
      wvs.canBack(function(e) {
        console.log(router.currentRoute.path)
        if(e.canBack&&!router.currentRoute.meta.canExit) {
          // alert(router.currentRoute.meta.canBack)
          wvs.back();
        } else {
          // wvs.close(); //hide,quit
          if(!_back_first){
            _back_first=new Date().getTime()
           new JsBridge().toast('再按一次退出')
            setTimeout(()=>{
              _back_first=null
            },2000)
          }else{
            if(new Date().getTime()-_back_first<2000){
              plus.runtime.quit();//退出应用
            }
          }
        }
      })
    });
  },0)
}
export function plusReady() {
  handleButtonBack()
}
if (window.plus) {
  plusReady(router);
} else {
  document.addEventListener('plusready', plusReady, false);
}

export default new JsBridge()


