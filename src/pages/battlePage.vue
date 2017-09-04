<template>
  <div>
    <Row style="background-color: #fff">
      <Col span="9">
      <group-bar-a></group-bar-a>
      </Col>
      <Col span="6">
      <score-vs :scoreData="scoreData"></score-vs>
      </Col>
      <Col span="9">
      <group-bar-b></group-bar-b>
      </Col>
    </Row>
    <div class="spacer">
      <hr style="border: 2px solid whitesmoke">
    </div>
    <!--<Row style="border: 2px solid blue">-->
    <!--<Col span="12">-->
    <!--<cards :cards="cardsA" justify="start"></cards>-->
    <!--</Col>-->
    <!--<Col span="12">-->
    <!--</Col>-->
    <!--<Col span="12">-->
    <!--<cards :cards="cardsB" justify="end"></cards>-->
    <!--</Col>-->
    <!--</Row>-->
    <Row style="margin-top: 10px;">
      <Col span="8">
      <Card style="text-align: left; margin-bottom: 5px;">
        <p slot="title">
          赵九江
          <span style="color: #57c5ff">【level 5, 悦币 120】</span>
        </p>
        <p slot="extra">
          <span style="color: green;font-size: 1.2em; font-weight: 700;">+12</span> / <span style="color: red;font-size: 1.2em; font-weight: 700;">-0</span>
          <Button shape="circle" size="small" style="margin-left: 10px;">
            <Icon color="green" type="plus-round"></Icon>
            <Icon color="red" type="minus-round"></Icon>
          </Button>
        </p>
        <div style="text-align:left; margin: -10px;">
          <img width="80px;" src="/static/kf_card/qiangda.jpeg">
          <img width="80px;" src="/static/kf_card/xiaokeluo.jpeg">
        </div>
      </Card>
      <Card style="text-align: left; margin-bottom: 5px;">
        <p slot="title">
          刘晓洋
          <span style="color: #57c5ff">【level 3, 悦币 80】</span>
        </p>
        <p slot="extra">
          <span style="color: green;font-size: 1.2em; font-weight: 700;">+10</span>
          /
          <span style="color: red;font-size: 1.2em; font-weight: 700;">-1</span>
          <Button shape="circle" size="small" style="margin-left: 10px;">
            <Icon color="green" type="plus-round"></Icon>
            <Icon color="red" type="minus-round"></Icon>
          </Button>
        </p>
        <div style="text-align:left; margin: -10px;">
          <img style="width: 80px;" src="/static/kf_card/xiaokeluo.jpeg">
        </div>
      </Card>

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
      <Card style="text-align: left; margin-bottom: 5px;">
        <p slot="title">
          赵研冰
          <span style="color: #57c5ff">【level 4, 悦币 100】</span>
        </p>
        <p slot="extra">
          <span style="color: green;font-size: 1.2em; font-weight: 700;">+11</span> / <span style="color: red;font-size: 1.2em; font-weight: 700;">-3</span>
          <Button shape="circle" size="small" style="margin-left: 10px;">
            <Icon color="green" type="plus-round"></Icon>
            <Icon color="red" type="minus-round"></Icon>
          </Button>
        </p>
        <div style="text-align:left; margin: -10px;">
          <img width="80px;" src="/static/kf_card/qiangda.jpeg">
          <img width="80px;" src="/static/kf_card/xiaokeluo.jpeg">
        </div>
      </Card>

      </Col>
    </Row>
  </div>
</template>

<script>
  import GroupBarA from '../components/battlePage/groupBarA'
  import GroupBarB from '../components/battlePage/groupBarB'
  import ScoreVS from '../components/battlePage/scoreVS'
  import Cards from '../components/battlePage/cardsContainer'
  import TimeLine from '../components/battlePage/timeline'
  import StudentBar from '../components/battlePage/studentBar'
  export default {
    name: 'BattlePage',
    data () {
      return {
        cardsA: [
          {imageURL: '/static/kf_card/qiangda.jpeg'}
        ],
        cardsB: [
          {imageURL: '/static/kf_card/qiangda.jpeg'},
          {imageURL: '/static/kf_card/qiangda.jpeg'},
          {imageURL: '/static/kf_card/qiangda.jpeg'},
          {imageURL: '/static/kf_card/xiaokeluo.jpeg'}
        ],
        scoreData: {
          left: 78,
          right: 65
        }
      }
    },
    components: {
      'group-bar-a': GroupBarA,
      'group-bar-b': GroupBarB,
      'score-vs': ScoreVS,
      'cards': Cards,
      'timeline': TimeLine,
      StudentBar
    }
  }
</script>
<style scoped>
</style>
