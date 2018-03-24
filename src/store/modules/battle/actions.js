import types from './mutation-types';
import * as api from '../../api';

export default {
  resetState({ commit }) {
    commit(types.resetState);
  },
  setMembers({ commit }, payload) {
    console.log(payload);
    commit(types.SET_MEMBERS, payload);
  },
  addCardToMember({ commit }, payload) {
    commit(types.ADD_CARD_TO_MEMBER, payload);
  },
  removeCardFromMember({ commit }, payload) {
    commit(types.REMOVE_CARD_FROM_MEMBER, payload);
  },
  addScoreToMember({ commit }, payload) {
    commit(types.ADD_SCORE_TO_MEMBER, payload);
    commit(types.ADD_SCORE_TO_GROUP, payload);
  },
  clearCards({ commit }) {
    commit(types.clearCards);
  },
  setGroups({ commit }, payload) {
    commit(types.SET_GROUPS, payload);
  },
  setFinalScore({ commit }, payload) {
    commit(types.SET_SCORE, payload);
  },
  async fetchRandomEvents({ commit }) {
    commit(types.FETCH_DATA);
    const res = await api.getRandomEvents();
    const randomEvents = res.data.data.sort((a, b) => a.level - b.level);
    commit(types.FETCH_RANDOM_EVENTS, { randomEvents });
    commit(types.GOT_DATA);
  },
  async postBattleResult({ commit }, payload) {
    commit(types.POST_REQ);
    const res = await api.postBattleResult(payload);
    console.log('post result', res.data.data);
    commit(types.POST_SUCC);
  },
  addMemberPickedCount({ commit }, payload) {
    commit(types.ADD_MEMBER_PICKED_COUNT, payload);
    console.log(payload);
  },
};
