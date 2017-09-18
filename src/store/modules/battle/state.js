export function initialState() {
  return {
    groups: [],
    created: '',
    members: [],
    finalScore: {
      left: 0,
      right: 0,
    },
  };
}

export default initialState();
