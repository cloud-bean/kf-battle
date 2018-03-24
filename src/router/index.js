import Vue from 'vue';
import Router from 'vue-router';
import Battle from '@/pages/BattlePage';
import Battle2 from '@/pages/BattlePage2';

import TeamMemberPage from '@/pages/teamMemberPage';
import ChooseTeamPage from '@/pages/chooseTeamPage';
import RandomCardPage from '@/pages/randomCardPage';
import WinPage from '@/pages/winPage';
import CustomPage from '@/pages/customPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/battle',
      name: 'Battle',
      component: Battle,
    }, {
      path: '/battle2',
      name: 'Battle2',
      component: Battle2,
    },
    {
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
      component: RandomCardPage,
    },
    {
      path: '/winPage',
      name: 'winPage',
      component: WinPage,
    },
    {
      path: '/custom',
      name: 'customPage',
      component: CustomPage,
    },
  ],
});
