<template>
  <div>
    <Row class="panel">
      <Col span="8">
        <Row class="name-area"  type="flex" justify="center" align="middle">
          <Col span="8">
            <img :src="member.profileImageURL" >
          </Col>
          <Col span="16">
            <Row>
              {{ member.displayName }}
            </Row>
            <Row class="user-detail">
              <Col span="10">
              经验 : {{ member.option.exp }}
              </Col>
              <Col span="4">
              -
              </Col>
              <Col span="10">
              金币 : {{ member.option.goldToken }}
              </Col>
            </Row>

        </Col>
      </Row>
        <Row type="flex"  align="middle">
          <Col span="24">
          <!-- <p>个人得分</p> -->
          <div class="mark">
            <span style="color:#a5ffde">{{member.get}}</span><span>/</span><span style="color:#ffa5a5">{{Math.abs(member.lost)}}</span>
          </div>
          </Col>
        </Row>
      </Col>
      <Col span="16">
        <Row>
          <Col span="12" style="margin:0 auto; padding:10px;">
          <p>Good Job (Get Score)</p>
          <Button type="success"  class="scoreBtn" size="large" @click="addScore(1)" long>+1 回答正确</Button>
          <br>
          <Button type="success" class="scoreBtn" size="large" @click="addScore(2)" long>+2 回答正确，解释正确</Button>
          <br>
          <Button type="success" class="scoreBtn" size="large" @click="addScore(3)" long>+3 回答正确，解释正确，举一反三</Button>

          <Button type="success" class="scoreBtn" @click="addScore(1)">+1 随机事件</Button>
          <Button type="success" class="scoreBtn" @click="addScore(2)">+2 随机事件</Button>
          <Button type="success" class="scoreBtn" @click="addScore(2)">+3 随机事件</Button>


          </Col>
          <Col span="12" style="margin:0 auto; padding:10px;">
          <p>Take care (Lose Score)</p>
          <Button type="error"  class="scoreBtn" size="large" @click="addScore(-1)" long>-1 大声喧哗</Button>
          <br>
          <Button type="error"  class="scoreBtn" size="large" @click="addScore(-2)" long>-2 玩手机</Button>
          <br>
          <Button type="error"  class="scoreBtn" size="large" @click="addScore(-3)" long>-3 睡觉</Button>

          <Button type="error" class="scoreBtn" @click="addScore(-1)">-1 随机事件</Button>
          <Button type="error" class="scoreBtn" @click="addScore(-2)">-2 随机事件</Button>
          <Button type="error" class="scoreBtn" @click="addScore(-2)">-3 随机事件</Button>

          </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col span="24">
        <div style="text-align:center; margin: 10px;">
          <Tooltip placement="top" v-for="(card, index) in member.cards"  :key="index">
            <div style="text-align: center; margin: 5px; background-color: rgba(204,204,204,0.31); -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
              <img style="width: 120px; margin: 5px;margin-bottom:0; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" :src="card.file.URL" @click="removeIt(index)">
              <p style="font-size: 1rem; padding:.2rem;">{{card.name}}</p>
              <!-- <Button @click="removeIt(index)">施放</Button> -->
            </div>
            <div slot="content">
              <p>{{card.name}}</p>
              <p><i>{{card.description}}</i></p>
            </div>
          </Tooltip>
          <p v-if="member.cards.length == 0">无可用卡牌</p>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ['member', 'addScoreToMember', 'removeCard', 'playMusic'],
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
        const scoreNumber = parseInt(score, 10);
        if (scoreNumber > 0) {
          this.playMusic(1);
        } else {
          this.playMusic(2);
        }
        this.addScoreToMember({ member: this.member, score: scoreNumber });
        this.$forceUpdate();
      },
    },
  };
</script>


<style scoped lang="less">
  .panel{
    padding: 1rem;
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
    width:80px;
  }

  .mark{
    font-size: 10rem;
    color: #ccc;
    margin: 0 auto;
    text-align: center;
  }
</style>
