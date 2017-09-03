<template>
  <Row type="flex" :justify="justify" class="code-row-bg">
    <Col span="12" v-for="(card, index) in cards">
      <card :card="card" :key="'card' + index"></card>
    </Col>
  </Row>
</template>


<script>
  import Card from './card'
  export default {
    name: 'cardsContainer',
    props: ['cards', 'justify'],
    components: {
      'card': Card
    }
  }
</script>
