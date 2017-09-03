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
          <Col span="10">
            <team-with-members :teamData="groupOneData"></team-with-members>
          </Col>
          <Col span="4">
             <img src="/static/newGame/vs-1_cut.png" style="width: 100%">
          </Col>
          <Col span="10">
            <team-with-members :teamData="groupTwoData"></team-with-members>
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
  import teamListData from '../mockData/teamList.json'
  import teamWithMembers from '../components/newGamePage/teamWithMemebers'

  export default {
    name: 'newGamePage',
    data () {
      return {
        current: 0,
        status: 'process',
        groupOneData: teamListData.team[0],
        groupTwoData: teamListData.team[1]
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
    },
    components: {
      teamWithMembers
    }
  }
</script>

<style scoped>
  .container {
    margin: 2rem 2rem;
    padding: 2rem 2rem;
    background-color: rgba(255,255,255,.9);
    border-radius: .5rem;
    box-shadow: 0 0 15px #000;
    overflow: scroll;
    position: relative;
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
