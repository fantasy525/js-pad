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
    isButtonNavigationState:true

  },
  getters:{
    navigations:state=>{
      return state.navigationState
    },
    isButtonNavigation:state=>{
      return state.isButtonNavigationState
    }
  },
  mutations:{
    buttonNav(state,payLoad){
      state.isButtonNavigationState=payLoad.value
    },
    [Types.addNavigation](state,payload){

      state.navigationState.push({path:payload.path,name:payload.name})
    },
    [Types.removeNavigation](state,payLoad){
      if(state.navigationState.length>0){
        console.log('state remove')
        state.navigationState= state.navigationState.slice(0,payLoad.index)
      }

    }
  },
  actions:{
    buttonNav({commit,state},payLoad){

      commit('buttonNav',payLoad)
    },
    [Types.addNavigation]({commit,state},payLoad){

      commit( Types.addNavigation,payLoad)
    },
    [Types.removeNavigation]({commit,state},payLoad){
      commit(Types.removeNavigation,payLoad)
    }
  },
  strict:  process.env.NODE_ENV==='development',
  plugins: process.env.NODE_ENV==='development' ? [createLogger()] : []
})
export default store
