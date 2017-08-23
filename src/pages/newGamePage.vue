<template>
  <div class="container">
    <div>
      <p>课堂Battle</p>
      <hr>
      <p>初二英语培优</p>
    </div>
    <Card class="steps">
      <Steps :current="current" :status="status">
        <Step title="组队" content="组建团队"></Step>
        <Step title="抽卡" content="每人可以抽得两张卡牌"></Step>
        <Step title="准备" content="仔细阅读pk规则"></Step>
        <Step title="开始" content="战斗马上开始"></Step>
      </Steps>
      <div v-if="current === 0" class="panel">
        <Row>
          <Col span="8">
            <p>A组</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          </Col>
          <Col span="8">
          <Button>加入A组</Button>
          <Button>加入B组</Button>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
          </Col>
          <Col span="8">
          <p>B组</p>
          <ul>
            <li>6</li>
            <li>7</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          </Col>
        </Row>
        <Button type="success" @click="setTeamDone">组队完成</Button>
      </div>
      <div v-if="current === 1" class="panel">
        <Button type="success" @click="setCardsDone">卡牌分配完成</Button>
      </div>
      <div v-if="current === 2" class="panel">
        <Button type="success" @click="showRulesDone">宣示规则完成</Button>
      </div>
      <div v-if="current === 3" class="panel">
        <Button type="success" @click="startGame">START</Button>
      </div>
    </Card>
  </div>
</template>
<script>
  export default {
    name: 'newGamePage',
    data () {
      return {
        current: 0,
        status: 'process'
      }
    },
    methods: {
      setTeamDone: function () {
        console.log(this)
        this.current = 1
      },
      setCardsDone: function () {
        this.current = 2
      },
      showRulesDone: function () {
        this.current = 3
      },
      startGame: function () {
        alert('start the war')
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
    padding: 60px;
  }
  .steps {
    text-align: left;
    margin: 40px auto;
  }
  .panel {
    border: 1px solid blue;
    height: 400px;
    text-align: center;
  }
</style>
