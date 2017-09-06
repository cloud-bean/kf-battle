// const SET_BATTLE_TEAMS = 'SET_BATTLE_TEAMS';

const battleState = {
  battleTeams: [],
};

const actions = {

};

const mutations = {
  setBattleTeam(state, payload) {
    const newState = state;
    newState.battleTeams.push(payload.team);
  },
};

export default {
  state: battleState,
  mutations,
  actions,
};
