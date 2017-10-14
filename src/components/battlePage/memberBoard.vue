<template>
  <div>
    <Row class="panel">
      <Col span="8" class="left">
        <Row class="name-area"  type="flex" justify="center" align="middle">
          <Col span="8">
            <img :src="member.profileImageURL" >
          </Col>
          <Col span="16">
            <Row>
              <span class="name">{{ member.displayName }}</span>
            </Row>
            <Row class="user-detail">
              <Col span="10">
              经验 : {{ member.option.exp }}
              </Col>
              <Col span="4">
              -
              </Col>
              <Col span="10">
              悦币 : {{ member.option.goldToken }}
              </Col>
            </Row>

        </Col>
      </Row>
        <Row type="flex"  align="middle">
          <Col span="24">
          <!-- <p>个人得分</p> -->
          <div class="mark">
            <span style="color:#a5ffde">{{member.get}}</span>
            <span>/</span>
            <span style="color:#ffa5a5">{{Math.abs(member.lost)}}</span>
          </div>
          </Col>
        </Row>
      </Col>
      <Col span="16">
        <Row>
          <Col span="12" style="margin:0 auto; padding:10px;">
            <!-- <h1>得 分</h1> -->
            <div class="i-button" style="background-color:#19be6b;width:auto;" @click="addScore(1, '答题', '+1分, 答题正确')" >+1分, 答题正确</div>
            <br>
            <div class="i-button" style="background-color:#19be6b;width:auto;" @click="addScore(2, '答题', '+2分, 受到表扬')" >+2分, 受到表扬</div>
            <br>
            <div class="i-button" style="background-color:#19be6b;width:auto;" @click="addScore(3, '答题', '+3分, 听写满分')" >+3分, 听写满分</div>
            <br>
            <!-- <h1>随机事件</h1> -->
            <Row>
              <Col span="8">
                <div class="i-button" style="background-color:#19be6b;width:auto;" @click="addScore(1, '随机事件', '+1分, 随机事件')">+1分</div>
              </Col>
              <Col span="8">
                <div class="i-button" style="background-color:#19be6b;width:auto;" @click="addScore(2, '随机事件', '+2分, 随机事件')">+2分</div>
              </Col>
              <Col span="8">
                <div class="i-button" style="background-color:#19be6b;width:auto;" @click="addScore(3, '随机事件', '+3分, 随机事件')">+3分</div>
              </Col>
            </Row>
          </Col>
          <Col span="12" style="margin:0 auto; padding:10px;">
            <!-- <h1>丢 分</h1> -->
            <div class="i-button" style="background-color:#ed3f14;width:auto;" @click="addScore(-1, '答题', '-1分, 上课迟到')" >-1分, 上课迟到</div>
            <br>
            <div class="i-button" style="background-color:#ed3f14;width:auto;" @click="addScore(-2, '答题', '-2分, 违规答题')" >-2分, 违规答题</div>
            <br>
            <div class="i-button" style="background-color:#ed3f14;width:auto;" @click="addScore(-3, '答题', '-3分, 闲聊走神')" >-3分, 闲聊走神</div>
            <br>

            <!-- <h1>随机事件</h1> -->
            <Row>
              <Col span="8">
                <div class="i-button" style="background-color:#ed3f14;width:auto;" @click="addScore(-1, '随机事件', '-1分, 随机事件')">-1分</div>
              </Col>
              <Col span="8">
                <div class="i-button" style="background-color:#ed3f14;width:auto;" @click="addScore(-2, '随机事件', '-2分, 随机事件')">-2分</div>
              </Col>
              <Col span="8">
                <div class="i-button" style="background-color:#ed3f14;width:auto;" @click="addScore(-3, '随机事件', '-3分, 随机事件')">-3分</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col span="24">
        <div style="text-align:center; margin: 10px;">
          <Tooltip placement="top" v-for="(card, index) in member.cards"  :key="index">
            <div style="text-align: center; margin: 5px; background-color: rgba(204,204,204,0.31); -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
              <img style="width: 12rem; margin: 5px;margin-bottom:0; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" :src="card.file.URL + '-kf_card_w200_h460'" @click="removeIt(index)">
              <p style="font-size: 2rem; padding:.2rem;">{{card.name}}</p>
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
      addScore(score, type, desc) {
        const scoreNumber = parseInt(score, 10);
        if (scoreNumber > 0) {
          this.playMusic(1);
        } else {
          this.playMusic(2);
        }
        this.addScoreToMember({ member: this.member, score: scoreNumber, type, desc });
        this.$forceUpdate();
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
</style>
