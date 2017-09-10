<template>
  <div>
    <Row style="background-color: #fff">
      <Col span="9">
      <group-bar position="left" :data="groupOne"></group-bar>
      </Col>
      <Col span="6">
      <score-vs :scoreData="scoreData"></score-vs>
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
        <member-cell :member="member" v-for="member in members" v-if="member.groupIndex == 0"></member-cell>
      </Col>
      <Col span="8">
      <ButtonGroup size="large">
        <Button icon="ios-stopwatch-outline">计时器</Button>
        <Button icon="wand">随机事件</Button>
        <Button icon="ios-close-outline">游戏结束</Button>
      </ButtonGroup>
      <timeline></timeline>
      </Col>
      <Col span="8">
        <member-cell :member="member" v-for="member in members" v-if="member.groupIndex == 1"></member-cell>
      </Col>
    </Row>
  </div>
</template>

<script>
  import GroupBar from '../components/battlePage/groupBar';
  import ScoreVS from '../components/battlePage/scoreVS';
  import TimeLine from '../components/battlePage/timeline';
  import StudentBar from '../components/battlePage/studentBar';
  import MemberCell from '../components/battlePage/memberCell.vue';
  import { createNamespacedHelpers } from 'vuex';
  const { mapGetters } = createNamespacedHelpers('battle');

  export default {
    name: 'BattlePage',
    data() {
      return {
        scoreData: {
          left: 78,
          right: 65,
        },
      };
    },
    computed: {
      ...mapGetters([
        'members',
        'groupOne',
        'groupTwo',
      ]),
    },
    components: {
      MemberCell,
      'group-bar': GroupBar,
      'score-vs': ScoreVS,
      timeline: TimeLine,
      StudentBar,
    },
  };
</script>
<style scoped>
</style>
