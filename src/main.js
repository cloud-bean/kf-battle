import Vue from 'vue';
import iView from 'iview';
import Vuex from 'vuex';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';

Vue.use(iView);
Vue.use(Vuex);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
