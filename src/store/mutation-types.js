export default [
  'resetState',
  'FETCH_DATA',
  'GOT_DATA',
  'POST_REQ',
  'POST_SUCC',
  'SET_TEAM_LOGOS',
  'SET_MEMBER_AVATARS',
  'SET_BATTLE_THEMES',
  'SET_SELECTED_THEME',
  'SET_GAME_MODE',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});

