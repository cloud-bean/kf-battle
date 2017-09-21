<template>
  <div>
    <Row style="background: rgba(87,197,255,0.38); ">
      <Col span="9" class="groupName">
        <span>{{groups[0].name}}</span>
        <Tag color="red" v-if="finalScore.left >= finalScore.right">Winner</Tag>
      </Col>

      <Col span="6">
        <score-vs :scoreData="finalScore"></score-vs>
      </Col>

      <Col span="9" class="groupName">
         <span>{{groups[1].name}}</span>
        <Tag color="red" v-if="finalScore.left < finalScore.right">Winner</Tag>
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
    <Row style="background: rgba(255,255,255,0.36);">
      <Col span="12" style="padding: 20px;">
        <member-table :members="getMembers(0)" :groupScore="finalScore.left"></member-table>
      </Col>
      <Col span="12" style="padding: 20px;">
        <member-table :members="getMembers(1)" :groupScore="finalScore.right"></member-table>
      </Col>
    </Row>
  </div>
</template>

<script>
  import ScoreVS from '../components/battlePage/scoreVS';
  import MemberTable from '../components/winPage/memberTable';
  import { createNamespacedHelpers } from 'vuex';
  const { mapGetters } = createNamespacedHelpers('battle');
  export default {
    data() {
      return {
        winner: 'who is the winner',
      };
    },
    computed: {
      ...mapGetters([
        'members',
        'groups',
        'finalScore',
      ]),
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
    },
  };
</script>

<style>
  .score-card {
    color: rgb(255, 141, 7);
    font-weight: 800;
    font-size: 3.6em;
    padding: 5px;
    text-shadow: 2px 2px 8px #8a8a8a;
  }
  .groupName {
    padding-top: 20px;
    font-size: 2.4em;
  }
</style>
