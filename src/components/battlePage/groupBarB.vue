<template>
  <Row type="flex" justify="start" align="middle" class="code-row-bg white-bg">
    <Col span="6"></Col>
    <Col span="6">
      <img src="/static/battle_team/TeamLogo_2.jpg" style="width: 100%;">
    </Col>
    <Col span="12" class="teamName">
      <span>胜利之魂-球队-B</span>
    </Col>
  </Row>
</template>

<script>
  import groupB from '../../mockData/groupB.json'
  import MemberCell from '../memberCell'

  export default {
    name: 'GroupBar',
    data () {
      return groupB
    },
    components: {
      'member-cell': MemberCell
    }
  }
</script>

<style>
  .white-bg {
    background-color: #fff;
  }

  .teamName {
    font-size: 1.2em;
    font-weight: 700;
    text-shadow: 1px 1px 4px gray;
  }
</style>
