export default {
  teamList: state => state.teamList,
  selectedTeamCount: (state, getter) => getter.selectedTeam.length,
  selectedTeam: state => state.teamList.filter((team) => (team.selected)),
  battleTeams: state => state.battleTeams,
};
