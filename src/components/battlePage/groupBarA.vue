<template>
  <Row type="flex" justify="end" align="middle" class="code-row-bg white-bg">
    <Col span="12" class="teamName">
      <span>邪恶力量-球鞋-A</span>
    </Col>
    <Col span="6">
      <img src="/static/battle_team/TeamLogo_1.jpg" style="width: 100%">
    </Col>
    <Col span="6"></Col>
  </Row>
</template>

<script>
  import groupA from '../../mockData/groupA.json'
  import MemberCell from './memberCell'
  export default {
    name: 'GroupBar',
    data () {
      return groupA
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
