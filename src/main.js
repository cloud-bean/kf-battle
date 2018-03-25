import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';
import store from './store';

import Wilddog from 'wilddog';
import WildVue from 'wildvue';


Vue.use(Wilddog);
Vue.use(WildVue);
Vue.use(iView);

const wilddogApp = Wilddog.initializeApp({
  syncURL: 'https://kuafu.wilddogio.com/',
});
const sync = wilddogApp.sync();
const ref = sync.ref();

iView.LoadingBar.config({
  color: '#5cb85c',
  failedColor: '#f0ad4e',
  height: 5,
});
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach((to, from) => { // eslint-disable-line
  iView.LoadingBar.finish();
});
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  wilddog: {
    ref,
  },
});
