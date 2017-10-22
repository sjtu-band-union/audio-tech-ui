import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Resources from '@/components/Resources'
import Tutor from '@/components/Tutor'
import Doc from '@/components/Doc'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tutor/:tutorname',
      name: 'tutor',
      component: Tutor,
      props: true,
      children: [
        {
          path: ':filename',
          name: 'doc',
          component: Doc,
          props: true,
        }
      ]
    },
    {
      path: '/band-union',
      name: 'about',
      component: About
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    // redirect
    {
      path: '/tutor',
      redirect: '/tutor/live'
    },
  ]
})
