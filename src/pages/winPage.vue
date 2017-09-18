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
    <hr>
    <Row style="background: rgba(255,255,255,0.36);">
      <Col span="12">
        <table style="width: 100%; text-align: left;">
          <tr>
            <th>头像</th>
            <th>名字</th>
            <th>得分</th>
            <th>丢分</th>
            <th>获得经验值</th>
            <th>贡献值</th>
          </tr>
          <tr v-for="member in getMembers(0)">
            <td><img style="width: 60px;" :src="member.profileImageURL"></td>
            <td><span>{{member.displayName}}</span></td>
            <td><span>{{member.get}}</span></td>
            <td><span>{{member.lost}}</span></td>
            <td><span>{{ (member.get + member.lost) * 100}}</span></td>
            <td>
              <span>{{ parseInt((member.get + member.lost) / finalScore.left * 100, 10)}}</span>
              <Tag v-if="member.isMVP" color="red">MVP</Tag>
            </td>
          </tr>
        </table>
      </Col>
      <Col span="12">
      <table style="width: 100%; text-align: right;">
        <tr>
          <th>头像</th>
          <th>名字</th>
          <th>得分</th>
          <th>丢分</th>
          <th>获得经验值</th>
          <th>贡献值</th>
        </tr>
        <tr v-for="member in getMembers(1)">
          <td><img  style="width: 60px;"  :src="member.profileImageURL"></td>
          <td><span>{{member.displayName}}</span></td>
          <td><span>{{member.get}}</span></td>
          <td><span>{{member.lost}}</span></td>
          <td><span>{{ (member.get + member.lost) * 100}}</span></td>
          <td>
            <span>{{ parseInt((member.get + member.lost) / finalScore.right * 100, 10)}}</span>
            <Tag v-if="member.isMVP" color="red">MVP</Tag>
          </td>
        </tr>
      </table>
      </Col>
    </Row>
  </div>
</template>

<script>
  import ScoreVS from '../components/battlePage/scoreVS';
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
