<template>
  <div style="height: 80px;">
    <img src="/static/logo.png" style="width: 60px; height: 60px;">
    <span>{{member.name}}</span>
  </div>
</template>

<script>
  export default {
    name: 'MemberCell',
    props: ['member']
  }
</script>
