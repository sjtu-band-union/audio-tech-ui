import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Live from '@/components/Live'
import About from '@/components/About'
import Resources from '@/components/Resources'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tutor/post',
      name: 'post',
      component: Post
    },
    {
      path: '/tutor/live',
      name: 'live',
      component: Live
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
    }
  ]
})
