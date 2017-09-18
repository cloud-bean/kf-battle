<template>
  <div class="container">
    <div class="title-area">
      选择对战双方
    </div>

    <Row :gutter="16" class="main-area">
      <Col span="4" v-for="(item, index) in teamList"  :key="index" class="team-item">
      <team-item :teamData="item" :selected="!!item.selected"  :key="index" @click.native="handleSelect(item)"></team-item>
      </Col>
    </Row>
    <Alert type="info" show-icon v-show="teamSelect.length < maxTeamCount" style="width:30%;margin:0 auto">
        <span slot="desc">
            请选择两支战队。
        </span>
    </Alert>
    <div class="button-area">

      <Button type="primary" size="large" @click="initNewGame" v-show="teamSelect.length == maxTeamCount">
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
        maxTeamCount: 2,
      };
    },
    methods: {
      ...mapActions([
        'setBattleTeams',
        'getAllTeams',
      ]),
      handleSelect(item) {
        item.selected = !item.selected;
        if (item.selected) {
          const index = this.teamSelect.findIndex(team => team.name === item.name);
          if (index < 0) {
            this.teamSelect.push(item);
          }
        } else {
          const index = this.teamSelect.findIndex(team => team.name === item.name);
          if (index >= 0) {
            this.teamSelect.splice(index, 1);
          }
        }
      },
      initNewGame() {
        this.setBattleTeams({ teams: this.teamSelect });
        this.$router.push('/teamMemberPage');
      },
    },
    computed: {
      ...mapGetters([
        'teamList',
      ]),
    },
    created() {
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
