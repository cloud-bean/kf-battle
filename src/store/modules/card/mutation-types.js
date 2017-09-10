export default [
  'resetState',
  'FETCH_DATA',
  'GOT_DATA',
  'FETCH_CARDPOOL',
  'RANDOM_INDEX',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});
