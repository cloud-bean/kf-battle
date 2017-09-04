<template>
  <div style="height: 80px;">
    <img :src="member.avatar" class="avatar">
    <span class="username">{{member.name}}</span>
  </div>
</template>

<script>
  export default {
    name: 'MemberCell',
    props: ['member']
  }
</script>

<style scoped>
  .username {
    font-size: 14px;
  }
  .avatar {
    width: 60px; height: 60px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
</style>
