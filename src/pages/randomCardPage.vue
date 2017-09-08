<template>
  <div class="container">
    <div class="title-area">
      随机抽卡
    </div>
    <div class="main-area">
      <p>抽卡规则：每人三张卡</p>

      <card-item :card="card" v-for="card in cardPool"></card-item>
    </div>
    <div class="button-area">
      <Button shape="circle" size="large" type="warning">抽 卡</Button>
    </div>
  </div>

</template>
<script>

  import { createNamespacedHelpers } from 'vuex';
  const { mapGetters, mapActions } = createNamespacedHelpers('card');
  import CardItem from '../components/randomCardPage/cardItem';

  export default {
    name: 'randomCardPage',
    data() {
      return {

      };
    },
    computed: {
      ...mapGetters([
        'cardPool',
      ]),
    },
    methods: {
      ...mapActions([
        'fetchCardPool',
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
