import { createRouter, createWebHistory } from 'vue-router'
import DashbordView from '../views/DashbordView.vue'
import LoginView from '../views/LoginView.vue'



const routes = [
   
    {
      path: '/login',name: 'Login',component: LoginView
    },
    {
      path: '/',name: 'Dashboard',component: DashbordView
    },
    
 

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router










