import Vue from 'vue';
import Router from 'vue-router';
import Battle from '@/pages/BattlePage';
import Battle2 from '@/pages/BattlePage2';
import Battle3 from '@/pages/BattlePage3';
import Battle4 from '@/pages/BattlePage4';

import TeamMemberPage from '@/pages/teamMemberPage';
import ChooseTeamPage from '@/pages/chooseTeamPage';
import ChooseTeamPage2 from '@/pages/chooseTeamPage2';
import ChooseTeamPage3 from '@/pages/chooseTeamPage3';

import RandomCardPage from '@/pages/randomCardPage';
import WinPage from '@/pages/winPage';
import CustomPage from '@/pages/customPage';
import LandingPage from '@/pages/landingPage';
import battleThemePage from '@/pages/setBattleThemePage';
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
      path: '/battle3',
      name: 'Battle3',
      component: Battle3,
    },
    {
      path: '/battle4',
      name: 'Battle4',
      component: Battle4,
    },
    {
      path: '/teamMemberPage',
      name: 'teamMemberPage',
      component: TeamMemberPage,
    }, {
      path: '/chooseTeamPage',
      name: 'ChooseTeamPage',
      component: ChooseTeamPage,
    }, {
      path: '/chooseTeamPage2',
      name: 'ChooseTeamPage2',
      component: ChooseTeamPage2,
    }, {
      path: '/chooseTeamPage3',
      name: 'ChooseTeamPage3',
      component: ChooseTeamPage3,
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
    {
      path: '/battleTheme',
      name: 'battleThemePage',
      component: battleThemePage,
    },
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage,
    },
  ],
});
