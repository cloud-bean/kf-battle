<template>
  <Card style="text-align: left; margin-bottom: 5px;">
    <p slot="title">
      {{ member.displayName }}
    </p>
    <p slot="extra">
      <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get || 0}}</span>
      /
      <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{Math.abs(member.lost) || 0}}</span>

    </p>
    <span style="color: #57c5ff">
      <Tag type="border" color="blue">level {{member.option.level}}</Tag>
      <Tag type="border" color="yellow">悦币 {{member.option.goldToken}}</Tag>
      <Tag type="border" color="green">可用卡牌数 {{member.cards.length}}</Tag>
    </span>
    <Button shape="circle" size="large" style="margin-left: 10px; float: right;"  @click="opModal = true">
      <Icon color="green" type="plus-round"></Icon>
      &nbsp;
      <Icon color="red" type="minus-round"></Icon>
    </Button>
    <audio ref="audioUseCard" src="/static/audio/Events/useCard.m4a" preload="auto" style="display: none;"></audio>
    <audio ref="audioGetScore" src="/static/audio/Events/get.m4a" preload="auto" style="display: none;"></audio>
    <audio ref="audioLostScore" src="/static/audio/Events/lost.m4a" preload="auto" style="display: none;"></audio>
    <Modal
      title="计分板"
      v-model="opModal"
      width="80%"
      class-name="vertical-center-modal">
      <Row>
        <Col span="8">
          <p>Profile</p>
          <img :src="member.profileImageURL" style="width:80px">
          <p>{{ member.displayName }}</p>
          <p>经验值：{{ member.option.exp }}</p>
          <p>金币：{{ member.option.goldToken }}</p>
          <p>座右铭：{{ member.option.slogan }}</p>
        </Col>
        <Col span="8" style="margin:0 auto; padding:10px;">
          <p>Good Job (Get Score)</p>
          <Button type="success"  class="scoreBtn" size="large" @click="addScore(1)">+1 回答正确</Button>
          <br>
          <Button type="success" class="scoreBtn" size="large" @click="addScore(2)">+2 回答正确，解释正确</Button>
        <br>
          <Button type="success" class="scoreBtn" size="large" @click="addScore(3)">+3 回答正确，解释正确，举一反三</Button>
        </Col>
        <Col span="8" style="margin:0 auto; padding:10px;">
          <p>Take care (Lose Score)</p>
          <Button type="error"  class="scoreBtn" size="large" @click="addScore(-1)">-1 大声喧哗</Button>
        <br>
          <Button type="error"  class="scoreBtn" size="large" @click="addScore(-2)">-2 玩手机</Button>
        <br>
          <Button type="error"  class="scoreBtn" size="large" @click="addScore(-3)">-3 睡觉</Button>
        </Col>
      </Row>
      <div style="text-align:center; margin: 10px;">
        <Tooltip placement="top" v-for="(card, index) in member.cards"  :key="index">
          <div style="text-align: center; margin: 5px; background-color: rgba(204,204,204,0.31); -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
            <img style="width: 120px; margin: 5px; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" :src="card.file.URL">
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
    </Modal>
  </Card>
</template>

<script>
  export default {
    name: 'MemberCell',
    props: ['member', 'removeCard', 'addScoreToMember'],
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
      addScore(score) {
        console.log('addScore', this.member, score);
        const member = this.member;
        if (parseInt(score, 10) > 0) {
          this.playMusic(1);
        } else {
          this.playMusic(2);
        }
        this.addScoreToMember({ member, score });
      },
      playMusic(index) {
        switch (index) {
          case 0:
            this.$refs.audioUseCard.play();
            break;
          case 1:
            this.$refs.audioGetScore.play();
            break;
          case 2:
            this.$refs.audioLostScore.play();
            break;
          default:
            this.$refs.audioUseCard.play();
            break;
        }
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
