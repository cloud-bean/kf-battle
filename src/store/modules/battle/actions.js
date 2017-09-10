import types from './mutation-types';

export default {
  resetState({ commit }) {
    commit(types.resetState);
  },
  setMembers({ commit }, payload) {
    console.log('SET_MEMBERS', payload);
    commit(types.SET_MEMBERS, payload);
  },
  addCardToMember({ commit }, payload) {
    console.log('addCardToMember', payload);
    commit(types.ADD_CARD_TO_MEMBER, payload);
  },
  clearCards({ commit }) {
    commit(types.clearCards);
  },
  setGroups({ commit }, payload) {
    commit(types.SET_GROUPS, payload);
  },
};
