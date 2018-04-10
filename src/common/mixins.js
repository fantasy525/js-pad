/**
 * Created by zxf on 2018.4.9.
 */
const changeNavigation={
  beforeRouteLeave(to,from,next){
    console.log('leave mixins')
    this.$store.dispatch('addNavigation',{page:to.query.name})
    next()
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      //一级菜单页面用title
      vm.$store.dispatch('addNavigation',{page:to.meta.title})
    })
  }
}
export default {
  changeNavigation
}
