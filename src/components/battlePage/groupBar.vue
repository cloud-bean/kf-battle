<template>
  <div>
    <Row v-if="position === 'left'" type="flex" align="middle" class="code-row-bg white-bg">

      <Col span="6">
      <img src="/static/battle_team/TeamLogo_1.jpg" style="width: 100%">
      </Col>

      <Col span="12" class="teamName">
      <span>邪恶力量-球鞋-A</span>
      </Col>

      <Col span="6"></Col>
    </Row>
    <Row v-if="position === 'right'" type="flex" align="middle" class="code-row-bg white-bg">
      <Col span="6"></Col>

      <Col span="12" class="teamName">
      <span>胜利之魂-球服-B</span>
      </Col>

      <Col span="6">
      <img src="/static/battle_team/TeamLogo_2.jpg" style="width: 100%;">
      </Col>
    </Row>
  </div>
</template>

<script>
  import MemberCell from './memberCell'
  export default {
    name: 'GroupBar',
    props: ['position'],
    data () {
      return {}
    },
    components: {
      'member-cell': MemberCell
    }
  }
</script>

<style scoped lang="less">
  .white-bg {
    background-color: #fff;
  }

  .teamName {
    font-size: 1.2em;
    font-weight: 700;
    text-shadow: 1px 1px 4px gray;
  }
</style>
