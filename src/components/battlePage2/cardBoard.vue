<template>
  <div>
    <Row class="panel">
      <Col v-for="card,index in cards" span="4">
        <div style="text-align: center; margin: 5px; background-color: rgba(204,204,204,0.31); -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
          <img style="width: 12rem; margin: 5px;margin-bottom:0; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" :src="card.file.URL + '-kf_card_w200_h460'" @click="useCard(index)">
          <p style="font-size: 2rem; padding:.2rem;">{{card.name}}</p>
        </div>
      </Col>
    </Row>
    <!-- <div v-if="use" style="text-align: center; margin: 5px; background-color: rgba(204,204,204,0.31); -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
      <img style="width: 12rem; margin: 5px;margin-bottom:0; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" :src="card.file.URL + '-kf_card_w200_h460'" @click="useCard(index)">
      <p style="font-size: 2rem; padding:.2rem;">{{card.name}}</p>
    </div> -->
  </div>
</template>

<script>

  export default {
    data() {
      return {
      };
    },
    props: ['cards'],
    // computed: {
    //   level: exp2level(this.member.option.exp),
    // },
    methods: {
      useIt(cardIndex) {
        this.removeCard({
          member: this.member,
          card: this.member.cards[cardIndex],
        });
        this.$forceUpdate();
        this.playMusic();
      },
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
</style>
