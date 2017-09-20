<template>
  <Row type="flex" align="middle">
    <Col span="9" class="score-card">
      {{ scoreData.left }}
    </Col>
    <Col span="6" class="vs-card">
     <!-- <img src="/static/img/newGame/vs-text.png"> -->
     vs
    </Col>
    <Col span="9" class="score-card">
      {{ scoreData.right }}
    </Col>
  </Row>
</template>

<script>
  export default {
    name: 'ScoreVS',
    props: ['scoreData'],
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .score-card {
    font-size: 7rem;
    color: #555;
  }

  .vs-card {
    margin: 0 auto;
    color: #ccc;
    font-size: 5rem;
  }

  .vs-card img {
    width: 100%;
  }
</style>
