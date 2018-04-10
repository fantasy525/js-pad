/**
 * Created by zxf on 2018.4.3.
 * 开发环境不使用懒加载方案
 */
module.exports = file => require('@/pages/' + file + '.vue').default // vue-loader at least v13.0.0+
