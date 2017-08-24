<template>
  <div class="container">
    <p>课堂Battle: 初二英语培优</p>
    <Card class="steps">
      <Steps :current="current" :status="status">
        <Step title="组队" content="组建团队"></Step>
        <Step title="抽卡" content="每人可以抽得3张基础卡牌"></Step>
        <Step title="准备" content="仔细阅读pk规则"></Step>
        <Step title="开始" content="战斗马上开始"></Step>
      </Steps>
      <div v-if="current === 0" class="panel">
        <Row>
          <Col span="8">
            <p>A组</p>
          <ul>
            <li>张家瑞</li>
            <li>訾博涵</li>
            <li>赵九江</li>
            <li>马睿婕</li>
            <li>刘霄阳</li>
            <li>何起源</li>
          </ul>
          </Col>
          <Col span="8">
          <Button>加入A组</Button>
          <Button>加入B组</Button>
          <ul>
            <li>张家瑞</li>
            <li>訾博涵</li>
            <li>赵九江</li>
            <li>马睿婕</li>
            <li>刘霄阳</li>
            <li>何起源</li>
            <li>冯欣瑶</li>
            <li>汪启轩</li>
            <li>赵研冰</li>
            <li>梁育豪</li>
            <li>李昆岭</li>
            <li>李欣荣</li>
          </ul>
          </Col>
          <Col span="8">
          <p>B组</p>
          <ul>
            <li>冯欣瑶</li>
            <li>汪启轩</li>
            <li>赵研冰</li>
            <li>梁育豪</li>
            <li>李昆岭</li>
            <li>李欣荣</li>
          </ul>
          </Col>
        </Row>
        <Button type="success" @click="setTeamDone">组队完成</Button>
      </div>
      <div v-if="current === 1" class="panel">
        <pre>
          随机抽卡

          基础卡 （抢答卡）
          二级（小克罗卡、点名卡）
          三级 （果实卡、转移卡）
        </pre>

        <table class="table">
          <tr><td>张家瑞</td><td>抢答卡</td></tr>
          <tr><td>訾博涵</td><td>抢答卡</td></tr>
          <tr><td>赵九江</td><td>抢答卡</td></tr>
          <tr><td>马睿婕</td><td>抢答卡</td></tr>
          <tr><td>刘霄阳</td><td>抢答卡</td></tr>
          <tr><td>何起源</td><td>抢答卡</td></tr>
          <tr><td>冯欣瑶</td><td>抢答卡</td></tr>
          <tr><td>汪启轩</td><td>抢答卡</td></tr>
          <tr><td>赵研冰</td><td>抢答卡</td></tr>
          <tr><td>梁育豪</td><td>抢答卡</td></tr>
          <tr><td>李昆岭</td><td>抢答卡</td></tr>
          <tr><td>李欣荣</td><td>抢答卡</td></tr>
        </table>

        <Button type="success" @click="setCardsDone">卡牌分配完成</Button>
      </div>
      <div v-if="current === 2" class="panel">
        <Card>
          <p slot="title">规则</p>
          <pre>小组间不得交换持有卡牌

            当课堂积分到达10分后可解锁二级卡牌，积分到达25后可解锁三级卡牌

            课堂不良行为扣分：

            1. 讲课过程中，聊天说话
            2. 上课走神、心不在焉
            3. 上课睡觉
            4. 整节课未回答一次问题、未参与课堂


          老师具有最高话语权
          </pre>

          <Button type="success" @click="showRulesDone">阅读规则完成</Button>

        </Card>
      </div>
      <div v-if="current === 3" class="panel">
        <Button type="success" @click="startGame">START</Button>
      </div>
    </Card>
  </div>
</template>
<script>
  import router from '../router'

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
        router.replace('/battle')
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
    padding: 10px;
  }
  .steps {
    text-align: left;
    margin: 20px auto;
  }
  .panel {
    margin: 40px auto;
    height: 600px;
    text-align: center;
  }
  .table{
    margin: 20px auto;
    border: 1px solid gray;
  }
</style>
