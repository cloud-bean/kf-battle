export default [
  'resetState',
  'SET_MEMBERS',
  'ADD_CARD_TO_MEMBER',
  'clearCards',
  'SET_GROUPS',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});
