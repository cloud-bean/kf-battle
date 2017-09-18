export default [
  'resetState',
  'SET_MEMBERS',
  'ADD_CARD_TO_MEMBER',
  'REMOVE_CARD_FROM_MEMBER',
  'ADD_SCORE_TO_MEMBER',
  'clearCards',
  'SET_GROUPS',
  'SET_SCORE',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});
