<template>
    <div>
      <audio ref="audioUseCard" src="/static/audio/Events/useCard.m4a" preload="auto" style="display: none;"></audio>
      <audio ref="audioGetScore" src="/static/audio/Events/get.m4a" preload="auto" style="display: none;"></audio>
      <audio ref="audioLostScore" src="/static/audio/Events/lost.m4a" preload="auto" style="display: none;"></audio>
      <Modal
        title="计分板"
        v-model="opModal"
        width="80%"
        class-name="vertical-center-modal">
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
              </Col>
              <Col span="12" style="margin:0 auto; padding:10px;">
              <p>Take care (Lose Score)</p>
              <Button type="error"  class="scoreBtn" size="large" @click="addScore(-1)" long>-1 大声喧哗</Button>
              <br>
              <Button type="error"  class="scoreBtn" size="large" @click="addScore(-2)" long>-2 玩手机</Button>
              <br>
              <Button type="error"  class="scoreBtn" size="large" @click="addScore(-3)" long>-3 睡觉</Button>
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
          </Col>

        </Row>

      </Modal>

      <Card v-if="member.groupIndex == 0" style="text-align: left; margin-bottom: 5px;" @click.native="opModal = true">
        <p slot="extra">
          {{ member.displayName }}
        </p>
        <p slot="title">
          <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get || 0}}</span>
          /
          <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{Math.abs(member.lost) || 0}}</span>

        </p>
        <span style="color: #57c5ff">
          <Tag type="border" color="green">可用卡牌数 {{member.cards.length}}</Tag>
          <Tag type="border" color="yellow">悦币 {{member.option.goldToken}}</Tag>
          <Tag type="border" color="blue">等级 {{member.option.level}}</Tag>
        </span>
        <Avatar size="large" shape="square" :src="member.profileImageURL" style="margin-left: 10px; float: right;"></Avatar>
      </Card>

      <Card v-if="member.groupIndex == 1" style="text-align: right; margin-bottom: 5px;" @click.native="opModal = true">
        <p slot="extra">
          <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get || 0}}</span>
          /
          <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{Math.abs(member.lost) || 0}}</span>
        </p>
        <p slot="title" style="text-align: left;">
          {{ member.displayName }}
        </p>
        <Avatar size="large" shape="square" :src="member.profileImageURL" style="margin-right: 10px; float: left"  @click.native="opModal = true"></Avatar>

        <span style="color: #57c5ff;">
          <Tag type="border" color="blue">等级 {{member.option.level}}</Tag>
          <Tag type="border" color="yellow">悦币 {{member.option.goldToken}}</Tag>
          <Tag type="border" color="green">可用卡牌数 {{member.cards.length}}</Tag>
      </span>
      </Card>
      </Card>
    </div>
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
    computed: {
      totalMark() {
        const total = Math.abs(this.member.get) - Math.abs(this.member.lost);
        return total;
      },
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
        const member = this.member;
        const scoreNumber = parseInt(score, 10);
        if (scoreNumber > 0) {
          this.playMusic(1);
        } else {
          this.playMusic(2);
        }
        this.addScoreToMember({ member, score: scoreNumber });
        this.$forceUpdate();
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
// .user-panel{
//   display: flex;
//   justify-content: space-between;
//   flex-direction:column;
//   font-size: 1rem;
//   align-items: center;
//   padding: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   height: 100%;
//   margin: 1rem;
//
// }
img{
  border-radius: 10px;
  border: 1px solid #eee;
  // box-shadow: 0 0 5px #888;
  width:80px;

}
.name-area{
  padding: 20px;
  font-size: 1.5rem;
  color: #888;
}
.user-detail{
  font-size: 1rem;
}
.mark{
  font-size: 13rem;
  color: #ccc;
  margin: 0 auto;
  text-align: center;
}
</style>
