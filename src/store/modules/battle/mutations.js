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
      member.pickedCount = 0;
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
    let index = 0;
    for (const item of state.members) {
      if (item._id === payload.member._id) {
        break;
      }
      index++;
    }
    const score = payload.score;
    if (!state.members[index].get) {
      state.members[index].get = 0;
    }
    state.members[index].get += score;
  },
  [types.ADD_SCORE_TO_GROUP](state, payload) {
    const groupId = payload.groupId;
    const score = payload.score;
    const index = state.groups.findIndex(item => item._id === groupId);

    if (!state.groups[index].get) {
      state.groups[index].get = 0;
    }
    state.groups[index].get += score;
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
    state.finalScore = payload;
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
  [types.POST_REQ](state) {
    state.loading = true;
  },
  [types.POST_SUCC](state) {
    state.loading = false;
  },
  [types.ADD_MEMBER_PICKED_COUNT](state, payload) {
    const index = state.members.findIndex(item => item._id === payload.memberId);
    state.members[index].pickedCount += 1;
  },
};
