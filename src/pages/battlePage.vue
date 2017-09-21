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

    <Row style="margin-top: 10px;">
      <Col span="8">
        <member-cell :member="member" v-for="member in members"
                     :addScoreToMember="addScore"
                     :removeCard="removeCard" v-if="member.groupIndex == 0"></member-cell>
      </Col>
      <Col span="8">
      <ButtonGroup size="large">
        <!-- <Button icon="ios-stopwatch-outline" @click="showRandomPanel">点 名</Button> -->
        <random-member-panel :members="members" :show="showPanel"></random-member-panel>
        <Button icon="wand">随机事件</Button>
        <Button icon="ios-close-outline" @click="gotoWinnerPage">结束游戏</Button>
      </ButtonGroup>
      <timeline :feeds="feeds" :startTime="startTime"></timeline>
      </Col>
      <Col span="8">
        <member-cell :member="member" v-for="member in members"
                     :addScoreToMember="addScore"
                     :removeCard="removeCard" v-if="member.groupIndex == 1"></member-cell>
      </Col>
    </Row>
  </div>
</template>
<style scoped>
.battle-top{
  background-color: #fff;
  padding-top: .5rem;
  /*background: #fff url('/static/img/battle_bg/battle_top_bg.jpg') top/cover; */
}

</style>
<script>
  import GroupBar from '../components/battlePage/groupBar';
  import ScoreVS from '../components/battlePage/scoreVS';
  import TimeLine from '../components/battlePage/timeline';
  import StudentBar from '../components/battlePage/studentBar';
  import MemberCell from '../components/battlePage/memberCell.vue';
  import RandomMemberPanel from '../components/battlePage/randomMemberPanel.vue';

  import { mapGetters, mapActions } from 'vuex';

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
      };
    },
    computed: {
      ...mapGetters('battle', [
        'members',
        'groupOne',
        'groupTwo',
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
      showRandomPanel() {
        this.showPanel = true;
      },
      addScore(payload) {
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
        this.$forceUpdate();
      },
      removeCard(payload) {
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
        this.$forceUpdate();
      },
      gotoWinnerPage() {
        this.setFinalScore(this.getScoreData());
        this.$router.push('/winPage');
      },
    },
    components: {
      MemberCell,
      'group-bar': GroupBar,
      'score-vs': ScoreVS,
      timeline: TimeLine,
      StudentBar,
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
