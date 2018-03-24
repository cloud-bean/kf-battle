<template>
  <div>
    <Row class="panel">
      <Col span="8" class="left">
        <Row class="name-area"  type="flex" align="middle">
          <Col span="8">
            <img class="head" :src="member.profileImageURL" >
          </Col>
          <Col span="16">
            <p>
              <span class="name">{{ member.displayName }}</span>
            </p>

            <div>
              <Tag checkable color="yellow">悦币: {{ member.option.goldToken }}</Tag>
              <Tag checkable color="blue">等级: {{ exp2level(member.option.exp) }}</Tag>
              <Progress :percent=" percent(member.option.exp) ">
                <span>{{ member.option.exp + '/' + levelExp[exp2level(member.option.exp)] }}</span>
              </Progress>
            </div>
        </Col>
      </Row>
        <Row type="flex"  align="middle">
          <Col span="24">
          <!-- <p>个人得分</p> -->
          <div class="mark">
            <span style="color:#19be6b">{{member.get}}</span>
            <span>/</span>
            <span style="color:#808080">{{Math.abs(member.lost)}}</span>

          </div>
          </Col>
        </Row>
      </Col>
      <Col span="16">
        <Row>
          <Col span="12" style="margin:0 auto; padding:10px;">
            <!-- <h1>得 分</h1> -->
            <div class="i-button btn-get-score" @click="addScore(1, '答题', '+1分, 答题正确')" >+1分, 答题正确</div>
            <br>
            <div class="i-button btn-get-score" @click="addScore(2, '答题', '+2分, 受到表扬')" >+2分, 受到表扬</div>
            <br>
            <div class="i-button btn-get-score" @click="addScore(3, '答题', '+3分, 听写满分')" >+3分, 听写满分</div>
            <br>
            <!-- <h1>随机事件</h1> -->
            <Row>
              <Col span="8">
                <div class="i-button btn-get-score" @click="addScore(1, '随机事件', '+1分, 随机事件')">+1分</div>
              </Col>
              <Col span="8">
                <div class="i-button btn-get-score" @click="addScore(2, '随机事件', '+2分, 随机事件')">+2分</div>
              </Col>
              <Col span="8">
                <div class="i-button btn-get-score" @click="addScore(3, '随机事件', '+3分, 随机事件')">+3分</div>
              </Col>
            </Row>
          </Col>
          <Col span="12" style="margin:0 auto; padding:10px;">
            <!-- <h1>丢 分</h1> -->
            <div class="i-button btn-lose-score" @click="addScore(-1, '答题', '-1分, 上课迟到')" >-1分, 上课迟到</div>
            <br>
            <div class="i-button btn-lose-score" @click="addScore(-2, '答题', '-2分, 违规答题')" >-2分, 违规答题</div>
            <br>
            <div class="i-button btn-lose-score" @click="addScore(-3, '答题', '-3分, 闲聊走神')" >-3分, 闲聊走神</div>
            <br>

            <!-- <h1>随机事件</h1> -->
            <Row>
              <Col span="8">
                <div class="i-button btn-lose-score" @click="addScore(-1, '随机事件', '-1分, 随机事件')">-1分</div>
              </Col>
              <Col span="8">
                <div class="i-button btn-lose-score" @click="addScore(-2, '随机事件', '-2分, 随机事件')">-2分</div>
              </Col>
              <Col span="8">
                <div class="i-button btn-lose-score" @click="addScore(-3, '随机事件', '-3分, 随机事件')">-3分</div>
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
    data() {
      return {
        levelExp: [0, 50, 100, 200, 350, 550, 800, 1100, 1450, 1850, 2300, 2800,
          3350, 3950, 4600, 5300, 6050, 6850, 7700, 8600, 9550],
      };
    },
    props: ['member', 'addScoreToMember', 'removeCard', 'playMusic'],
    // computed: {
    //   level: exp2level(this.member.option.exp),
    // },
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
      exp2level(experience) {
        const levelExp = this.levelExp;
        let maxLevel = 1;
        for (; maxLevel < levelExp.length; maxLevel++) {
          if (experience < levelExp[maxLevel]) {
            break;
          }
        }
        return maxLevel;
      },
      percent(exp) {
        let maxLevel = 1;
        for (; maxLevel < this.levelExp.length; maxLevel++) {
          if (exp < this.levelExp[maxLevel]) {
            break;
          }
        }

        const upNum = exp - this.levelExp[maxLevel - 1];
        const downNum = this.levelExp[maxLevel] - this.levelExp[maxLevel - 1];

        return upNum * 100 / downNum;
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
