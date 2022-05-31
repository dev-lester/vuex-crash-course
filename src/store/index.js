import { createStore } from 'vuex'
import counter from './modules/counter'

export default createStore({
  state: {
    counterState: counter.state
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counter
  },
  getters: {
    getCounterState: function(state) {
      return state.counterState.counter;
    }
  }
})
