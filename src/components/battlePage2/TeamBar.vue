<template>
  <div>
    <Row class="panel default" :class="{first:(rank==1),second:(rank==2),third:(rank==3)}" type="flex" justify="center" align="middle">
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
            <Row type="flex" justify="start" class="member-area">

            <Col span="3" v-for="member in members" :key="member._id">
              <transition-group name="list-complete" tag="p">
                <memberCell :member="member" :addScore="addScore" :scoreStatus="scoreStatus" :key="member._id" style="transition: all 1s;"></memberCell>
              </transition-group>
              </Col>
            </Row>
      </Col>
      <Col span="4" >

        <div class="score">{{team.get||0}}</div>
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
    props: ['team', 'rank', 'addScore', 'members', 'scoreStatus'],
    components: {
      memberCell,
    },
  };
</script>


<style scoped lang="less">
.panel{
  padding: 10px;
  color: #FFFFFF;
  border: solid 1px #fff;
  margin: 0 .5rem;
}
.default{
  background-color: #ccc;
  color:#333;
}
.first{
  background-color: #0060FF;
  color:white;
}
.second{
  // background-color: #2F7DFF;
}
.third{
  // background-color: #78ABFF;
}
.teamName{
  padding: 0.5rem;
  font-size: 2rem;
}
.rank{
  /* 1: */
font-family: PingFangSC-Regular;
font-size: 4rem;
// color: gold;
}
.score{
  font-family: PingFangSC-Regular;
  font-size: 6rem;
  margin:0 5rem;
  background-color: rgba(255,255,255,.3);
  border-radius: 10px;
  // color:#0EB495;
}
.team-logo{
  /* Rectangle 2: */
/* Sketch doesnt export pattern fills at this point */
// border: 2px solid #FFFFFF;
// border-radius: 29px;
width: 6rem;
height: 6rem;

}
.member-area{
  background-color: rgba(0,0,0,.4);
  border-radius: 10px;
  padding: 10px;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  /*transform: translateY(30px);*/
}
.list-complete-leave-active {
  position: absolute;
}
</style>
