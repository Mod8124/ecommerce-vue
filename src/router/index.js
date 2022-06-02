import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Details from '../views/Details/Details.vue'
import Product from '../views/Product/Product.vue'
import Men from '../views/Men.vue'
import Women from '../views/Women.vue'
import Error404 from '../views/404/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/men',
    name: 'Men',
    component : Men
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/women',
    name: 'Women',
    component : Women
  },
  {
      path:"/details/:id",
      name:"Details",
      component:Details,
      props:true
  },
  {
    path:"/product/:id",
    name:"Product",
    component:Product,
    props:true
  },
  {
    path: '/:catchAll(.*)', name: 'NotFound', component: Error404
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
