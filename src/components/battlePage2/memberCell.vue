<template>
  <div>
    <!-- <Card style="text-align: left; margin-bottom: 5px;" @click.native="toggleOpModal(member)">

      <p slot="title" style="">
        <img :src="member.profileImageURL"></img>
        <span style="font-size:1.2rem; color:#888;">{{ member.displayName }}</span>-<span style="color:#57c5ff">等级 {{member.option.level}}</span>
      </p>
      <span style="color: #57c5ff">
        <Tag type="border" color="green">可用卡牌数 {{member.cards.length}}</Tag>
        <Tag type="border" color="yellow">悦币 {{member.option.goldToken}}</Tag>
        <Tag type="border" color="blue">等级 {{member.option.level}}</Tag>
      </span>
      <Row type="flex" justify="space-around">
        <Col span="8">
        </Col>
        <Col span="16">
          <div class="mark">
            <span style="color:#a5ffde">{{member.get || 0}}</span>
            <span style="font-size:.5rem;">-</span>
            <span style="color:#ffa5a5">{{Math.abs(member.lost) || 0}}</span>
          </div>
        </Col>
      </Row>
      <Row class="card-area">
        <Col span="8" v-for="card in member.cards">
          <Tag type="border" color="blue">{{card.name}}</Tag>
        </Col>
      </Row>
    </Card> -->
    <div class="member-cell" @click="getScore()">
      <!-- <p slot="extra">
      </p> -->
      <div class="member-head">
      <!-- <div class=""> -->
        <div class="">
          <img :src="member.profileImageURL"></img>
        </div>
        <span style="font-size:1.5rem; color:#555;">{{ member.displayName }}</span>
        <!-- <span style="color:#57c5ff;font-size:.8rem;">等级{{member.option.level}}</span> -->
      <!-- </div> -->
    </div>
      <!-- <span style="color: #57c5ff">
        <Tag type="border" color="green">可用卡牌数 {{member.cards.length}}</Tag>
        <Tag type="border" color="yellow">悦币 {{member.option.goldToken}}</Tag>
        <Tag type="border" color="blue">等级 {{member.option.level}}</Tag>
      </span> -->
      <Row type="flex" justify="space-around">
        <Col span="24">
          <div class="mark">
            <span :class="member.get + member.lost < 0 ? 'color-gray' : 'color-green'">{{member.get-Math.abs(member.lost) || 0}}</span>
            <!-- <span style="">/</span> -->
            <!-- <span style="color:#ff8d92">{{Math.abs(member.lost) || 0}}</span> -->
          </div>
        </Col>
        <!--<Col span="12">-->
          <!--&lt;!&ndash;<div style="font-size: .8em; vertical-align: middle; padding: 10px;">&ndash;&gt;-->
            <!--<Badge className="green-badge" :count="member.cards.length"><span>卡牌</span></Badge>-->
            <!--&lt;!&ndash;&lt;!&ndash;<p>卡牌 x <span style="color: #ff7e34">{{ member.cards.length }}</span></p>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;<span>卡牌</span>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;<Badge count="20" className="demo-badge-alone"></Badge>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;<sup class="ivu-badge-count" style="background: blue;"></sup>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--<span>得分</span>-->
        <!--</Col>-->
        <!--<Col span="12">-->
          <!--<div class="mark">-->
            <!--<span>得分</span>-->
            <!--<span style="color:#06810a">{{member.get-Math.abs(member.lost) || 0}}</span>-->
            <!--&lt;!&ndash; <span style="">/</span> &ndash;&gt;-->
            <!--&lt;!&ndash; <span style="color:#ff8d92">{{Math.abs(member.lost) || 0}}</span> &ndash;&gt;-->
          <!--</div>-->
        <!--</Col>-->


      </Row>
      <!-- <Row class="card-area">
        <Col span="8" v-for="card in member.cards">
          <Tag type="border" color="blue">{{card.name}}</Tag>
        </Col>
      </Row> -->
    </div>

    <!-- <Card v-if="member.groupIndex == 1" style="text-align: right; margin-bottom: 5px;" @click.native="toggleOpModal(member)">
      <p slot="extra">
        <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get || 0}}</span>
        /
        <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{Math.abs(member.lost) || 0}}</span>
      </p>
      <p slot="title" style="text-align: left;">
        {{ member.displayName }}
      </p>
      <Avatar size="large" shape="square" :src="member.profileImageURL" style="margin-right: 10px; float: left"></Avatar>

      <span style="color: #57c5ff;">
        <Tag type="border" color="blue">等级 {{member.option.level}}</Tag>
        <Tag type="border" color="yellow">悦币 {{member.option.goldToken}}</Tag>
        <Tag type="border" color="green">可用卡牌数 {{member.cards.length}}</Tag>
    </span>
    </Card> -->
  </div>
</template>

<script>
  export default {
    name: 'MemberCell',
    props: ['member', 'addScore'],
    methods: {
      getScore() {
        this.addScore({ member: this.member, score: 1 });
      },
    },
  };
</script>

<style scoped lang="less">
  .member-cell{
    margin-top: 1rem;
    background-color: rgba(255,255,255,1);
    border:1px solid #fff;
    padding: 5px;
    box-shadow: 0 0 10px #888;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .member-head{
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
  img{
    border-radius: 5px;
    border: 1px solid #eee;
    // box-shadow: 0 0 5px #888;
    width:6rem;
    height: 6rem;
  }
  .ivu-card-body {
      padding: 10px !important;
  }
  .name-area{
    padding: 20px;
    font-size: 3rem;
    color: #888;
  }
  .user-detail{
    font-size: 2rem;
  }
  .mark{
    font-size: 3rem;
    color: #ccc;
    margin: 0 auto;
    text-align: center;
  }
  .card-area{
    margin-top: .5rem;
  }

  .color-gray {
    color: gray;
  }

  .color-green {
    color: #19be6b;
  }
</style>
