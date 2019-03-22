import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import content from '@/content/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          name: 'content',
          component: content
        }
      ]
    }
  ]
})
