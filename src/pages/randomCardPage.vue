<template>
  <div class="container">
    <div class="title-area">
      随机抽卡
    </div>
    <div class="main-area">
      <p>抽卡规则：每人三张卡</p>

      <card-item :card="card" v-for="card in cardPool"></card-item>

      <pre>

      cardIndex: {{ randomCardIndex }}
        card: {{cardPool[randomCardIndex].name}}
      </pre>
    </div>
    <div class="button-area">
      <Button shape="circle" size="large" type="warning" @click="getRandomCardIndex(getRandomLevel())">抽 卡</Button>
    </div>
  </div>

</template>
<script>

  import { mapGetters, mapActions } from 'vuex';
  import CardItem from '../components/randomCardPage/cardItem';

  export default {
    name: 'randomCardPage',
    data() {
      return {
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
      ]),
      getRandomLevel: () => {
        const levelRate = [65, 35, 0];
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
    },
    mounted() {
      this.fetchCardPool();
    },
    components: {
      'card-item': CardItem,
    },
  };
</script>

<style scoped>
  .main-area {
  }
</style>
