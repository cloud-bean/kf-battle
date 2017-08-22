import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'   // 使用 CSS

import Battle from '@/pages/BattlePage'
Vue.use(iView)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Battle',
      component: Battle
    }
  ]
})
