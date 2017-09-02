import Vue from 'vue'
import Router from 'vue-router'
import Battle from '@/pages/BattlePage'
import NewGame from '@/pages/newGamePage'
import ChooseTeamPage from '@/pages/chooseTeamPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/battle',
      name: 'Battle',
      component: Battle
    }, {
      path: '/newGame',
      name: 'NewGame',
      component: NewGame
    }, {
      path: '/',
      name: 'ChooseTeamPage',
      component: ChooseTeamPage
    }
  ]
})
