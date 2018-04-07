<template>
  <Row type="flex" align="middle">
    <Col span="9" class="score-card">
      {{ left }}
    </Col>
    <Col span="6" class="vs-card">
     <!-- <img src="/static/img/newGame/vs-text.png"> -->
     vs
    </Col>
    <Col span="9" class="score-card">
      {{ right }}
    </Col>
  </Row>
</template>

<script>
  export default {
    name: 'ScoreVS',
    props: ['scoreData'],
    data() {
      return {
        left: Object.values(this.scoreData)[0],
        right: Object.values(this.scoreData)[1],
      };
    },
  };
</script>

<style scoped>
  .score-card {
    font-size: 7rem;
    color: #888;
  }

  .vs-card {
    margin: 0 auto;
    color: #eee;
    font-size: 4rem;
  }

  .vs-card img {
    width: 100%;
  }
</style>
