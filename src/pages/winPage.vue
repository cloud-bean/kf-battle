<template>
  <div style="overflow-y: scroll;">
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

    <Row style="background: rgba(255,255,255,0.9);">
      <Col span="12" style="padding: 20px;">
        <member-table :members="getMembers(0)" :groupScore="finalScore.left" :honorName="finalScore.left >= finalScore.right ? '王者' : '勇士'"></member-table>
      </Col>
      <Col span="12" style="padding: 20px;">
        <member-table :members="getMembers(1)" :groupScore="finalScore.right" :honorName="finalScore.left < finalScore.right ? '王者' : '勇士'"></member-table>
      </Col>
    </Row>

    <Row type="flex" justify="center" align="middle" style="margin-top:1rem;">
      <Col span="6">
      <ButtonGroup size="large">
        <Button style="padding: 10px; font-size: 1em;" @click="showWinnerTeamModal = true">获胜队伍</Button>
        <Button style="padding: 10px; font-size: 1em;" @click="showMVP1Modal = true">王者</Button>
        <Button style="padding: 10px; font-size: 1em;" @click="showMVP2Modal = true">勇士</Button>
      </ButtonGroup>
      </Col>
      <Col span="4">
          <div class="i-button" @click="showTimeLineModal=true">
            回看比赛
          </div>
      </Col>
      <Col span="4">
        <div class="i-button" @click="goInit" style="background-color:#ed3f14;display:in-block">
          重新开战
        </div>
      </Col>
    </Row>
    <div class="" >


    </div>

    <Modal
      v-model="showWinnerTeamModal"
      width="80%"
      class-name="vertical-center-modal">
      <div  style="text-align: center;font-size:5rem; color:#5cadff;margin-top:20px;">
         获胜队伍
      </div>
      <div class="panel" style="padding:2rem;text-align:center">
          <div class="winner-card">
            <img :src="winnerTeam.logo.URL" alt="" style="width:200px;">
            <div class="winner-name" style="font-size: 3rem;">
              {{winnerTeam.name}}
            </div>
          </div>
      </div>
      <div slot="footer">
      </div>
    </Modal>

    <Modal
      v-model="showMVP1Modal"
      width="80%"
      class-name="vertical-center-modal">
      <div  style="text-align: center;font-size:5rem; color:#5cadff;margin-top:20px;">
         王者
      </div>
      <div class="panel" style="padding:2rem;text-align:center">
        <div class="winner-card">
          <img :src="mvp1.profileImageURL" alt="" style="width:200px;">
          <div class="winner-name" style="font-size: 3rem;">
            {{mvp1.displayName}}
          </div>
        </div>
      </div>
      <div slot="footer">
      </div>
    </Modal>

    <Modal
      v-model="showMVP2Modal"
      width="80%"
      class-name="vertical-center-modal">
      <div  style="text-align: center;font-size:5rem; color:#5cadff;margin-top:20px;">
         勇士
      </div>
      <div class="panel" style="padding:.5rem;text-align:center;">
        <div class="winner-card">
          <img :src="mvp2.profileImageURL" alt="" style="width:200px;">
          <div class="winner-name" style="font-size: 3rem;">
            {{mvp2.displayName}}
          </div>
        </div>
      </div>
      <div slot="footer">
      </div>
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

    <audio ref="audioTeamWin" src="/static/audio/Events/wonTeam_4s.m4a" preload="auto" style="display: none;"></audio>
    <audio ref="audioMVP1" src="/static/audio/Events/mvp1.m4a" preload="auto" style="display: none;"></audio>
    <audio ref="audioMVP2" src="/static/audio/Events/mvp2.m4a" preload="auto" style="display: none;"></audio>

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
        showWinnerTeamModal: false,
        showTimeLineModal: false,
        showMVP1Modal: false,
        showMVP2Modal: false,
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
      mvp1() {
        return this.getMembers(this.winnerIndex).filter(item => item.isMVP === true)[0];
      },
      mvp2() {
        return this.getMembers(1 - this.winnerIndex).filter(item => item.isMVP === true)[0];
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
      goInit() {
        this.$router.replace('/');
      },
      playMusic(index) {
        switch (index) {
          case 0:
            this.$refs.audioTeamWin.play();
            break;
          case 1:
            this.$refs.audioMVP1.play();
            break;
          case 2:
            this.$refs.audioMVP2.play();
            break;
          default:
            this.$refs.audioTeamWin.play();
            break;
        }
      },
    },
    components: {
      'score-vs': ScoreVS,
      'member-table': MemberTable,
      'group-bar': GroupBar,
      'time-line': TimeLine,
    },
    mounted() {
      setTimeout(() => {
        this.showWinnerTeamModal = true;
        this.playMusic(0);
        setTimeout(() => {
          this.showWinnerTeamModal = false;
          this.showMVP1Modal = true;
          this.playMusic(1);

          setTimeout(() => {
            this.showMVP1Modal = false;
            this.showMVP2Modal = true;
            this.playMusic(2);

            setTimeout(() => {
              this.showMVP2Modal = false;
            }, 3000);
          }, 4000);
        }, 5000);
      }, 1000);
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
</style>
