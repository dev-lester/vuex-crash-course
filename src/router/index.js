import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterComponent from '../components/CounterComponent'
import EmployeesComponent from '../components/EmployeesComponent'
import UserListComponent from '../components/UserListComponent'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterComponent 
  },
  {
    path: '/employees',
    name: 'Employees',
    component: EmployeesComponent 
  },
   {
    path: '/users',
    name: 'UserList',
    component: UserListComponent 
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
    
export default router
