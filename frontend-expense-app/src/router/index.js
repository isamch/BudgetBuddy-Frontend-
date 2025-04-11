import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import GroupDetails from '../pages/GroupDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/groups/:id', name: 'GroupDetails', component: GroupDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router