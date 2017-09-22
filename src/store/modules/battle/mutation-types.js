export default [
  'resetState',
  'SET_MEMBERS',
  'ADD_CARD_TO_MEMBER',
  'REMOVE_CARD_FROM_MEMBER',
  'ADD_SCORE_TO_MEMBER',
  'clearCards',
  'FETCH_RANDOM_EVENTS',
  'SET_GROUPS',
  'SET_SCORE',
  'FETCH_DATA',
  'GOT_DATA',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});
