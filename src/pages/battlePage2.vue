<template>
  <div v-show="showAll">
    <Row class="battle-top" type="flex"  align="middle" :style="{ 'display': isControlPanelExpand ? '' : 'none' }">
      <Col span="8">
      </Col>

      <Col span="8">
        <Row type="flex" justify="space-around">
          <Col>
          <div class="control-button" @click="opRandomNumberModal = true">
            <Icon type="compass" size="80"></Icon>
            <div style="font-size:1.5rem;">
              命运之轮
            </div>
          </div>
          </Col>
          <Col>
            <div class="control-button" @click="toggleRandomEventModal" >

              <Icon type="paper-airplane" size="80"></Icon>
              <div style="font-size:1.5rem;">
                传令信使
              </div>
            </div>
          </Col>
          <Col>
            <div class="control-button" @click="lockScreen" >

              <Icon type="locked" size="80"></Icon>
              <div style="font-size:1.5rem;">
                锁定屏幕
              </div>
            </div>
          </Col>
          <Col>
            <div class="control-button" @click="toggleCardBoardModal" >

              <Icon type="map" size="80"></Icon>
              <div style="font-size:1.5rem;">
                卡牌之树
              </div>
            </div>
          </Col>
          <Col>
            <div class="control-button" @click="showWinnerModal()" >

              <Icon type="ios-checkmark" size="80"></Icon>
              <div style="font-size:1.5rem;">
                结束游戏
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span="8">
        <Row style="padding:1rem 5rem;color:#fff;font-size:2rem;">
          <Col span="12" style="background-color:green;padding:1rem 0;border-radius:20px 0 0 20px;" @click.native="changeScoreStatus(1)">
            加分
          </Col>
          <Col span="12" style="background-color:red;padding:1rem 0;border-radius:0 20px 20px 0;" @click.native="changeScoreStatus(-1)">
            减分
          </Col>
        </Row>
      </Col>


    </Row>

    <div class="spacer" :class="[scoreStatus==1?'green':'red']">
      <Row>
        <Col span="10">
          当前时间：{{now}}
        </Col>
        <Col span="4">
          <Button type="primary" shape="circle" size="large" icon="arrow-shrink" v-if="isControlPanelExpand" @click="setControlPanelVisable(false)"></Button>
          <Button type="primary" shape="circle" size="large" icon="arrow-expand" v-if="!isControlPanelExpand" @click="setControlPanelVisable(true)"></Button>
        </Col>
        <Col span="10">
          比赛已开始：{{duration}}
        </Col>
      </Row>
    </div>

    <div>
      <transition name="fade">

        <Row style="" v-if="showMembers">
          <transition-group name="flip-list" tag="ul">
          <div class="" style="color:#fff;margin-top:0.5rem;" v-for="(team,index) in teamsOrderByScore" :key="team._id">
            <team-bar :team="team" :rank="index+1" :members="groupMembers(team._id)" :addScore="addScore" :scoreStatus="scoreStatus" :key="team._id"></team-bar>
          </div>
          </transition-group>
          <div class="lock" v-if="lock">
            <div class="key-area">
              <div>输入解锁密码</div>
              <input type="password" name="" value="" class="key" v-model="inputKey" maxlength="4" autofocus>
            </div>
          </div>
          <!-- <Col span="9">
            <Row type="flex"  :gutter="16" style="margin-left:5px">
              <Col span="8"  v-for="member in groupMembers(0)" :key="member._id">
                <member-cell :member="member" :toggleOpModal="toggleOpModal"></member-cell>
              </Col>
            </Row>
          </Col>
          <Col span="6">
            <div class="control-panel">



            </div>

          </Col>
          <Col span="9">
            <Row type="flex" :gutter="16"  style="margin-right:5px">
              <Col span="8" v-for="member in groupMembers(1)" :key="member._id">
              <member-cell :member="member" :toggleOpModal="toggleOpModal" :key="member._id"></member-cell>
              </Col>
            </Row>
          </Col> -->
        </Row>
      </transition>
    </div>

    <Modal
      v-model="opRandomNumberModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <random-member-panel :members="members" :show="showPanel"
                           :playMusic="playMusic"
                           :addMemberPickedCount="addMemberPickedCountMethod">
      </random-member-panel>
    </Modal>

    <Modal
      v-model="showMemberBoard"
      width="85%"
      :closable="false"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <member-board v-if="selectedMember"
                       :member="selectedMember"
                       :addScoreToMember="addScore"
                       :playMusic="playMusic"
                       :removeCard="removeCard">
      </member-board>
    </Modal>

    <Modal
      v-model="winnerModal"
      width="80%"
      class-name="vertical-center-modal">
      <div  style="text-align: center;font-size:5rem; color:#5cadff;margin-top:20px;">
         比赛结束
      </div>
      <div class="panel" style="padding:2rem;text-align:center">
        <div class="winner-card">
          <div class="winner-name" style="font-size: 3rem;">
            大吉大利，今晚吃鸡
          </div>
        </div>
      </div>
      <div slot="footer">
      </div>
    </Modal>

    <Modal
      v-model="showRandomEventModal"
      width="80%"
      class-name="vertical-center-modal">
      <RandomEventPanel :randomEvents="getRandomEvents" :playMusic="playRandomEventMusic" v-if="showRandomEventModal"></RandomEventPanel>
      <p slot="footer"></p>
    </Modal>
    <Modal
      v-model="showCardBoard"
      width="85%"
      :closable="false"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <card-board :cards="cardPool"></card-board>
    </Modal>

    <audio ref="audioUseCard" :src="selectedTheme.useCardSound ? selectedTheme.useCardSound.URL : '/static/audio/Events/useCard.m4a'" preload="auto" style="display: none;"></audio>
    <audio ref="audioGetScore" :src="selectedTheme.getScoreSound ? selectedTheme.getScoreSound.URL : '/static/audio/Events/get.m4a'" preload="auto" style="display: none;"></audio>
    <audio ref="audioRandomEvent" :src="selectedTheme.randomEventSound ? selectedTheme.randomEventSound.URL : '/static/audio/Events/randomEvent.wav'" preload="auto" style="display: none;"></audio>
    <audio ref="audioRandomPeople" :src="selectedTheme.randomPeopleSound ? selectedTheme.randomPeopleSound.URL : '/static/audio/Events/randomPeople.wav'" preload="auto" style="display: none;"></audio>
    <audio ref="audioLostScore" :src="selectedTheme.lostScoreSound ? selectedTheme.lostScoreSound.URL : '/static/audio/Events/lost.m4a'" preload="auto" style="display: none;"></audio>
    <audio ref="audioLoadBattle" :src="selectedTheme.loadBattleSound ? selectedTheme.loadBattleSound.URL : '/static/audio/Events/loadBattle.m4a'" preload="auto" style="display: none;"></audio>

    <audio v-for="(rEvent, index) of getRandomEvents" :ref="rEvent._id" :src="rEvent.audioFile ? rEvent.audioFile.URL :'/static/audio/Events/randomEvent.wav'" preload="auto" style="display: none;"></audio>
  </div>
