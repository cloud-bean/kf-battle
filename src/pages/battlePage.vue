<template>
  <div>
    <Row class="battle-top" type="flex"  align="middle">
      <Col span="9">
      <group-bar position="left" :data="groupOne"></group-bar>
      </Col>
      <Col span="6">
      <score-vs :scoreData="getScoreData()"></score-vs>
      </Col>
      <Col span="9">
      <group-bar position="right" :data="groupTwo"></group-bar>
      </Col>
    </Row>
    <div class="spacer">
      <Row>
        <Col span="12">
          当前时间：{{now}}
        </Col>
        <Col span="12">
          比赛已开始：{{duration}}
        </Col>
      </Row>
      <!-- <hr style="border: 2px solid whitesmoke"> -->
    </div>

    <transition name="fade">
      <Row style="margin-top: 10px;" v-if="showMembers">
      <Col span="9">
        <Row type="flex"  :gutter="16" style="margin-left:5px">
          <Col span="8"  v-for="member in groupMembers(0)" :key="member._id">
            <member-cell :member="member" :toggleOpModal="toggleOpModal"></member-cell>
          </Col>
        </Row>
      </Col>
      <Col span="6">
        <div class="control-panel">
          <div class="control-button" @click="toggleRandomEventModal" >
            <img src="static/img/battle_btn/randomevents.jpg" alt="" style="width:10rem;">
            <div style="font-size:2rem;">
              <!-- <Badge count="1"> -->
                传令信使
              <!-- </Badge> -->
            </div>
          </div>
          <!-- <div class="control-button" v-if="coldTime>0">
            <div class="team-head">
              <div class="mask">
                <div style="margin-top:1rem;">
                  {{coldTime}}

                </div>
              </div>
              <img src="static/img/battle_btn/randomevents.jpg" alt="" style="width:10rem;">
            </div>
            <div style="font-size:2rem;">
                传令信使
            </div>
          </div> -->
          <div class="control-button" @click="opRandomNumberModal = true">
            <img src="static/img/battle_btn/wheelofdestiny.jpg" alt="" style="width:10rem;">
            <div style="font-size:2rem;">
              命运之轮
            </div>
          </div>

        </div>
      <!-- <ButtonGroup size="large"> -->
        <!-- <Button icon="ios-stopwatch-outline" @click="opRandomNumberModal = true">点 名</Button>
        <Button icon="wand" @click="toggleRandomEventModal">随机事件</Button> -->
        <div class="i-button" @click="goToWinnerPage" style="background-color:#5cadff">结束游戏</div>
        <div class="i-button" @click="lockScreen" style="background-color:#888; margin-top:1rem;">锁定屏幕</div>
        <div class="lock" v-if="lock">
          <div class="key-area">
          <div>输入解锁密码</div>
            <input type="password" name="" value="" class="key" v-model="inputKey" maxlength="4" autofocus>
          </div>
        </div>
      <!-- </ButtonGroup> -->

      <Modal
        v-model="opRandomNumberModal"
        width="80%"
        class-name="vertical-center-modal">
        <p slot="footer"></p>
        <random-member-panel :members="members" :show="showPanel"></random-member-panel>
      </Modal>

      <!-- <timeline :feeds="feeds" :startTime="startTime"></timeline> -->
      </Col>
      <Col span="9">
        <Row type="flex" :gutter="16"  style="margin-right:5px">
          <Col span="8" v-for="member in groupMembers(1)" :key="member._id">
            <member-cell :member="member" :toggleOpModal="toggleOpModal" :key="member._id"></member-cell>
          </Col>
        </Row>
      </Col>
    </Row>
    </transition>

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
                       :removeCard="removeCard"></member-board>
    </Modal>

    <Modal
      v-model="showRandomEventModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="header" style="text-align: center;">
        随机事件
      </p>
      <div class="panel">
          <Row type="flex" >
            <Col span="4" v-for="event,index in randomEvents" :key="event._id" class="random-box" :class="selectedIndex == index ? 'selected': ''">
              <img v-if="event.file" style=" height: 8rem;" :src="event.file.URL">
              <p style="font-size: 1.5rem; font-weight: 600;">{{ event.name }}</p>
              <p style="font-size: 1rem;">{{ event.description }}</p>
            </Col>
          </Row>
      </div>
      <div slot="footer">
      </div>
    </Modal>

    <audio ref="audioUseCard" src="/static/audio/Events/useCard.m4a" preload="auto" style="display: none;"></audio>
    <audio ref="audioGetScore" src="/static/audio/Events/get.m4a" preload="auto" style="display: none;"></audio>
    <audio ref="audioLostScore" src="/static/audio/Events/lost.m4a" preload="auto" style="display: none;"></audio>

  </div>
