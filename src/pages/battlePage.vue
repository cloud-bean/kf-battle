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
          <img
            style="width: 20px; height: 20px;"
            src="http://wx.qlogo.cn/mmopen/BA8GZZ2EGwXaBYBNIXuBLwWu8asaI6Ch5DDoK8TfKGibkAFWTXk5BSemS9j98iaCLGa0ncEk7FryBJLcTnfOaGMDx8sSibjPd8f/0">
          赵九江
        </p>
        <p slot="extra">
          贡献 12 分
        </p>
        <div style="text-align:left">
          <img width="80px;" src="/static/kf_card/qiangda.jpeg">
          <img width="80px;" src="/static/kf_card/xiaokeluo.jpeg">
        </div>
      </Card>
      <Card style="text-align: left; margin-bottom: 5px;">
        <p slot="title">
          <img
            style="width: 20px; height: 20px;"
            src="http://wx.qlogo.cn/mmopen/BA8GZZ2EGwXaBYBNIXuBLwWu8asaI6Ch5DDoK8TfKGibkAFWTXk5BSemS9j98iaCLGa0ncEk7FryBJLcTnfOaGMDx8sSibjPd8f/0">
          赵九江
        </p>
        <p slot="extra">
          贡献 12 分
        </p>
        <div style="text-align:left; margin-bottom: 5px;">
          <img width="80px;" src="/static/kf_card/qiangda.jpeg">
          <img width="80px;" src="/static/kf_card/xiaokeluo.jpeg">
        </div>
      </Card>
      <Card style="text-align: left; margin-bottom: 5px;">
        <p slot="title">
          <img
            style="width: 20px; height: 20px;"
            src="http://wx.qlogo.cn/mmopen/BA8GZZ2EGwXaBYBNIXuBLwWu8asaI6Ch5DDoK8TfKGibkAFWTXk5BSemS9j98iaCLGa0ncEk7FryBJLcTnfOaGMDx8sSibjPd8f/0">
          赵九江
        </p>
        <p slot="extra">
          贡献 12 分
        </p>
        <div style="text-align:left">
          <img width="80px;" src="/static/kf_card/qiangda.jpeg">
          <img width="80px;" src="/static/kf_card/xiaokeluo.jpeg">
        </div>
      </Card>
      <!--<div style="display: inline; background-color: whitesmoke;">-->
      <!--<img src="http://wx.qlogo.cn/mmopen/BA8GZZ2EGwXaBYBNIXuBLwWu8asaI6Ch5DDoK8TfKGibkAFWTXk5BSemS9j98iaCLGa0ncEk7FryBJLcTnfOaGMDx8sSibjPd8f/0" style="width: 80px; height: 80px;"/>-->
      <!--<span>赵九江</span>-->
      <!--<span>贡献12分</span>-->
      <!--<span>卡牌2张</span>-->
      <!--</div>-->
      </Col>
      <Col span="8">
        <ButtonGroup>
          <Button type="" icon="ios-clock">计时器</Button>
          <Button type="" icon="ios-color-wand-outline">随机事件</Button>
          <Button type="" icon="ios-close">游戏结束</Button>
        </ButtonGroup>
        <timeline></timeline>
      </Col>
      <Col span="8">
      <Card style="text-align: left; margin-bottom: 5px;">
        <p slot="title">
          <img
            style="width: 20px; height: 20px;"
            src="http://wx.qlogo.cn/mmhead/Xsv95XP1eZBZiaPYnaSTx8eZOUAFbpmOVrjicXEBLpVXc/0">
          赵研冰
        </p>
        <p slot="extra">
          贡献 9 分
        </p>
        <div style="text-align:left">
          <img width="80px;" src="/static/kf_card/qiangda.jpeg">
          <img width="80px;" src="/static/kf_card/xiaokeluo.jpeg">
        </div>
      </Card>

      <Card style="text-align: left; margin-bottom: 5px;">
        <p slot="title">
          <img
            style="width: 20px; height: 20px;"
            src="http://wx.qlogo.cn/mmhead/Xsv95XP1eZBZiaPYnaSTx8eZOUAFbpmOVrjicXEBLpVXc/0">
          赵研冰
        </p>
        <p slot="extra">
          贡献 9 分
        </p>
        <div style="text-align:left">
          <img width="80px;" src="/static/kf_card/qiangda.jpeg">
          <img width="80px;" src="/static/kf_card/xiaokeluo.jpeg">
        </div>
      </Card>

      <Card style="text-align: left; margin-bottom: 5px;">
        <p slot="title">
          <img
            style="width: 20px; height: 20px;"
            src="http://wx.qlogo.cn/mmhead/Xsv95XP1eZBZiaPYnaSTx8eZOUAFbpmOVrjicXEBLpVXc/0">
          赵研冰
        </p>
        <p slot="extra">
          贡献 9 分
        </p>
        <div style="text-align:left">
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
      'timeline': TimeLine
    }
  }
</script>
<style>
</style>
