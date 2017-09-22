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
    const members = payload;
    members.map(member => {
      member.get = 0;
      member.lost = 0;
      return member;
    });
    state.members = members;
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
  [types.ADD_SCORE_TO_MEMBER](state, payload) {
    const index = state.members.findIndex(item => item === payload.member);
    const score = payload.score;
    if (!state.members[index].get) {
      state.members[index].get = 0;
    }
    if (!state.members[index].lost) {
      state.members[index].lost = 0;
    }
    if (score > 0) {
      state.members[index].get += score;
    } else {
      state.members[index].lost += score;
    }
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
  [types.SET_SCORE](state, payload) {
    state.finalScore = {
      left: payload.left,
      right: payload.right,
    };
  },
  [types.FETCH_RANDOM_EVENTS](state, payload) {
    state.randomEvents = payload.randomEvents;
  },
  [types.FETCH_DATA](state) {
    state.loading = true;
  },
  [types.GOT_DATA](state) {
    state.loading = false;
  },
};
