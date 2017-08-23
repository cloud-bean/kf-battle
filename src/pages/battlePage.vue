<template>
  <div>
    <Row style="">
      <Col span="9">
        <group-bar-a></group-bar-a>
      </Col>
      <Col span="6">
        <score-vs></score-vs>
      </Col>
      <Col span="9">
        <group-bar-b></group-bar-b>
      </Col>
    </Row>
    <div class="spacer">
      <hr style="border: 2px solid whitesmoke">
    </div>
    <Row>
      <Col span="6">
        <cards :cards="cards" justify="start"></cards>
      </Col>
      <Col span="12">
        <timeline></timeline>
      </Col>
      <Col span="6">
        <cards :cards="cards" justify="end"></cards>
      </Col>
    </Row>
  </div>
</template>

<script>
import GroupBarA from '../components/groupBarA'
import GroupBarB from '../components/groupBarB'
import ScoreVS from '../components/scoreVS'
import Cards from '../components/cardsContainer'
import TimeLine from '../components/timeline'
export default {
  name: 'BattlePage',
  data () {
    return {
      cards: [
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'},
        {imageURL: '/static/qiangda.jpeg'}
      ]
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
