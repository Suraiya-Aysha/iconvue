import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog
    }
  })
}
export default createStore