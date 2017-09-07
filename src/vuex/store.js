import Vue from 'vue';
import Vuex from 'vuex';
import * as api from '../api';
import battle from './modules/battle';

Vue.use(Vuex);

const SET_TEAMS = 'SET_TEAMS';
const FETCH_DATA = 'FETCH_DATA';
const GOT_DATA = 'GOT_DATA';
const SET_CARD_POOL = 'SET_CARD_POOL';
const SET_TEAM_SELECTED_STATUS = 'SET_TEAM_SELECTED_STATUS';


const rootState = {
  loading: false,
  timeline: [],
  cardPool: [],
  teamList: [],
};

const actions = {
  async getAllTeams({ commit }) {
    try {
      commit('FETCH_DATA');
      const res = await api.getAllTeams();
      commit('SET_TEAMS', { teamList: res.data.data });
      commit('GOT_DATA');
    } catch (e) {
      console.log(e);
    }
  },
  toggleTeamSelected({ commit }, payload) {
    commit('SET_TEAM_SELECTED_STATUS', payload);
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
    newState.teamList = payload.teamList;
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
  [SET_TEAM_SELECTED_STATUS](state, payload) {
    const newState = state;
    const team = newState.teamList[payload.index];
    const status = newState.teamList[payload.index].selected;
    const newTeam = { ...team, selected: !status };
    newState.teamList.splice(payload.index, 1, newTeam);
  },
};

const getters = {
  selectedTeamCount(state, getter) {
    return getter.selectedTeam.length;
  },
  selectedTeam(state) {
    return state.teamList.filter((team) => (team.selected));
  },
};

export default new Vuex.Store({
  state: rootState,
  mutations,
  actions,
  getters,
  modules: {
    battle,
  },
});
