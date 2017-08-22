<template>
  <Row type="flex" justify="start" class="code-row-bg">
    <Col span="4" v-for="(member, index) in people">
      <member-cell :member="member" :key="'b' + index"></member-cell>
    </Col>
    <Col span="4">
      <img :src="logo" style="width: 100%; border: 1px solid mediumpurple">
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

