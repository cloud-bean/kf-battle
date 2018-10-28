<template>
    <div class="container" >
      <div class="title-area">
        选择对战双方
        <div class="">
          <!-- <div @click="goCustom"  class="i-button" style="background-color:#19be6b;margin:0 30px;">
            配置战队信息 -->
          <!-- </div> -->
        </div>

      </div>

      <ButtonGroup style="margin: 10px;">
            <Button v-if="page > 1" @click="getTeams(--page)">上一页</Button>
            <Button type="primary">{{ page }}</Button>
            <Button v-if="page < maxPage" @click="getTeams(++page)">下一页</Button>
        </ButtonGroup>

      <div class="">
        <div @click="initNewGame" v-show="teamSelect.length == maxTeamCount" class="i-button">
          确认选择
          <Icon type="chevron-right"></Icon>
        </div>
      </div>

        <Row v-if="teamSelect.length == maxTeamCount" style="font-size: 48px; margin: 20px auto; width: 50%; border: 1px solid gray; padding: 20px;">
        <Col span="8">{{ teamSelect[0].name }}</Col>
        <Col span="8">
          <Icon type="arrow-swap" size="large" color="#5cadff" @click.native="switchSelected"></Icon>
        </Col>
        <Col span="8">{{ teamSelect[1].name }}</Col>
      </Row>

      <Row type="flex" justify="center" :gutter="16" class="main-area">
        <Col span="4" v-for="(item, index) in teamList"  :key="index" class="team-item">
          <team-item :teamData="item" :selected="!!item.selected"  :key="index" @click.native="handleSelect(item)"></team-item>
        </Col>
      </Row>

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
        teamSelect: [],
        maxTeamCount: 2,
        page: 1,
        limit: 18,
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
      switchSelected() {
        const tmpTeam = this.teamSelect[0];
        this.teamSelect[0] = this.teamSelect[1];
        this.teamSelect[1] = tmpTeam;
        this.$forceUpdate();
      },
      getTeams(page) {
        this.getAllTeams({ page, limit: this.limit });
      },
    },
    computed: {
      ...mapGetters([
        'teamList',
        'totalTeamCount',
      ]),
      maxPage() {
        return Math.ceil(this.totalTeamCount / this.limit);
      },
    },
    created() {
      this.getAllTeams({ page: this.page, limit: this.limit });
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

  .team-item {
    margin: .5rem 0;
  }

</style>
