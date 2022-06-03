import { createStore } from 'vuex'
import counter from './modules/counter'
import employee from './modules/employee';
import users from './modules/users';

export default createStore({
  state: {
    counterState: counter.state,
    employeeState: employee.state,
    usersState: users.state
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counter,
    employee,
    users
  },
  getters: {
    getCounterState: function(state) {
      return state.counterState.counter;
    },
    getEmployeeState: function(state) {
      return state.employeeState.employeeList;
    },
    getUserState: function(state) {
      return state.usersState.userList;
    }
  }
})
