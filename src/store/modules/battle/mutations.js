import types from './mutation-types';
import { initialState } from './state';

export default {
  [types.resetState](state) {
    const initial = initialState();
    Object.keys(state).forEach(key => {
      state[key] = initial[key];
    });
  },
  [types.SET_MEMBERS](state, payload) {
    state.members = payload;
  },
  [types.ADD_CARD_TO_MEMBER](state, payload) {
    const index = state.members.findIndex(item => item === payload.member);
    state.members[index].cards.push(payload.card);
    state.members[index].cards.sort((a, b) => a.level - b.level);
    state.members[index].cardsCount = state.members[index].cards.length;
  },
  [types.REMOVE_CARD_FROM_MEMBER](state, payload) {
    const index = state.members.findIndex(item => item === payload.member);
    const cardIndex = state.members[index].cards.findIndex(item => item === payload.card);
    state.members[index].cards.splice(cardIndex, 1);
    state.members[index].cardsCount = state.members[index].cards.length;
  },
  [types.clearCards](state) {
    state.members.map((member) => {
      member.cards = [];
      return 0;
    });
  },
  [types.SET_GROUPS](state, payload) {
    state.groups = payload.groups;
  },
};
