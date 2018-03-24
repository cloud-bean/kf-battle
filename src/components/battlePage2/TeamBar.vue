<template>
  <div>
    <Row class="panel" type="flex" justify="center" align="middle">
      <Col span="2">
        <span class="rank">{{rank}}</span>
      </Col>
      <Col span="4">
        <Row type="flex" justify="center" align="middle">
          <Col span="12">
            <img :src="team.logo.URL" class="team-logo">
          </Col>
          <Col span="12">
            <span class="teamName">{{team.name}}</span>
          </Col>
        </Row>
      </Col>
      <Col span="16">
        <Row type="flex" justify="start">
          <Col span="4" v-for="member in memberOrderByScore" :key="member._id">
            <memberCell :member="member" :addScore="addScore"></memberCell>
          </Col>
        </Row>

      </Col>
      <Col span="2">
        <span class="score">{{team.get||0}}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
  import memberCell from './memberCell';

  export default {
    data() {
      return {
      };
    },
    props: ['team', 'rank', 'addScore'],
    components: {
      memberCell,
    },
    computed: {
      teamScore() {
        let score = 0;
        for (const item of this.team.students) {
          score += item.get + item.lost;
        }
        return score;
      },
      memberOrderByScore() {
        return this.team.students.sort((a, b) => b.get - a.get);
      },
    },
    // computed: {
    //   level: exp2level(this.member.option.exp),
    // },
    methods: {},
  };
</script>


<style scoped lang="less">
.panel{
  padding: 10px;
}
.teamName{
  font-size: 3rem;
}
.rank{
  /* 1: */
font-family: PingFangSC-Regular;
font-size: 100px;
color: #FFFFFF;
}
.score{
  font-family: PingFangSC-Regular;
  font-size: 100px;
  color: #FFFFFF;
}
.team-logo{
  /* Rectangle 2: */
/* Sketch doesnt export pattern fills at this point */
// border: 2px solid #FFFFFF;
// border-radius: 29px;
width: 8rem;
height: 8rem;

}
</style>
