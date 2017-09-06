<template lang="html">
  <div class="container">
    <div class="title-area">
      调整双方队员
    </div>
    <Row class="main-area">
      <Col span="10">
        <team-with-members :teamData="battleTeams[0]"></team-with-members>
      </Col>
      <Col span="4">
        <div class="vs">
          <Icon type="ios-game-controller-a-outline" size="150"></Icon>
          <!-- <Icon type="ios-game-controller-a" size="150"></Icon> -->
        </div>
         <!-- <img src="/static/newGame/vs-art.png" style="width: 50%"> -->
      </Col>
      <Col span="10">
        <team-with-members :teamData="battleTeams[1]"></team-with-members>
      </Col>
    </Row>
    <div class="button-area">
      <Button type="ghost" size="large" @click="startGame">下一步</Button>
    </div>
  </div>
</template>

<style scoped>
  .vs{
    padding-top: 8rem;
  }
</style>

<script>
  // import teamListData from '../mockData/teamList.json';
  import teamWithMembers from '../components/teamMemberPage/teamWithMemebers';
  import { mapState } from 'vuex';

  export default {
    name: 'teamMemberPage',
    data() {
      return {
        current: 0,
        status: 'process',
      };
    },
    computed: mapState({
      battleTeams: state => state.battle.battleTeams,
    }),
    methods: {
      // setTeamDone() {
      //   this.current = 1;
      // },
      // setCardsDone() {
      //   this.current = 2;
      // },
      // showRulesDone() {
      //   this.current = 3;
      // },
      startGame() {
        // alert('start the war');
        this.$router.push('/battle');
      },
    },
    components: {
      teamWithMembers,
    },
  };
</script>
