<template>
  <div class="container">
    <div class="title-area">
      随机抽卡
    </div>
    <div class="main-area">
      <Card style="margin-bottom: 20px;" v-if="!showMemberWithCards">
        <p slot="title">
          抽卡规则
        </p>
        <vue-ring :data="chartData" :settings="chartSettings" height="200px"></vue-ring>
        <h3>
          每人{{maxCardsLimit}}张卡
        </h3>
      </Card>

      <card-item v-if="!showMemberWithCards" :card="card" :key="index" v-for="card, index in cardPool"></card-item>

      <Row v-if="showMemberWithCards">
        <Col span="12" >
          <Card v-for="member, index in members" v-if="member.groupIndex == 0" style="margin: 10px;">
            <p slot="title">
              {{ member.displayName }}
            </p>
            <div v-for="item, index in member.cards" :key="index" style="display: inline-block;">
              <img :src="item.file.URL" style="width: 80px; margin: 5px;" >
              <h4>{{item.name}}</h4>
            </div>
          </Card>
        </Col>
        <Col span="12">
          <Card v-for="member, index in members" v-if="member.groupIndex == 1" style="margin: 10px;">
            <p slot="title">
              {{ member.displayName }}
            </p>
            <div v-for="item, index in member.cards" :key="index" style="display: inline-block;">
              <img :src="item.file.URL" style="width: 80px; margin: 5px;" >
              <h4>{{item.name}}</h4>
            </div>
          </Card>
        </Col>
      </Row>

    </div>
    <div class="">
      <Button v-if="showMemberWithCards" type="error" @click="goToBattle">THE WAR IS COMING!</Button>
      <Button v-if="!showMemberWithCards" shape="circle" size="large" type="warning" :disabled="members.length == 0" @click="addCardToMemberTest">抽 卡</Button>
    </div>
  </div>

</template>
<script>

  import { mapGetters, mapActions } from 'vuex';
  import CardItem from '../components/randomCardPage/cardItem';
  import VeRing from 'v-charts/lib/ring';


  export default {
    data() {
      return {
        maxCardsLimit: 5,
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
        'randomCardIndex',
      ]),
      ...mapGetters('battle', [
        'members',
      ]),
      ...mapGetters('team', [
        'battleTeams',
      ]),
    },
    methods: {
      ...mapActions('card', [
        'fetchCardPool',
        'getRandomCardIndex',
      ]),
      ...mapActions('battle', [
        'addCardToMember',
        'removeCardFromMember',
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
      addCardToMemberTest() {
        this.members.map((member) => {
          for (let i = 0; i < this.maxCardsLimit; i++) {
            this.getRandomCardIndex(this.getRandomLevel());
            this.addCardToMember({
              member,
              card: this.cardPool[this.randomCardIndex],
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
      console.log(this.cardPool);
      console.log(this.battleTeams);
      this.setGroups({ groups: this.battleTeams });
    },
    components: {
      'card-item': CardItem,
      'vue-ring': VeRing,
    },
  };
</script>

<style scoped>
  .main-area {
  }
</style>
