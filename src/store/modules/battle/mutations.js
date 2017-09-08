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
  },
};
