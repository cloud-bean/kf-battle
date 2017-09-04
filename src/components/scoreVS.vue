<template>
  <Row>
    <Col span="10">
    <Card class="score-card">
      {{ left }}
    </Card>
    </Col>
    <Col span="4" class="vs-card">
     VS
    </Col>
    <Col span="10">
    <Card class="score-card">
      {{ right }}
    </Card>
    </Col>
  </Row>
</template>

<script>
  import groupA from '../mockData/groupA.json';
  import groupB from '../mockData/groupB.json';

  export default {
    name: 'ScoreVS',
    data() {
      return {
        left: groupA.score.total,
        right: groupB.score.total,
      };
    },
  };
</script>

<style scoped>
  .score-card {
    width: 100%; color: green; font-size: 2em; font-weight: 800;
  }

  .vs-card {
    color: red;
    font-size: 2em;
    padding:16px 0px;
  }
</style>
