import types from './mutation-types';
import * as api from './api';

export default {
  resetState({ commit }) {
    commit(types.resetState);
  },
  async getAllTeamLogos({ commit }) {
    commit(types.FETCH_DATA);
    const res = await api.getAllTeamLogos();
    if (res.data.data && res.data.data[0].images) {
      commit(types.SET_TEAM_LOGOS, { teamLogos: res.data.data[0].images });
    }
    commit(types.GOT_DATA);
  },
  async getAllMemberAvatars({ commit }) {
    commit(types.FETCH_DATA);
    const res = await api.getAllMemberAvatars();
    if (res.data.data && res.data.data[0].images) {
      commit(types.SET_MEMBER_AVATARS, { memberAvatars: res.data.data[0].images });
    }
    commit(types.GOT_DATA);
  },
  async getAllBattleThemes({ commit }) {
    commit(types.FETCH_DATA);
    const res = await api.getAllBattleThemes();
    if (res.data.data) {
      commit(types.SET_BATTLE_THEMES, { battleThemes: res.data.data });
    }
    commit(types.GOT_DATA);
  },
  setSelectedTheme({ commit }, payload) {
    commit(types.SET_SELECTED_THEME, { selectedTheme: payload });
  },
  setGameMode({ commit }, payload) {
    commit(types.SET_GAME_MODE, { gameMode: payload });
  },
  async setMemberAvatar({ commit }, payload) {
    commit(types.POST_REQ);
    const res = await api.setMemberAvatar(payload.id, payload.data);
    console.log('post result', res.data.data);
    commit(types.POST_SUCC);
  },
};
