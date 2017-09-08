<template>
  <div class="container">
    <div class="title-area">
      选择对战双方
    </div>

    <Row :gutter="16" class="main-area">
      <Col span="4" v-for="(item, index) in teamList" class="team-item">
      <team-item :teamData="item" :selected="!!item.selected" @click.native="handleSelect(index)"></team-item>
      </Col>
    </Row>
    <Alert type="info" show-icon v-show="selectedTeamCount!=2" style="width:30%;margin:0 auto">
        <span slot="desc">
            请选择两支战队。
        </span>
    </Alert>
    <div class="button-area">

      <Button type="primary" size="large" @click="initNewGame" v-show="selectedTeamCount==2">
        确认选择
        <Icon type="chevron-right"></Icon>
      </Button>

    </div>
  </div>
</template>
<script>
  import TeamItem from '../components/chooseTeamPage/teamItem';
  import { createNamespacedHelpers } from 'vuex';
  const { mapGetters, mapActions } = createNamespacedHelpers('team');

  export default {
    data() {
      return {
        teamCount: 0,
        teamSelect: [],
      };
    },
    methods: {
      ...mapActions([
        'setBattleTeams',
        'getAllTeams',
        'toggleTeamSelected',
      ]),
      handleSelect(index) {
        this.toggleTeamSelected({ index });
      },
      initNewGame() {
        this.setBattleTeams({ teams: this.selectedTeam });
        this.$router.push('/teamMemberPage');
      },
    },
    computed: {
      ...mapGetters([
        'teamList',
        'selectedTeam',
        'selectedTeamCount',
      ]),
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

  .main-content {
    padding: 1rem 4rem;
  }

  /*.team-list {
    padding: 1rem 4rem;
  }*/

  .team-item {
    margin: .5rem 0;
  }
</style>
