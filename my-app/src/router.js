import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import UserDashboard from './pages/UserDashboard.vue'
import BookingForm from './pages/BookingForm.vue'
import AdminLogin from './pages/admin/AdminLogin.vue'
import Dashboard from './pages/admin/Dashboard.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: UserDashboard },
   { path: '/book', component: BookingForm },
   { path: '/admin/login', component: AdminLogin },
   { path: '/admin/dashboard', component: Dashboard },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
