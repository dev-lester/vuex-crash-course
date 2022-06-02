import { createStore } from 'vuex'
import counter from './modules/counter'
import employee from './modules/employee';

export default createStore({
  state: {
    counterState: counter.state,
    employeeState: employee.state 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counter,
    employee
  },
  getters: {
    getCounterState: function(state) {
      return state.counterState.counter;
    },
    getEmployeeState: function(state) {
      return state.employeeState.employeeList;
    }
  }
})
