<template>
    <div class="container" >
      <div class="title-area">
        酒馆英雄
      </div>

      <Alert type="info" show-icon style="width:30%;margin:10px auto; size: 2rem;">
        <span slot="desc" style="font-size:16px;">
            请选择参赛队伍
        </span>
      </Alert>

      <div class="">
        <Button type="warning" style="margin: 10px 10px; font-size: 1em;" shape="circle" v-for="team in teamSelect" :key="team._id">{{ team.name }}</Button>

        <div @click="goToMessBattle" class="i-button" style="margin-top: 20px; width: 300px; background-color: mediumseagreen;">
          Tavern Brawl - 乱斗
          <Icon type="chevron-right"></Icon>
        </div>
      </div>

      <Row :gutter="16" class="main-area">
        <Col span="4" v-for="item in teamList"  :key="item._id" class="team-item">
          <team-item :teamData="item" :selected="isSelected(item) > -1" @click.native="handleSelect(item)"></team-item>
        </Col>
      </Row>

  </div>


<!-- </div> -->

</template>
<script>
  import TeamItem from '../components/chooseTeamPage/teamItem';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        teamCount: 0,
        teamSelect: [],
        onlineMemebers: [],
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
        this.setBattleTeams({ teams: this.teamSelect });
        this.setGroups({ groups: this.teamSelect });
        this.teamSelect.forEach((team, groupIndex) => {
          console.log(team.name, groupIndex);
          if (team.students && team.students.length > 0) {
            team.students.forEach((member) => {
              member.groupId = team._id;
              member.groupIndex = groupIndex;
              this.onlineMemebers.push(member);
            });
          }
        });
        this.setMembers(this.onlineMemebers);
        this.$router.push('/battle2');
      },
    },
    computed: {
      ...mapGetters('team', [
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
