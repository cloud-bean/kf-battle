<template>
  <div class="container">
    <div class="title-area">
      选择对战双方
    </div>

    <Row :gutter="16" class="main-area">
      <Col span="4" v-for="(item, index) in teamList" class="team-item">
        <team-item :teamData="item" :index="index" :onSelect="onSelect"></team-item>
      </Col>
    </Row>
    <Alert type="info" show-icon v-show="teamCount!=2" style="width:30%;margin:0 auto">
        <span slot="desc">
            请选择两支战队。
        </span>
    </Alert>
    <div class="button-area">

      <Button type="primary" size="large" @click="goNewGame" v-show="teamCount==2">
        确认选择
        <Icon type="chevron-right"></Icon>
      </Button>

    </div>
  </div>
</template>
<script>
import TeamItem from '../components/chooseTeamPage/teamItem';
// import teamData from '../mockData/teamList.json';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      teamCount: 0,
      teamSelect: [],
    };
  },
  methods: {
    ...mapMutations([
      'setBattleTeam',
    ]),
    ...mapActions([
      'getAllTeams',
    ]),
    onSelect(index, teamData, selected) {
      if (selected) {
        this.teamCount++;
        this.teamSelect[index] = true;
      } else {
        this.teamCount--;
        this.teamSelect[index] = false;
      }
      // alert(`on select:${selected}`); // eslint-disable-line
    },
    goNewGame() {
      const that = this;
      this.teamSelect.filter((item, index) => {
        if (!!item) {
          that.setBattleTeam({ team: that.teamList[index] });
          console.log(index);
        }
        return 0;
      });
      this.$router.push('/teamMemberPage');
    },
  },
  computed: mapState({
    teamList: state => state.teamList,
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
