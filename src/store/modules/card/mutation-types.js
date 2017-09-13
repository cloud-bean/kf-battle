export default [
  'resetState',
  'FETCH_DATA',
  'GOT_DATA',
  'FETCH_CARDPOOL',
].reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});
