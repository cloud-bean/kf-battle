import types from './mutation-types';
import * as api from '../../../api';

export default {
  resetState({ commit }) {
    commit(types.resetState);
  },
  async fetchCardPool({ commit }) {
    commit('FETCH_DATA');
    const res = await api.getCardPool();
    commit('FETCH_CARDPOOL', { cardPool: res.data.data });
    commit('GOT_DATA');
  },
};
