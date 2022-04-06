import { createRouter, createWebHistory } from 'vue-router'
// import vueConfig from 'vue.config'
import HomeView from '../views/HomeView.vue'
import User from '../views/User.vue'
import file from '../components/file.vue'
const HomeMessage = () => import('../views/HomeMessage.vue')
const HomeNews = () => import('../views/HomeNews.vue')
const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页' },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title: '关于' },
    children: [{
      path: 'news',
      component: HomeNews
    }, {
      path: 'message',
      component: HomeMessage
    }]
  },
  {
    path: '/user/:id',
    name: 'user',
    meta: { title: '用户' },
    component: User
  },
  {
    path: '/file',
    name: 'file',
    meta: { title: '文档' },
    component: file
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router
