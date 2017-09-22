// import { events } from '../../../mockData/randomEvent';

export function initialState() {
  return {
    groups: [],
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
