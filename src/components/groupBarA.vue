<template>
  <Row type="flex" justify="end" class="code-row-bg">
    <Col span="6">
      <img :src="logo" style="width: 100%">
    </Col>
    <Col :span="3"  v-for="(member, index) in people">
      <member-cell :member="member" :key="'a' + index"></member-cell>
    </Col>
  </Row>
</template>

<script>
  import groupA from '../mockData/groupA.json'
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