</template>
<style scoped lang="less">
  .battle-top {
    background-color: rgba(255,255,255,.8);
    padding-top: .3rem;
    /*background: #fff url('/static/img/battle_bg/battle_top_bg.jpg') top/cover; */
  }

  .flip-list-move {
    transition: transform 1s;
  }


  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    .ivu-modal {
      top: 0;
    }
  }

  .control-panel{
    background: rgba(255, 255, 255, 1);
    margin: 10px 50px;
    height: 35rem;
    padding: 20px;
    border-radius: 10px;
    border: 5px solid #ccc;
    // box-shadow: 0 0 0 5px #888;
  }
  .control-button{
    margin-top: 20px;

  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
  .spacer{
    padding: 5px;
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
  }
  .lock{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.7);
    background-size: cover;
    z-index: 999;
  }
  .key{
    background-color: rgba(0,0,0,.9);
    height: 5rem;
    width: 20rem;
    font-size: 3rem;
    color: #fff;
    text-align: center;
  }
  .key-area{
    position: relative;
    top:30rem;
    font-size: 2rem;
  }
  .red{
    background-color: rgba(255,0,0,.5);
  }
  .green{
    background-color: rgba(0,255,0,.5);
  }
  .mask {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .7);
    position: absolute;
    magin:auto;
    top:0;
    left: 5rem;
    right: 0;
    bottom: 0;
    color: #ccc;
    font-size: 2rem;

    // left:0;
    /*border: 1px solid #ccc;*/
    /*box-shadow: 0 0 5px #888;*/
  }
  .team-head{
    position: relative;
    text-align: center;
  }
