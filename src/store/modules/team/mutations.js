import types from './mutation-types';
import { initialState } from './state';

export default {
  [types.resetState](state) {
    const initial = initialState();
    Object.keys(state).forEach(key => {
      state[key] = initial[key];
    });
  },
  [types.ADD_TEMP_MEMBER](state, payload) {
    const newState = state;
    if (newState.battleTeams && newState.battleTeams.length > 0 && payload.member !== undefined) {
      newState.battleTeams.forEach((team) => {
        if (team._id === payload.member.groupId) {
          team.students.push(payload.member);
        }
      });
    }
  },
  [types.SET_TEAMS](state, payload) {
    const newState = state;
    newState.teamList = payload.teams;
    newState.totalTeamCount = payload.totalTeamCount;
  },
  [types.FETCH_DATA](state) {
    const newState = state;
    newState.loading = true;
  },
  [types.GOT_DATA](state) {
    const newState = state;
    newState.loading = false;
  },
  [types.SET_BATTLE_TEAMS](state, payload) {
    const newState = state;
    newState.battleTeams = payload.teams;
  },
  [types.SET_BATTLE_MEMBERS](state, payload) {
    const newState = state;
    newState.battleMembers.push(payload.member);
  },
  [types.POST_REQ](state) {
    state.loading = true;
  },
  [types.POST_SUCC](state) {
    state.loading = false;
  },
};