</template>
<style scoped lang="less">
  .battle-top {
    background-color: #fff;
    padding-top: .3rem;
    /*background: #fff url('/static/img/battle_bg/battle_top_bg.jpg') top/cover; */
  }

  .panel{
    padding: .5rem;
    // display: inline-block;
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
  .selected {
    border: 5px solid red !important;
  }

  .random-box {
    text-align: center;
    background-color: aliceblue;
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #888;
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
  import GroupBar from '../components/battlePage/groupBar';
  import ScoreVS from '../components/battlePage/scoreVS';
  import MemberCell from '../components/battlePage/memberCell';
  import MemberBoard from '../components/battlePage/memberBoard';
  import RandomMemberPanel from '../components/battlePage/randomMemberPanel.vue';
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
      };
    },
    computed: {
      ...mapGetters('battle', [
        'members',
        'groups',
        'groupOne',
        'groupTwo',
        'randomEvents',
      ]),
      ...mapGetters('timeline', [
        'feeds',
      ]),
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
      ]),
      ...mapActions('timeline', [
        'addFeed',
      ]),
      groupMembers(index) {
        return this.members.filter((member) => member.groupIndex === index);
      },
      getScoreData() {
        let left = 0;
        let right = 0;
        this.members.forEach(item => {
          if (item.groupIndex === 0) {
            left += item.get + item.lost;
          } else {
            right += item.get + item.lost;
          }
          return 0;
        });
        return {
          left,
          right,
        };
      },
      addScore(payload) {
        this.showMembers = false;
        this.addScoreToMember(payload);
        const groupName = payload.member.groupIndex === 0 ? this.groupOne.name : this.groupTwo.name;
        this.addFeed({
          feed: {
            groupName,
            people: payload.member.displayName,
            created: new Date(),
            color: payload.score > 0 ? 'green' : 'red',
            type: payload.type,
            description: `${payload.desc}`,
          },
        });

        setTimeout(() => {
          this.showMembers = true;
          return 0;
        }, 100);
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
      getTime() {
        this.now = moment().format('HH:mm:ss');
      },
      goToWinnerPage() {
        const finalScore = this.getScoreData();
        this.setFinalScore(finalScore);
        this.postBattleResult({
          feeds: this.feeds,
          groups: this.groups,
          finalScore,
          members: this.members,
          prizes: this.prizes || [],
          started: this.startTime,
          name: `battle @${this.startTime.toLocaleString()}`,
        });
        this.$router.push('/winPage');
      },
      toggleRandomEventModal() {
        this.showRandomEventModal = !this.showRandomEventModal;

        if (this.randomTimer) {
          clearInterval(this.randomTimer);
          this.randomTimer = null;
        }

        if (this.showRandomEventModal) {
          const finalSelectedIndex = parseInt(Math.random() * this.randomEvents.length, 10);
          this.randomTimer = setInterval(() => {
            this.selectedIndex = (this.selectedIndex + 1) % this.randomEvents.length;
          }, 100);
          setTimeout(() => {
            this.selectedIndex = finalSelectedIndex;
            if (this.randomTimer) {
              clearInterval(this.randomTimer);
            }
          }, 3 * 1000);
        }
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
          default:
            this.$refs.audioUseCard.play();
            break;
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
    },
    mounted() {
      let timer;

      timer = setInterval(() => {
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
      setInterval(() => {
        this.getTime();
      }, 1000);
      setInterval(() => {
        this.durationTime = moment(this.durationTime).add(1, 's');
        this.duration = this.durationTime.format('HH:mm:ss');
      }, 1000);
    },
    created() {
      this.fetchRandomEvents();
    },
  };
</script>
