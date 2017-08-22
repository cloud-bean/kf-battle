<template>
  <Row type="flex" justify="end" class="code-row-bg">
    <Col span="4">
      <img :src="logo" style="width: 100%; border: 1px solid mediumpurple">
    </Col>
    <Col span="4"  v-for="(member, index) in people">
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

