<template>
  <div>
    <Row class="battle-top">
      <Col span="9" class="groupName">
        <group-bar position="left" :data="groups[0]" :win="finalScore.left >= finalScore.right" ></group-bar>
        <!-- <span>{{groups[0].name}}</span> -->
        <!-- <Tag color="red" v-if="finalScore.left >= finalScore.right">Winner</Tag> -->
      </Col>

      <Col span="6">
        <score-vs :scoreData="finalScore"></score-vs>
      </Col>

      <Col span="9" class="groupName">
        <group-bar position="right" :data="groups[1]" :win="finalScore.left  < finalScore.right"></group-bar>
         <!-- <span>{{groups[1].name}}</span> -->
        <!-- <Tag color="red" v-if="finalScore.left < finalScore.right">Winner</Tag> -->
      </Col>
    </Row>

    <!-- <Row class="battle-top" type="flex" justify="center" align="middle">
      <Col span="9">
      <group-bar position="left" :data="group[0]"></group-bar>
      <Tag color="red" v-if="finalScore.left >= finalScore.right">Winner</Tag>

      </Col>
      <Col span="6">
      <score-vs :scoreData="getScoreData()"></score-vs>
      </Col>
      <Col span="9">
      <group-bar position="right" :data="group[1]"></group-bar>
      <Tag color="red" v-if="finalScore.left >= finalScore.right">Winner</Tag>

      </Col>
    </Row>
    <div class="spacer">
      <hr style="border: 2px solid whitesmoke">
    </div> -->
    <hr>
    <Row class="button-area">
      <Button size="large" type="primary" @click="showTimeLineModal=true">
        回看比赛进程
      </Button>
    </Row>
    <Row style="background: rgba(255,255,255,0.9); height:100%;">
      <Col span="12" style="padding: 20px;">
        <member-table :members="getMembers(0)" :groupScore="finalScore.left"></member-table>
      </Col>
      <Col span="12" style="padding: 20px;">
        <member-table :members="getMembers(1)" :groupScore="finalScore.right"></member-table>
      </Col>
    </Row>
    <Modal
      v-model="showWinnerTeamModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="header" style="text-align: center;font-size:1.2rem;">
        获胜队伍
      </p>
      <div class="panel" style="padding:2rem;text-align:center">
        <Row>
          <Col span="12">
            <div class="winner-card">
              <img :src="mvp.profileImageURL" alt="" style="width:300px;">
              <div class="winner-name" style="">
                {{mvp.displayName}}
              </div>
            </div>
          </Col>
          <Col span="12">
            <div class="winner-card">
              <img :src="winnerTeam.logo.URL" alt="" style="width:300px;">
              <div class="winner-name" style="">
                {{winnerTeam.name}}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <!-- <div slot="footer">
      </div> -->
    </Modal>
    <Modal
      v-model="showTimeLineModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="header" style="text-align: center;">
        事件回看
      </p>
      <div class="panel">
        <time-line :feeds="feeds" :startTime="startTime"></time-line>
      </div>
      <div slot="footer">
      </div>
    </Modal>
  </div>

</template>

<script>
  import ScoreVS from '../components/battlePage/scoreVS';
  import MemberTable from '../components/winPage/memberTable';
  import GroupBar from '../components/battlePage/groupBar';
  import TimeLine from '../components/winPage/timeline';
  import { mapGetters } from 'vuex';

  // import { createNamespacedHelpers } from 'vuex';
  // const { mapGetters } = createNamespacedHelpers('battle');
  export default {
    data() {
      return {
        winner: 'who is the winner',
        showWinnerTeamModal: true,
        showTimeLineModal: false,
        startTime: new Date(),

      };
    },
    computed: {
      ...mapGetters('battle', [
        'members',
        'groups',
        'finalScore',
      ]),
      ...mapGetters('timeline', [
        'feeds',
      ]),
      winnerTeam() {
        return (this.finalScore.left >= this.finalScore.right ? this.groups[0] : this.groups[1]);
      },
      winnerIndex() {
        return (this.finalScore.left >= this.finalScore.right ? 0 : 1);
      },
      mvp() {
        const mvp = this.members.filter(item => item.groupIndex === this.winnerIndex);
        console.log(mvp);
        let mvpIndex = 0;
        mvp.forEach((item, ord) => {
          item.isMVP = false;
          const maxScore = mvp[mvpIndex].get + mvp[mvpIndex].lost;
          if (item.get + item.lost > maxScore) {
            mvpIndex = ord;
          }
        });
        return mvp[mvpIndex];
      },
    },
    methods: {
      getMembers(index) {
        const filterMembers = this.members.filter(item => item.groupIndex === index);
        let mvpIndex = 0;
        filterMembers.forEach((item, ord) => {
          item.isMVP = false;
          const maxScore = filterMembers[mvpIndex].get + filterMembers[mvpIndex].lost;
          if (item.get + item.lost > maxScore) {
            mvpIndex = ord;
          }
        });

        filterMembers[mvpIndex].isMVP = true;
        return filterMembers;
      },
    },
    components: {
      'score-vs': ScoreVS,
      'member-table': MemberTable,
      'group-bar': GroupBar,
      'time-line': TimeLine,
    },
  };
</script>

<style scoped>
  /*.score-card {
    color: rgb(255, 141, 7);
    font-weight: 800;
    font-size: 3.6em;
    padding: 5px;
    text-shadow: 2px 2px 8px #8a8a8a;
  }*/
  .groupName {
    padding-top: 20px;
    font-size: 2.4em;
  }
  .battle-top {
    background-color: #fff;
    padding-top: .3rem;
    /*background: #fff url('/static/img/battle_bg/battle_top_bg.jpg') top/cover; */
  }
  .winner-card{
    padding: 2rem;
    /*box-shadow: 0 0 10px #f00;*/
    /*width: 40%;*/
    margin: 0 auto;
  }
  .winner-name{
    /*text-shadow:0 0 10px #fccc4d,
                -0 -0 10px #fccc4d;*/
    font-size: 2rem;
    margin:.5rem;
    color: #888;
  }
  .button-area{
    /*background: rgba(0,0,0,0.9);*/
  }
</style>
