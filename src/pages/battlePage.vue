<template>
  <div>
    <Row style="background-color: #fff">
      <Col span="9">
      <group-bar position="left"></group-bar>
      </Col>
      <Col span="6">
      <score-vs :scoreData="scoreData"></score-vs>
      </Col>
      <Col span="9">
      <group-bar position="right"></group-bar>
      </Col>
    </Row>
    <div class="spacer">
      <hr style="border: 2px solid whitesmoke">
    </div>

    <Row style="margin-top: 10px;">
      <Col span="8">
      <member-cell :member="members[0]"></member-cell>
      <member-cell :member="members[1]"></member-cell>
      <member-cell :member="members[0]"></member-cell>
      <member-cell :member="members[1]"></member-cell>
      <member-cell :member="members[0]"></member-cell>
      <member-cell :member="members[1]"></member-cell>
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
      <member-cell :member="members[2]"></member-cell>
      <member-cell :member="members[3]"></member-cell>
      <member-cell :member="members[2]"></member-cell>
      <member-cell :member="members[3]"></member-cell>
      <member-cell :member="members[2]"></member-cell>
      <member-cell :member="members[3]"></member-cell>
      <member-cell :member="members[2]"></member-cell>
      <member-cell :member="members[3]"></member-cell>
      </Col>
    </Row>
  </div>
</template>

<script>
  import GroupBar from '../components/battlePage/groupBar'
  import ScoreVS from '../components/battlePage/scoreVS'
  import TimeLine from '../components/battlePage/timeline'
  import StudentBar from '../components/battlePage/studentBar'
  import MemberCell from '../components/battlePage/memberCell.vue'

  export default {
    name: 'BattlePage',
    data () {
      return {
        scoreData: {
          left: 78,
          right: 65
        },
        members: [
          {
            name: '赵九江',
            option: {
              level: 3,
              goldToken: 50
            },
            get: 19,
            lost: 1,
            avatar: '',
            cards: [
              {
                name: '果实卡',
                description: 'guoshika',
                imageURL: '/static/kf_card/guoshi.jpeg'
              },
              {
                name: '抢答卡',
                description: 'qiangdaka',
                imageURL: '/static/kf_card/qiangda.jpeg'
              },
              {
                name: '小克罗卡',
                description: 'xiaokeluo',
                imageURL: '/static/kf_card/xiaokeluo.jpeg'
              },
              {
                name: '转移卡',
                description: 'zhuanyika',
                imageURL: '/static/kf_card/zhuanyi.jpeg'
              }
            ]
          },
          {
            name: '刘向阳',
            option: {
              level: 3,
              goldToken: 50
            },
            get: 15,
            lost: 4,
            avatar: '',
            cards: [
              {
                name: '抢答卡',
                description: 'qiangdaka',
                imageURL: '/static/kf_card/qiangda.jpeg'
              }
            ]
          },
          {
            name: '何启元',
            option: {
              level: 3,
              goldToken: 50
            },
            get: 8,
            lost: 1,
            avatar: '',
            cards: [
              {
                name: '抢答卡',
                description: 'qiangdaka',
                imageURL: '/static/kf_card/qiangda.jpeg'
              },
              {
                name: '果实卡',
                description: 'guoshika',
                imageURL: '/static/kf_card/guoshi.jpeg'
              },
              {
                name: '小克罗卡',
                description: 'xiaokeluo',
                imageURL: '/static/kf_card/xiaokeluo.jpeg'
              }
            ]
          },
          {
            name: '朱长璐',
            option: {
              level: 3,
              goldToken: 50
            },
            get: 12,
            lost: 2,
            avatar: '',
            cards: [
              {
                name: '果实卡',
                description: 'guoshika',
                imageURL: './static/kf_card/guoshi.jpeg'
              },
              {
                name: '抢答卡',
                description: 'qiangdaka',
                imageURL:
                  './static/kf_card/qiangda.jpeg'
              }
            ]
          }
        ]
      }
    },
    components: {
      MemberCell,
      'group-bar': GroupBar,
      'score-vs': ScoreVS,
      'timeline': TimeLine,
      StudentBar
    }
  }
</script>
<style scoped>
</style>
