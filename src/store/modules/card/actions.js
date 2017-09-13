import types from './mutation-types';
import * as api from '../../api';

export default {
  resetState({ commit }) {
    commit(types.resetState);
  },
  async fetchCardPool({ commit }) {
    commit(types.FETCH_DATA);
    const res = await api.getCardPool();
    const cardPool = res.data.data.sort((a, b) => a.level - b.level);
    commit(types.FETCH_CARDPOOL, { cardPool });
    commit(types.GOT_DATA);
  },
};
