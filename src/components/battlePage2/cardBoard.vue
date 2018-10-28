<template>
  <div>
    <Row class="panel">
      <Col v-for="card in cards" span="4" :key="card._id">
        <card-item :card="card"></card-item>
      </Col>
    </Row>
  </div>
</template>

<script>
import cardItem from './cardItem';
export default {
  data() {
    return {
      lock: true,
    };
  },
  props: ['cards'],
    // computed: {
    //   level: exp2level(this.member.option.exp),
    // },
  methods: {
  },
  components: {
    cardItem,
  },
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
  .lock{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.7);
    background-size: cover;
    z-index: 999;
  }
</style>
