<template>
  <Row type="flex" justify="start" class="code-row-bg">
    <Col span="3" v-for="(member, index) in people">
      <member-cell :member="member" :key="'b' + index"></member-cell>
    </Col>
    <Col span="6">
      <img :src="logo" style="width: 100%;">
    </Col>
  </Row>
</template>

<script>
  import groupB from '../mockData/groupB.json'
  import MemberCell from './memberCell'

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

