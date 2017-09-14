import types from './mutation-types';

export default {
  resetState({ commit }) {
    commit(types.resetState);
  },
  setMembers({ commit }, payload) {
    commit(types.SET_MEMBERS, payload);
  },
  addCardToMember({ commit }, payload) {
    commit(types.ADD_CARD_TO_MEMBER, payload);
  },
  removeCardFromMember({ commit }, payload) {
    commit(types.REMOVE_CARD_FROM_MEMBER, payload);
  },
  clearCards({ commit }) {
    commit(types.clearCards);
  },
  setGroups({ commit }, payload) {
    commit(types.SET_GROUPS, payload);
  },
};
