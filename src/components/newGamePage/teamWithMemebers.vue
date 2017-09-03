<template>
  <div class="team-item">
    <div class="team-head">
      <img :src="teamData.logo.URL" alt="">
    </div>

    <div class="team-name">
      <p>{{teamData.name}}</p>
    </div>

    <div class="members">
      <div v-for="member in teamData.students">
        <Avatar icon="person" size="large" :src="member.avatar"></Avatar>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['teamData'],
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .team-item {
    /*padding: 2rem;*/

  }

  .mask {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    /*border: 1px solid #ccc;*/
    /*box-shadow: 0 0 5px #888;*/
  }

  img {
    width: 200px;
    height: 200px;
  }

  .team-head {
    position: relative;
  }

  .icon {
    margin-top: 30px;
    color: #eee;
  }

  .team-name {
    font-weight: 900;
    font-size: 2em;
    text-shadow: 2px 2px 8px #FF0000;
  }

  .members {
    text-align: center;
    display: inline-flex;
    margin-top: 20px;
  }
</style>
