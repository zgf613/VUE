import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Login from '@/components/login'

import Layout from '@/views/layout'
import Project from '@/views/backend/project'
import Workbench from '@/views/backend/workbench'
import Doc from '@/views/backend/doc'



Vue.use(Router)

let router = new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/management',
      name: 'Management',
      component: Layout,
      children:[
        {
          path: '/project',
          name: 'Project',
          component: Project,
          meta:{
            login:true
          }
        },
        {
          path: '/workbench',
          name: 'Workbench',
          component: Workbench,
          meta:{
            login:true
          }
        },
        {
          path: '/doc',
          name: 'Doc',
          component: Doc,
          meta:{
            login:false
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
router.beforeEach( (to,from,next) => {
  let bl = to.matched.some(function(item){
    return item.meta.login
  })
  if(bl){
    let info = router.app.$local.fetch("logIn")   //router.app指向根实例
    if(info.login){
      next()
    }else{
      router.push({
        path:'/login',
        query:{
          redirect: to.path.slice(1)
        }
      })
    }
  }else{
    next()
  }
})
export default router;