<template>
  <div class="">
    <div class="title">
      选择战队
    </div>
    <Row :gutter="16" class="team-list">
      <Col span="4" v-for="item in teamList" class="team-item">
      <team-item :teamData="item" :onSelect="onSelect"></team-item>
      </Col>
    </Row>
    <div class="button-area">
      <Button type="ghost" size="large" @click="goNewGame">下一步</Button>
    </div>
  </div>
</template>
<script>
  import TeamItem from '../components/chooseTeamPage/teamItem'
  import teamData from '../mockData/teamList.json'
  import router from '../router'

  export default {
    data () {
      return {
        teamList: teamData.team
      }
    },
    methods: {
      onSelect: function (teamData, isSelected) {
        alert('on select:' + teamData._id + teamData.name + isSelected)
      },
      goNewGame: function () {
        router.replace('/newGame')
      }
    },
    components: {
      TeamItem
    }
  }
</script>

<style scoped>

  .title {
    font-size: 1.5rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.3rem;
  }

  .team-list {
    padding: 1rem 4rem;
  }

  .team-item {
    margin: .5rem 0;
  }

  .button-area {
    position: relative;
    margin: 8rem 0 auto;
  }
</style>
