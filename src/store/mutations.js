import types from './mutation-types';
import { initialState } from './state';

export default {
  [types.resetState](state) {
    const initial = initialState();
    Object.keys(state).forEach(key => {
      state[key] = initial[key];
    });
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
  [types.SET_TEAM_LOGOS](state, payload) {
    state.teamLogos = payload.teamLogos;
  },
  [types.SET_MEMBER_AVATARS](state, payload) {
    state.memberAvatars = payload.memberAvatars;
  },
};
