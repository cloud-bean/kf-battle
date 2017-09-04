<template>
  <div class="container">
    <div class="title">
      选择对战双方
    </div>
    <Row :gutter="16" class="team-list">
      <Col span="4" v-for="item in teamList" class="team-item">
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
import teamData from '../mockData/teamList.json';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      teamList: teamData.team,
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
      router.replace('/newGame');
    },
  },
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

  .team-list {
    padding: 1rem 4rem;
  }

  .team-item {
    margin: .5rem 0;
  }

  .button-area {
    position: relative;
    margin: 8rem 0 auto;
  }

  .container {
    margin: 2rem 2rem;
    padding: 2rem 2rem;
    background-color: rgba(255,255,255,.9);
    height: 45rem;
    border-radius: .5rem;
    box-shadow: 0 0 15px #000;
    overflow: scroll;
    position: relative;
  }
</style>
