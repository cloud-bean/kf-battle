export default [
  'SET_TEAMS',
  'FETCH_DATA',
  'GOT_DATA',
  'SET_BATTLE_TEAMS',
  'SET_BATTLE_MEMBERS',
  'ADD_TEMP_MEMBER',
  'resetState',
  'POST_REQ',
  'POST_SUCC',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});
