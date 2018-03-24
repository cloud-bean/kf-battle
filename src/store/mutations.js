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
  [types.SET_BATTLE_THEMES](state, payload) {
    state.battleThemes = payload.battleThemes;
    console.log('get battleThemes');
    if (state.selectedTheme === null) {
      state.selectedTheme = payload.battleThemes[0];
      console.log('set selectedTheme');
    }
  },
  [types.SET_SELECTED_THEME](state, payload) {
    state.selectedTheme = payload.selectedTheme;
  },
  [types.SET_MEMBER_AVATARS](state, payload) {
    state.memberAvatars = payload.memberAvatars;
  },
  [types.SET_GAME_MODE](state, payload) {
    state.gameMode = payload.gameMode;
  },
};
