export default {
  members: state => state.members,
  groupOne: state => state.groups[0],
  groupTwo: state => state.groups[1],
  groups: state => state.groups,
  finalScore: state => state.finalScore,
  randomEvents: state => state.randomEvents,
};
