<template>
  <!-- <div class=""> -->

  <div class="container">
    <div class="title-area">
      选择对战双方 <Icon type="ios-gear"  @click.native="goCustom" style="color:#19be6b;"></Icon>
      <div class="">
        <!-- <div @click="goCustom"  class="i-button" style="background-color:#19be6b;margin:0 30px;">
          配置战队信息 -->

        <!-- </div> -->
      </div>
    </div>

    <Row :gutter="16" class="main-area">
      <Col span="4" v-for="(item, index) in teamList"  :key="index" class="team-item">
      <team-item :teamData="item" :selected="!!item.selected"  :key="index" @click.native="handleSelect(item)"></team-item>
      </Col>
    </Row>
    <Alert type="info" show-icon v-show="teamSelect.length < maxTeamCount" style="width:30%;margin:0 auto">
        <span slot="desc" style="font-size:16px;">
            请选择两支战队
        </span>
    </Alert>
    <div class="button-area">

      <div @click="initNewGame" v-show="teamSelect.length == maxTeamCount" class="i-button">
        确认选择
        <Icon type="chevron-right"></Icon>
      </div>
    </div>
  </div>

<!-- </div> -->

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
      goCustom() {
        this.$router.push('/custom');
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
