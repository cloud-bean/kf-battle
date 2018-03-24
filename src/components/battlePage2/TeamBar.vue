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
      <Col span="14">
            <Row type="flex" justify="start">

            <Col span="4" v-for="member in members">
              <transition-group name="list-complete" tag="p">
                <memberCell :member="member" :addScore="addScore" :key="member._id" style="transition: all 1s;"></memberCell>
              </transition-group>
              </Col>
            </Row>


      </Col>
      <Col span="4">
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
    props: ['team', 'rank', 'addScore', 'members'],
    components: {
      memberCell,
    },
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

.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  /*transform: translateY(30px);*/
}
.list-complete-leave-active {
  position: absolute;
}
</style>
