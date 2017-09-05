<template>
  <div class="container">
    <div class="title">
      选择对战双方
    </div>
    <Row :gutter="16" class="main-content">
      <Col span="4" v-for="item in teams" class="team-item">
      <team-item :teamData="item" :onSelect="onSelect"></team-item>
      </Col>
    </Row>
    <div class="button-area">
      <Button type="ghost" size="large" @click="goNewGame">下一步</Button>
    </div>
  </div>
</template>
<script>
import router from '../router';
import TeamItem from '../components/chooseTeamPage/teamItem';
// import teamData from '../mockData/teamList.json';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'getAllTeams', // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    onSelect(team, isSelected) {
      alert(`on select:${team._id}${team.name}${isSelected}`); // eslint-disable-line
    },
    goNewGame() {
      router.replace('/teamMemberPage');
    },
  },
  computed: mapState({
    teams: state => state.teams,
  }),
  mounted() {
    this.getAllTeams();
  },
  components: {
    TeamItem,
  },
};
</script>

<style scoped>

  .title {
    font-size: 1.5rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.3rem;
  }
  .main-content{
    padding: 1rem 4rem;
  }
  /*.team-list {
    padding: 1rem 4rem;
  }*/

  .team-item {
    margin: .5rem 0;
  }
</style>
