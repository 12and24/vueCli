import { createRouter, createWebHistory } from 'vue-router'
const Cart = () => import('../views/cart/cart.vue')
const Category = () => import('../views/category/category.vue')
const Home = () => import('../views/home/home.vue')
const Profile = () => import('../views/profile/profile.vue')
const routes = [
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/home',
    component: Home
  }, {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