</style>
<script>
  import GroupBar from '../components/battlePage2/groupBar';
  import TeamBar from '../components/battlePage2/TeamBar';
  import ScoreButton from '../components/battlePage2/scoreButton';
  import ScoreVS from '../components/battlePage2/scoreVS';
  import MemberCell from '../components/battlePage2/memberCell';
  import MemberBoard from '../components/battlePage2/memberBoard';
  import CardBoard from '../components/battlePage2/cardBoard';

  import RandomMemberPanel from '../components/battlePage2/randomMemberPanel';
  import RandomEventPanel from '../components/battlePage2/randomEventPanel';
  const moment = require('moment');
  moment.locale('zh-cn');
  import { mapGetters, mapActions } from 'vuex';
//  import Vue from 'vue';
  export default {
    name: 'BattlePage',
    data() {
      return {
        scoreData: {
          left: 0,
          right: 0,
        },
        key: '1234',
        duration: '',
        durationTime: new Date(0, 0),
        now: '',
        startTime: new Date(),
        coldTime: '600',
        selectedIndex: 0,
        randomTimer: null,
        selectedMember: null,
        showMembers: true,
        showMemberBoard: false,
        opRandomNumberModal: false,
        showPanel: false,
        showRandomEventModal: false,
        lock: false,
        inputKey: '',
        showAll: false,
        isControlPanelExpand: true,
        randomEventTimeSpan: 10 * 60 * 1000, // 10 minutes a round
        randomEventTimeSplash: 0,
        scoreStatus: 1,
        showCardBoard: false,
        winnerModal: false,
      };
    },
    computed: {
      ...mapGetters('battle', [
        'members',
        'groups',
        'randomEvents',
      ]),
      ...mapGetters('timeline', [
        'feeds',
      ]),
      ...mapGetters([
        'selectedTheme',
        'gameMode',
      ]),
      ...mapGetters('card', [
        'cardPool',
      ]),
      getRandomEvents() {
        let randomEvents = [];
        if (this.selectedTheme
          && this.selectedTheme.randomEvents
          && this.selectedTheme.randomEvents.length > 0) {
          randomEvents = this.selectedTheme.randomEvents;
        } else {
          randomEvents = this.randomEvents;
        }

        return randomEvents;
      },
      randomEventCirclePercent() {
        return this.randomEventTimeSplash * 100 / this.randomEventTimeSpan;
      },
      teamsOrderByScore() {
        return this.groups.sort((a, b) => {
          if (a.get === undefined) {
            a.get = 0;
          }

          if (b.get === undefined) {
            b.get = 0;
          }

          return b.get - a.get;
        });
      },
    },
    watch: {
      inputKey() {
        if (this.inputKey === this.key) {
          this.lock = false;
          this.inputKey = '';
        }
      },
    },
    methods: {
      ...mapActions('battle', [
        'removeCardFromMember',
        'addScoreToMember',
        'setFinalScore',
        'fetchRandomEvents',
        'postBattleResult',
        'addMemberPickedCount',
      ]),
      ...mapActions('card', [
        'fetchCardPool',
      ]),
      ...mapActions('timeline', [
        'addFeed',
      ]),

      setControlPanelVisable(state) {
        this.isControlPanelExpand = !!state;
      },
      groupMembers(teamId) {
        return this.members.filter((member) => member.groupId === teamId)
          .sort((a, b) => b.get - a.get);
      },
      changeScoreStatus(status) {
        this.scoreStatus = status;
      },
      showWinnerModal() {
        this.winnerModal = true;
        const finalScore = this.getScoreData();
        this.setFinalScore(finalScore);

        const groupIds = [];
        const memberIds = [];
        this.groups.forEach((group) => {
          if (group._id) {
            groupIds.push(group._id);
          }
        });
        this.members.forEach((member) => {
          if (member._id) {
            memberIds.push(member._id);
          }
        });

        const battleResult = {
          feeds: this.feeds,
          groups: this.groups,
          groupIds,
          memberIds,
          finalScore,
          members: this.members,
          prizes: this.prizes || [],
          started: this.startTime,
          name: `battle @${this.startTime.toLocaleString()}`,
          battleTheme: this.selectedTheme._id,
          battleMode: this.gameMode,
        };

        console.log('battleResult', battleResult);

        this.postBattleResult(battleResult);
      },
      getScoreData() {
        // score {}
        // key is groupId
        // value is the sum of each memeber's score
        const scoreData = {};
        this.groups.forEach((group) => {
          scoreData[group._id] = 0;
        });
        this.members.forEach(item => {
          if (scoreData[item.groupId] === undefined) {
            scoreData[item.groupId] = 0;
          }
          scoreData[item.groupId] += item.get + item.lost;
        });

        return scoreData;
      },
      addScore(payload) {
        this.addScoreToMember(payload);
        this.groups.sort((a, b) => a.get - b.get);
      },
      removeCard(payload) {
        this.showMembers = false;
        this.removeCardFromMember(payload);
        const groupName = payload.member.groupIndex === 0 ? this.groupOne.name : this.groupTwo.name;
        this.addFeed({
          feed: {
            groupName,
            people: payload.member.displayName,
            created: new Date(),
            color: 'purple',
            type: '使用卡牌',
            card: payload.card,
            description: `使用了 ${payload.card.name}`,
          },
        });

        setTimeout(() => {
          this.showMembers = true;
          return 0;
        }, 100);
      },
      addMemberPickedCountMethod(memberId) {
        this.addMemberPickedCount({ memberId });
      },
      getTime() {
        this.now = moment().format('HH:mm:ss');
        this.randomEventTimeSplash += 1000;
      },
      goToWinnerPage2() {
        this.$Modal.confirm({
          title: '~打扫战场，上报天庭~',
          content: '<p>是否将战况报告云上？</p>',
          loading: true,
          onOk: () => {
            setTimeout(() => {
              const finalScore = this.getScoreData();
              this.setFinalScore(finalScore);
              const groupIds = [this.groups[0]._id, this.groups[1]._id];
              const memberIds = [];
              this.members.forEach((member) => {
                if (member._id) {
                  memberIds.push(member._id);
                }
              });

              const battleResult = {
                feeds: this.feeds,
                groups: this.groups,
                groupIds,
                memberIds,
                finalScore,
                members: this.members,
                prizes: this.prizes || [],
                started: this.startTime,
                name: `battle @${this.startTime.toLocaleString()}`,
              };

              this.postBattleResult(battleResult);


              this.$Modal.remove();
              this.$Message.info('清扫完毕，上报完毕');
              // this.$router.push('/winPage');
            }, 2000);
          },
          onCancel: () => {
            this.$Message.info('清扫完毕');
            // this.$router.push('/winPage');
          },
        });
      },
      toggleRandomEventModal() {
        this.showRandomEventModal = !this.showRandomEventModal;
        this.randomEventTimeSplash = 0;
      },
      toggleCardBoardModal() {
        this.showCardBoard = !this.showCardBoard;
      },
      playMusic(index) {
        switch (index) {
          case 0:
            this.$refs.audioUseCard.play();
            break;
          case 1:
            this.$refs.audioGetScore.play();
            break;
          case 2:
            this.$refs.audioLostScore.play();
            break;
          case 3:
            this.$refs.audioLoadBattle.play();
            break;
          case 4:
            this.$refs.audioRandomEvent.play();
            break;
          case 5:
            this.$refs.audioRandomPeople.play();
            break;
          default:
            this.$refs.audioUseCard.play();
            break;
        }
      },
      playRandomEventMusic(id) {
        const audioRef = this.$refs[id];
        if (audioRef && audioRef.length > 0) {
          audioRef[0].play();
        } else {
          this.playMusic(4);
        }
      },
      toggleOpModal(member) {
        this.showMemberBoard = true;
        this.selectedMember = member;
      },
      lockScreen() {
        this.lock = true;
      },
    },
    components: {
      MemberCell,
      'group-bar': GroupBar,
      'score-vs': ScoreVS,
      'member-board': MemberBoard,
      RandomMemberPanel,
      RandomEventPanel,
      TeamBar,
      ScoreButton,
      CardBoard,
    },
    mounted() {
      const that = this;
      this.playMusic(3);
      setTimeout(() => {
        that.showAll = true;
      }, 2500);
      let timer = setInterval(() => {
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= 10;
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition);
        } else {
          window.scrollTo(0, 0);
          clearInterval(timer);
          timer = null;
        }
      }, 1);
      this.fetchCardPool();
      setInterval(() => {
        this.getTime();
      }, 1000);
      setInterval(() => {
        this.durationTime = moment(this.durationTime).add(1, 's');
        this.duration = this.durationTime.format('HH:mm:ss');
      }, 1000);

      // setInterval(() => {
      //   this.toggleRandomEventModal();
      // }, this.randomEventTimeSpan);
    },
    created() {
      this.fetchRandomEvents();
    },
  };
</script>
