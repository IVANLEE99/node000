import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'
import UserDetail from '../views/UserDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/UserList',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/UserAdd',
    name: 'UserAdd',
    component: UserDetail
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/UserUpdate',
    name: 'UserUpdate',
    component: UserDetail,
    props: true
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: "*",
    redirect: '/UserList'
  }
]

const router = new VueRouter({
  routes
})

export default router
