<template>
  <Card style="text-align: left; margin-bottom: 5px;">
    <p slot="title">
      {{ member.displayName }}
      <span style="color: #57c5ff">【level {{member.option.level}}，经验 {{member.option.exp}}，悦币 {{member.option.goldToken}}】</span>
    </p>
    <p slot="extra">
      <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get || 0}}</span>
      /
      <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{member.lost || 0}}</span>
      <Button shape="circle" size="small" style="margin-left: 10px;"  @click="opModal = true">
        <Icon color="green" type="plus-round"></Icon>
        <Icon color="red" type="minus-round"></Icon>
      </Button>
    </p>
    <div style="text-align:left; margin: -10px;">
      <Tooltip placement="top" v-for="(card, index) in member.cards"  :key="index">
        <div style="text-align: center; margin: 5px; background-color: rgba(204,204,204,0.31); -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
          <img style="width: 60px; margin: 5px; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" :src="card.file.URL">
          <p style="font-size: 0.8em;">{{card.name}}</p>
          <Button @click="removeIt(index)">施放</Button>
        </div>
        <div slot="content">
          <p>{{card.name}}</p>
          <p><i>{{card.description}}</i></p>
        </div>
      </Tooltip>
      <p v-if="member.cards.length == 0">无可用卡牌</p>
    </div>
    <audio ref="audio" src="/static/audio/Events/useCard.m4a" preload="auto" style="display: none;"></audio>
    <Modal
      title="计分板"
      v-model="opModal"
      width="80%"
      class-name="vertical-center-modal">
      <Row>
        <Col span="8">
          <p>Profile</p>
          <img :src="member.profileImageURL" style="width:80%">
          <p>{{ member.displayName }}</p>
          <p>经验值：{{ member.option.exp }}</p>
          <p>金币：{{ member.option.goldToken }}</p>
          <p>座右铭：{{ member.option.slogan }}</p>
        </Col>
        <Col span="8" style="margin:0 auto; padding:10px;">
          <p>Good Job (Get Score)</p>
          <Button type="success"  class="scoreBtn">+1 回答正确</Button>
          <br>
          <Button type="success" class="scoreBtn" >+2 回答正确，解释正确</Button>
        <br>
          <Button type="success" class="scoreBtn" >+3 回答正确，解释正确，举一反三</Button>
        </Col>
        <Col span="8" style="margin:0 auto; padding:10px;">
          <p>Take care (Lose Score)</p>
          <Button type="error"  class="scoreBtn">-1 大声喧哗</Button>
        <br>
          <Button type="error"  class="scoreBtn">-2 玩手机</Button>
        <br>
          <Button type="error"  class="scoreBtn">-3 睡觉</Button>
        </Col>
      </Row>
    </Modal>
  </Card>
</template>

<script>
  export default {
    name: 'MemberCell',
    props: ['member', 'removeCard'],
    data() {
      return {
        opModal: false,
      };
    },
    methods: {
      removeIt(cardIndex) {
        this.removeCard({
          member: this.member,
          card: this.member.cards[cardIndex],
        });
        this.$forceUpdate();
        this.playMusic();
      },
      playMusic() {
        this.$refs.audio.play();
      },
    },
  };
</script>

<style scoped lang="less">
  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
      top: 0;
    }
  }
  .scoreBtn{
    margin: 10px 0;
  }
</style>
