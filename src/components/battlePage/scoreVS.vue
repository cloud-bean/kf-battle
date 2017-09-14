<template>
  <Row type="flex" align="middle">
    <Col span="9" class="score-card">
      {{ scoreData.left }}
    </Col>
    <Col span="6" class="vs-card">
     <img src="/static/img/newGame/vs-text.png">
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
    color: rgb(255, 141, 7);
    font-weight: 800;
    font-size: 3.6em;
    padding: 5px;
    text-shadow: 2px 2px 8px #8a8a8a;
  }

  .vs-card {
    margin: 0 auto;
  }

  .vs-card img {
    width: 100%;
  }
</style>
