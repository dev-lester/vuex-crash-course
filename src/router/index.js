import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CounterComponent from '../components/CounterComponent'
import VuexEmployeesComponent from '../components/vuex/VuexEmployeesComponent'
import VuexUserListComponent from '../components/vuex/VuexUserListComponent'
import VuexCounterComponent from '../components/vuex/VuexCounterComponent'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: VuexCounterComponent 
  },
  {
    path: '/employees',
    name: 'Employees',
    component: VuexEmployeesComponent 
  },
   {
    path: '/users',
    name: 'UserList',
    component: VuexUserListComponent 
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
    
export default router
