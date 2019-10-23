<template>
  <div class="container">
    <div class="title-area">
      酒馆英雄
    </div>

    <Alert type="info" show-icon style="width:30%;margin:10px auto; size: 2rem;"
      v-bind:hidden="teamSelect && teamSelect.length > 1">
      <span slot="desc" style="font-size:16px;">
        请选择参赛队伍
      </span>
    </Alert>

    <div class="">
      <!-- <Button type="warning" style="margin: 10px 10px; font-size: 1em;" shape="circle" v-for="team in teamSelect" :key="team._id">{{ team.name }}</Button> -->

      <div @click="goToMessBattle" class="i-button"
        style="margin-top: 20px; width: 300px; background-color: mediumseagreen;"
        v-show="teamSelect && teamSelect.length > 1">
        进入战场
        <!-- <Icon type="chevron-right"></Icon> -->
      </div>

      <ButtonGroup>
        <Button v-if="page > 1" @click="getTeams(--page)">上一页</Button>
        <Button type="primary">{{ page }}</Button>
        <Button v-if="page < maxPage" @click="getTeams(++page)">下一页</Button>
      </ButtonGroup>
    </div>

    <Row type="flex" justify="center" :gutter="16" class="main-area">
      <Col span="4" v-for="item in teamList" :key="item._id" class="team-item">
      <team-item :teamData="item" :selected="isSelected(item) > -1" @click.native="handleSelect(item)"></team-item>
      </Col>
    </Row>

  </div>


  <!-- </div> -->

</template>
<script>
  import TeamItem from '../components/chooseTeamPage/teamItem';
  import {
    mapGetters,
    mapActions,
  } from 'vuex';

  export default {
    data() {
      return {
        teamSelect: [],
        onlineMemebers: [],
        page: 1,
        limit: 18,
      };
    },
    methods: {
      ...mapActions('team', [
        'setBattleTeams',
        'getAllTeams',
        'setGroups',
      ]),
      ...mapActions('battle', [
        'setGroups',
        'setMembers',
      ]),
      handleSelect(item) {
        console.log('handleSelect team', item, item.selected);
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
      isSelected(item) {
        return this.teamSelect.findIndex(team => team.name === item.name);
      },
      goToMessBattle() { // 大乱斗
        this.setBattleTeams({
          teams: this.teamSelect,
        });
        this.setGroups({
          groups: this.teamSelect,
        });
        this.teamSelect.forEach((team) => {
          if (team.students && team.students.length > 0) {
            team.students.forEach((member) => {
              member.groupId = team._id;
              this.onlineMemebers.push(member);
            });
          }
        });
        this.setMembers(this.onlineMemebers);
        this.$router.push('/battle2');
      },
      getTeams(page) {
        this.getAllTeams({
          page: page || this.page,
          limit: this.limit,
        });
      },
    },
    computed: {
      ...mapGetters('team', [
        'teamList',
        'totalTeamCount',
      ]),
      maxPage() {
        return Math.ceil(this.totalTeamCount / this.limit);
      },
    },
    created() {
      this.getAllTeams({
        page: this.page,
        limit: this.limit,
      });
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
