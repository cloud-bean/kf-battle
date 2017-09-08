export default [
  'SET_TEAMS',
  'FETCH_DATA',
  'GOT_DATA',
  'SET_TEAM_SELECTED_STATUS',
  'SET_BATTLE_TEAMS',
  'SET_BATTLE_MEMBERS',
  'resetState',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});
