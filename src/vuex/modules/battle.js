const SET_BATTLE_TEAMS = 'SET_BATTLE_TEAMS';
const SET_BATTLE_MEMBERS = 'SET_BATTLE_MEMBERS';


const battleState = {
  battleTeams: [],
  battleMembers: [],
};

const actions = {
  setBattleTeams({ commit }, payload) {
    commit('SET_BATTLE_TEAMS', payload);
  },
};

const mutations = {
  [SET_BATTLE_TEAMS](state, payload) {
    const newState = state;
    newState.battleTeams = payload.teams;
  },
  [SET_BATTLE_MEMBERS](state, payload) {
    const newState = state;
    newState.battleMembers.push(payload.member);
  },
};

export default {
  state: battleState,
  mutations,
  actions,
};
