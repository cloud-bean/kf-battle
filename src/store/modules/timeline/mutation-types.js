export default [
  'resetState',
  'ADD_FEED',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});
