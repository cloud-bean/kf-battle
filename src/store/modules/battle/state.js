// import { events } from '../../../mockData/randomEvent';

export function initialState() {
  return {
    groups: [],
    loading: false,
    created: '',
    members: [],
    finalScore: {
      left: 0,
      right: 0,
    },
    randomEvents: [],
  };
}

export default initialState();
