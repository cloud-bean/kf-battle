// import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as types from './mutation_types';

// Vue.use(Vuex);

const state = {
  loading: false,
  timeline: [],
  cards: [],
};

const mutations = {
};

export default new Vuex.Store({
  state,
  mutations,
  // actions,
  modules: {
  },
});
