/**
 * Created by zxf on 2018.4.8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as Types from "./mutation-type"
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    navigationState:[],

  },
  getters:{
    navigations:state=>{
      return state.navigationState
    }
  },
  mutations:{
    [Types.addNavigation](state,payload){
      if(state.navigationState.length>0&&state.navigationState[state.navigationState.length-1].name===payload.name) return
      state.navigationState.push({path:payload.path,name:payload.name})
    },
    [Types.removeNavigation](state){
      if(state.navigationState.length>0){
        state.navigationState.pop()
      }

    }
  },
  actions:{
    [Types.addNavigation]({commit,state},payLoad){

      commit( Types.addNavigation,payLoad)
    },
    [Types.removeNavigation]({commit,state}){
      commit(Types.removeNavigation)
    }
  },
  strict:  process.env.NODE_ENV==='development',
  plugins: process.env.NODE_ENV==='development' ? [createLogger()] : []
})
export default store
