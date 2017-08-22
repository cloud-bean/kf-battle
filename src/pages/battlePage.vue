<template>
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
</template>

<script>
import GroupBarA from '../components/groupBarA'
import GroupBarB from '../components/groupBarB'
import ScoreVS from '../components/scoreVS'
export default {
  name: 'BattlePage',
  data () {
    return {
    }
  },
  components: {
    'group-bar-a': GroupBarA,
    'group-bar-b': GroupBarB,
    'score-vs': ScoreVS
  }
}
</script>
