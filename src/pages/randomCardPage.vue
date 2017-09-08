<template>
  <div class="container">
    <div class="title-area">
      随机抽卡
    </div>
    <div class="main-area">
      <p>抽卡规则：每人三张卡</p>

      <card-item :card="card" v-for="card in cardPool"></card-item>

      {{ battleTeams }}
      {{ members }}
    </div>
    <div class="button-area">
      <Button shape="circle" size="large" type="warning">抽 卡</Button>
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
      ]),
      ...mapActions('battle', [
        'addCardToMember',
        'removeCardFromMember',
      ]),
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
