import types from './mutation-types';
import * as api from '../../api';

export default {
  resetState({ commit }) {
    commit(types.resetState);
  },
  async getAllTeams({ commit }) {
    commit('FETCH_DATA');
    const res = await api.getAllTeams();
    commit('SET_TEAMS', { teams: res.data.data });
    commit('GOT_DATA');
  },
  setBattleTeams({ commit }, payload) {
    commit('SET_BATTLE_TEAMS', payload);
  },
};
