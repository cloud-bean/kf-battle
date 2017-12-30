<template>
  <div class="container">
    <div class="title-area">
      随机抽卡
    </div>
    <div class="main-area">
      <!-- <Card style="margin-bottom: 20px;" v-if="!showMemberWithCards"> -->
        <!-- <p slot="title">
          抽卡规则
        </p> -->
        <div class="" style="margin-bottom: 20px;" v-if="!showMemberWithCards">
          <!-- <vue-ring :data="chartData" :settings="chartSettings" height="200px"></vue-ring> -->
          <h1>
            每人随机抽取{{maxCardsLimit}}张卡
          </h1>
        </div>

      <!-- </Card> -->

      <card-item v-if="!showMemberWithCards" :card="card" :key="index" v-for="card, index in getRandomCards"></card-item>

      <Row v-if="showMemberWithCards">
        <Col span="12" >
          <Card v-for="member, index in members" :key="member._id" v-if="member.groupIndex == 0" style="margin: 10px;">
            <div class="member-name">
              {{ member.displayName }}
            </div>
            <div v-for="item, index in member.cards" :key="index" style="display: inline-block;">
              <img :src="item.file.URL + '-kf_card_w200_h460'" class="card-img" >
              <div class="card-name">{{item.name}}</div>
            </div>
          </Card>
        </Col>
        <Col span="12">
          <Card v-for="member, index in members" :key="member._id" v-if="member.groupIndex == 1" style="margin: 10px;">
            <div class="member-name">
              {{ member.displayName }}
            </div>
            <div v-for="item, index in member.cards" :key="index" style="display: inline-block;">
              <img :src="item.file.URL + '-kf_card_w200_h460'"  class="card-img" >
              <div class="card-name">{{item.name}}</div>
            </div>
          </Card>
        </Col>
      </Row>

    </div>
    <div class="">
      <!-- <Button v-if="showMemberWithCards" type="error" @click="goToBattle">THE WAR IS COMING!</Button> -->
      <div  v-if="showMemberWithCards" @click="goToBattle"  class="i-button">
        开始作战
        <Icon type="chevron-right"></Icon>
      </div>
      <div v-if="!showMemberWithCards"  :disabled="members.length == 0" @click="addCardToMemberTest" class="i-button">
        随机抽卡
        <Icon type="chevron-right"></Icon>
      </div>
      <!-- <Button v-if="!showMemberWithCards" shape="circle" size="large" type="warning" :disabled="members.length == 0" @click="addCardToMemberTest">抽 卡</Button> -->
    </div>
  </div>

</template>
<style scoped>
  .large-box {
    height: 100%;
  }
  .card-img {
    width:8rem;
    margin: 5px;
  }
  .card-name{
    font-size: 1.5rem;
  }
  .member-name{
    font-size: 2rem;
    color: #888;
  }
</style>
<script>

  import { mapGetters, mapActions } from 'vuex';
  import CardItem from '../components/randomCardPage/cardItem';
  import VeRing from 'v-charts/lib/ring';

  export default {
    data() {
      return {
        maxCardsLimit: 3,
        levelRate: [65, 35, 0],
        showMemberWithCards: false,
        chartData: {
          columns: ['levelName', 'percent'],
          rows: [
            { levelName: '一级卡牌', percent: 65 },
            { levelName: '二级卡牌', percent: 35 },
            { levelName: '三级卡牌', percent: 0 },
          ],
          title: {
            text: 'Customized Pie',
            left: 'center',
            top: 200,
            textStyle: {
              color: 'red',
            },
          },
        },
        chartSettings: {
          dimension: 'levelName',
          metrics: 'percent',
          dataType: 'KMB',
          selectedMode: 'single',
          hoverAnimation: false,
          radius: [50, 40],
          offsetY: 100,
        },
      };
    },
    computed: {
      ...mapGetters('card', [
        'cardPool',
      ]),
      ...mapGetters('battle', [
        'members',
      ]),
      ...mapGetters('team', [
        'battleTeams',
      ]),
      ...mapGetters([
        'selectedTheme',
      ]),
      getRandomCards() {
        let randomCards = [];
        if (this.selectedTheme
          && this.selectedTheme.randomCards
          && this.selectedTheme.randomCards.length > 0) {
          randomCards = this.selectedTheme.randomCards;
        } else {
          randomCards = this.cardPool;
        }

        return randomCards;
      },
    },
    methods: {
      ...mapActions('card', [
        'fetchCardPool',
      ]),
      ...mapActions('battle', [
        'addCardToMember',
        'clearCards',
        'setGroups',
      ]),
      getRandomLevel() {
        const levelRate = this.levelRate;
        const sum = (arr) => {
          let total = 0;
          arr.map((item) => {
            total += item;
            return total;
          });
          return total;
        };
        const point = parseInt(Math.random() * sum(levelRate), 10);
        let level = 0;
        if (point <= levelRate[0]) {
          level = 0;
        } else if ((point > levelRate[0]) && (point <= levelRate[0] + levelRate[1])) {
          level = 1;
        } else if (point > levelRate[2]) {
          level = 2;
        }
        return level + 1;
      },
      getRandomCardIndex(randomLevel) {
        const countLevel = (cardPool, level) => cardPool.filter(card => card.level === level).length;

        let index = -1;
        const levelOneCount = countLevel(this.cardPool, 1);
        const levelTwoCount = countLevel(this.cardPool, 2);
        const levelThreeCount = countLevel(this.cardPool, 3);

        switch (randomLevel) {
          case 1:
            if (levelOneCount > 0) {
              index = Math.random() * levelOneCount;
            }
            break;
          case 2:
            if (levelTwoCount > 0) {
              index = levelOneCount + Math.random() * levelTwoCount;
            }
            break;
          case 3:
            if (levelThreeCount > 0) {
              index = levelOneCount + levelTwoCount + Math.random() * levelThreeCount;
            }
            break;
          default:
            break;
        }

        return parseInt(index, 10);
      },
      addCardToMemberTest() {
        this.members.map((member) => {
          for (let i = 0; i < this.maxCardsLimit; i++) {
            const randomCardIndex = this.getRandomCardIndex(this.getRandomLevel());
            this.addCardToMember({
              member,
              card: this.cardPool[randomCardIndex],
            });
          }
          return 0;
        });
        this.showMemberWithCards = true;
      },
      goToBattle() {
        this.$router.push('/battle');
      },
    },
    created() {
      this.fetchCardPool();
      this.clearCards();
    },
    mounted() {
      this.setGroups({ groups: this.battleTeams });
    },
    components: {
      'card-item': CardItem,
      'vue-ring': VeRing,
    },
  };
</script>
