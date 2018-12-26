import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: resolve => require(['../page/Home'], resolve)
    }, {
      path: '/sigin',
      component: resolve => require(['../page/Sigin'], resolve)
    },
    {
      path: '/register',
      component: resolve => require(['../page/Register'], resolve)
    }, {
      path: '/mine',
      component: resolve => require(['../page/Mine'], resolve)
    }, {
      path: '/editor',
      component: resolve => require(['../page/Editor'], resolve)
    }
  ]
})
