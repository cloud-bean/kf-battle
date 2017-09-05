<template lang="html">
  <div class="container">
    <div class="title">
      调整双方队员
    </div>
    <Row class="main-content">
      <Col span="10">
        <team-with-members :teamData="groupOneData"></team-with-members>
      </Col>
      <Col span="4">
        <div class="vs">
          <Icon type="ios-game-controller-a-outline" size="150"></Icon>
        </div>
         <!-- <img src="/static/newGame/vs-art.png" style="width: 50%"> -->
      </Col>
      <Col span="10">
        <team-with-members :teamData="groupTwoData"></team-with-members>
      </Col>
    </Row>
    <div class="button-area">
      <Button type="ghost" size="large" @click="goNewGame">下一步</Button>
    </div>
  </div>
</template>

<style scoped>
  .title {
    font-size: 1.5rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.3rem;
  }
  .main-content{
    padding: 1rem 4rem;
  }
  .vs{
    padding-top: 8rem;
  }
</style>

<script>
  import router from '../router';
  import teamListData from '../mockData/teamList.json';
  import teamWithMembers from '../components/newGamePage/teamWithMemebers';

  export default {
    name: 'newGamePage',
    data() {
      return {
        current: 0,
        status: 'process',
        groupOneData: teamListData.team[0],
        groupTwoData: teamListData.team[1],
      };
    },
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
        router.replace('/battle');
      },
    },
    components: {
      teamWithMembers,
    },
  };
</script>
