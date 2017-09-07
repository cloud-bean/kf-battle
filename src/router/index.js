import Vue from 'vue';
import Router from 'vue-router';
import Battle from '@/pages/BattlePage';
import TeamMemberPage from '@/pages/teamMemberPage';
import ChooseTeamPage from '@/pages/chooseTeamPage';
import randomCardPage from '@/pages/randomCardPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/battle',
      name: 'Battle',
      component: Battle,
    }, {
      path: '/teamMemberPage',
      name: 'teamMemberPage',
      component: TeamMemberPage,
    }, {
      path: '/',
      name: 'ChooseTeamPage',
      component: ChooseTeamPage,
    }, {
      path: '/randomCardPage',
      name: 'randomCardPage',
      component: randomCardPage,
    },
  ],
});
