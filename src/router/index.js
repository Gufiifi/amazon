import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Cente',
        component: () => import('@/components/one/cente'),
      },
      {
        path: 'two',
        name: 'Two',
        component: () => import('@/components/one/two'),
      },
      {
        path: 'contone',
        name: 'Contoney',
        component: () => import('@/components/contone'),
      },
      {
        path: 'totay',
        name: 'Totay',
        component: () => import('@/components/totay'),
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
