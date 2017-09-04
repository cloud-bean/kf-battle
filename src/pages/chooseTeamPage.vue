<template>
  <div class="">
    <div class="title">
      选择对战双方
    </div>
    <Row :gutter="16" class="team-list">
        <Col span="4" v-for="item in teamList" class="team-item">
          <team-item :teamData="item"></team-item>
        </Col>
    </Row>
    <div class="button-area">
      <Button type="ghost" size="large">下一步</Button>
    </div>
  </div>
</template>
<script>
import TeamItem from '../components/chooseTeamPage/teamItem';
import teamData from '../mockData/teamList.json';

export default {
  data() {
    return {
      teamList: teamData.team,
    };
  },
  methods: {

  },
  components: {
    TeamItem,
  },
};
</script>

<style scoped>

.title{
  font-size: 1.5rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.3rem;
}
.team-list{
  padding: 1rem 4rem;
}
.team-item{
  margin: .5rem 0;
}
.button-area{
  position: relative;
  margin: 0 auto;
  margin-top: 8rem;
}
</style>
