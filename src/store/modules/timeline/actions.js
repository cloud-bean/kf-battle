import types from './mutation-types';

export default {
  resetState({ commit }) {
    commit(types.resetState);
  },
  addFeed({ commit }, payload) {
    commit(types.ADD_FEED, payload);
  },
};
