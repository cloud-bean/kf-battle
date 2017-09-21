<template>
  <div>
    <Row class="battle-top" type="flex" justify="center" align="middle">
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
      <hr style="border: 2px solid whitesmoke">
    </div>

    <transition name="fade">
      <Row style="margin-top: 10px;" v-if="showMembers">
      <Col span="8">
        <member-cell :member="member" v-for="member in members"
                   :toggleOpModal="toggleOpModal"
                     ref="groupOne"
                   v-if="member.groupIndex == 0"></member-cell>
      </Col>
      <Col span="8">
      <ButtonGroup size="large">
        <Button icon="ios-stopwatch-outline" @click="opRandomNumberModal = true">点 名</Button>
        <Button icon="wand" @click="toggleRandomEventModal">随机事件</Button>
        <Button icon="ios-close-outline" @click="gotoWinnerPage">结束游戏</Button>
      </ButtonGroup>

      <Modal
        title="随机选人"
        v-model="opRandomNumberModal"
        width="80%"
        class-name="vertical-center-modal">
        <p slot="footer"></p>
        <random-member-panel :members="members" :show="showPanel"></random-member-panel>
      </Modal>

      <timeline :feeds="feeds" :startTime="startTime"></timeline>
      </Col>
      <Col span="8">
        <member-cell :member="member" v-for="member in members"
                     :toggleOpModal="toggleOpModal"
                     v-if="member.groupIndex == 1"></member-cell>
      </Col>
    </Row>
    </transition>

    <Modal
      title="计分板"
      v-model="opModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <member-op-modal v-if="selectedMember"
                       :member="selectedMember"
                       :addScoreToMember="addScore"
                       :playMusic="playMusic"
                       :removeCard="removeCard"></member-op-modal>
    </Modal>

    <Modal
      v-model="showRandomEventModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="header" style="text-align: center;">
        随机事件
      </p>
      <div class="panel">
          <Row type="flex" justify="space-around" class="code-row-bg">
            <Col span="5" v-for="e,index in randomEvents" class="random-box" :class="selectedIndex == index ? 'selected': ''">
              <img style="width: 100%; height: 120px;" :src="e.file.URL">
              <p style="font-size: 1.2em; font-weight: 600;">{{ e.name }}</p>
              <p>{{ e.description }}</p>
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
    padding-top: .5rem;
    /*background: #fff url('/static/img/battle_bg/battle_top_bg.jpg') top/cover; */
  }

  .panel{
    padding: 1rem;
    display: inline-block;
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
    border: 2px dashed red;
  }

  .random-box {
    text-align: center;
    background-color: aliceblue;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
<script>
  import GroupBar from '../components/battlePage/groupBar';
  import ScoreVS from '../components/battlePage/scoreVS';
  import TimeLine from '../components/battlePage/timeline';
  import MemberCell from '../components/battlePage/memberCell';
  import MemberOpModal from '../components/battlePage/memberOpModal';
  import RandomMemberPanel from '../components/battlePage/randomMemberPanel.vue';

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
        startTime: new Date(),
        showPanel: false,
        showRandomEventModal: false,
        selectedIndex: 0,
        randomTimer: null,
        opModal: false,
        selectedMember: null,
        opRandomNumberModal: false,
        copyedMembers: [],
        showMembers: true,
      };
    },
    computed: {
      ...mapGetters('battle', [
        'members',
        'groupOne',
        'groupTwo',
        'randomEvents',
      ]),
      ...mapGetters('timeline', [
        'feeds',
      ]),
    },
    methods: {
      ...mapActions('battle', [
        'removeCardFromMember',
        'addScoreToMember',
        'setFinalScore',
      ]),
      ...mapActions('timeline', [
        'addFeed',
      ]),
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
        let scoreStr = `${payload.score}`;
        if (payload.score > 0) {
          scoreStr = `+${scoreStr}`;
        }
        this.addFeed({
          feed: {
            groupName,
            people: payload.member.displayName,
            created: new Date(),
            color: payload.score > 0 ? 'green' : 'red',
            type: '答题',
            description: scoreStr,
          },
        });

        setTimeout(() => {
          this.showMembers = true;
          return 0;
        }, 100);

        // Vue.set(this.members, index, payload.member);
//
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
            description: payload.card.name,
          },
        });

        setTimeout(() => {
          this.showMembers = true;
          return 0;
        }, 100);
      },
      gotoWinnerPage() {
        this.setFinalScore(this.getScoreData());
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
        this.opModal = true;
        this.selectedMember = member;
      },
    },
    components: {
      MemberCell,
      'group-bar': GroupBar,
      'score-vs': ScoreVS,
      timeline: TimeLine,
      'member-op-modal': MemberOpModal,
      RandomMemberPanel,
    },
    mounted() {
      let timer;
      const gotoTop = function () {
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= 10;
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition);
        } else {
          window.scrollTo(0, 0);
          clearInterval(timer);
          timer = null;
        }
      };

      timer = setInterval(gotoTop, 1);
    },
  };
</script>
