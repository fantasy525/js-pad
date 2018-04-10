/**
 * Created by zxf on 2018.4.3.
 * 生产环境用懒加载
 */
module.exports = file => () => import('@/pages/' + file + '.vue')
