import types from './mutation-types';
import { initialState } from './state';

export default {
  [types.resetState](state) {
    const initial = initialState();
    Object.keys(state).forEach(key => {
      state[key] = initial[key];
    });
  },
  [types.SET_TEAMS](state, payload) {
    const newState = state;
    newState.teamList = payload.teams;
  },
  [types.FETCH_DATA](state) {
    const newState = state;
    newState.loading = true;
  },
  [types.GOT_DATA](state) {
    const newState = state;
    newState.loading = false;
  },
  [types.SET_TEAM_SELECTED_STATUS](state, payload) {
    const newState = state;
    const team = newState.teamList[payload.index];
    const status = newState.teamList[payload.index].selected;
    const newTeam = { ...team, selected: !status };
    newState.teamList.splice(payload.index, 1, newTeam);
  },
  [types.SET_BATTLE_TEAMS](state, payload) {
    const newState = state;
    newState.battleTeams = payload.teams;
  },
  [types.SET_BATTLE_MEMBERS](state, payload) {
    const newState = state;
    console.log(newState.battleMembers);
    newState.battleMembers.push(payload.member);
  },
};
