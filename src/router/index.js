import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Register from '@/components/patient/Register'
import View from '@/components/patient/View'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: '',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/view',
      name: 'view',
      component: View
    }
  ]
})
