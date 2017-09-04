import Vue from 'vue';
import Vuex from 'vuex';
import * as api from '../api';
Vue.use(Vuex);

// import * as actions from './actions';
// import * as types from './mutation_types';

// Vue.use(Vuex);
const SET_TEAMS = 'SET_TEAMS';
const FETCH_DATA = 'FETCH_DATA';
const GOT_DATA = 'GOT_DATA';
const SET_CARD_POOL = 'SET_CARD_POOL';


const rootState = {
  loading: false,
  timeline: [],
  cardPool: [],
  teams: [],
};

const actions = {
  async getAllTeams({ commit }) {
    commit('FETCH_DATA');
    const teams = await api.getAllTeams();
    commit('SET_TEAMS', teams);
    commit('GOT_DATA');
  },
  async getCardPool({ commit }) {
    commit('FETCH_DATA');
    const cardPool = await api.getCardPool();
    commit('SET_CARD_POOL', cardPool);
    commit('GOT_DATA');
  },
};

const mutations = {
  [SET_TEAMS](state, payload) {
    const newState = state;
    newState.teams = payload.teams;
  },
  [SET_CARD_POOL](state, payload) {
    const newState = state;
    newState.cardPool = payload.cardPool;
  },
  [FETCH_DATA](state) {
    const newState = state;
    newState.loading = true;
  },
  [GOT_DATA](state) {
    const newState = state;
    newState.loading = false;
  },
};

export default new Vuex.Store({
  state: rootState,
  mutations,
  actions,
});
