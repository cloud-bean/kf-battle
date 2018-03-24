<template>
  <div>
    <Row class="panel">
      <Col span="2">
        {{rank}}
      </Col>
      <Col span="6">
        <Row>
          <Col span="6">
            <img :src="team.logo.URL" style="width: 10rem;">
          </Col>
          <Col span="18">
            <span class="teamName">{{team.name}}</span>
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row>
          <Col span="4" v-for="member in team.students">
            <memberCell :member="member" :addScore="addScore" :key="member._id"></memberCell>
          </Col>
        </Row>

      </Col>
      <Col span="4">
        {{team.get}}
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
    },
    // computed: {
    //   level: exp2level(this.member.option.exp),
    // },
    methods: {},
  };
</script>


<style scoped lang="less">
  .panel{
    // padding:.5rem;
  }
  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    height:auto;
    .ivu-modal {
      top: 0;
    }
  }
  .scoreBtn{
    margin: 10px 0;
  }

  img{
    border-radius: 10px;
    border: 1px solid #eee;
    width:8rem;
  }

  .head {
    height:8rem;
    border-radius: 10px;
    border: 1px solid #eee;
    width:8rem;
  }
  .name{
    font-size: 3rem;
  }
  .name-area{
    font-size: 1.5rem;

  }
  .mark{
    font-size: 10rem;
    color: #ccc;
    margin: 0 auto;
    text-align: center;
  }
  .left{
    padding: 1rem;
  }

  .btn-get-score {
    background-color: #19be6b;
    width:auto;
  }

  .btn-lose-score {
    background-color: gray;
    width:auto;
  }
</style>
