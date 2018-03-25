<template>
    <div class="container" >
      <div class="title-area">
        等待加入
      </div>


      <p>
        悦币奖励： xxx 个
      </p>

      {{'开始时间：' + board.startTime + '已加入' + board.aliveCount + '人'}}


      <Alert type="info" show-icon style="width:30%;margin:10px auto; size: 2rem;">
              <span slot="desc" style="font-size:16px;">
                  请输入口令或扫二维码加入
              </span>
      </Alert>

      <Row>

        <Col span="12">

          <p style="font-size: 3em; letter-spacing: 10px; color: #f90">
            345211
          </p>

        </Col>
        <Col span="12">

         <img src="static/img/qr_code.png" style="width: 150px; height: 150px;">


        </Col>

      </Row>

      <Avatar v-for="name, index in board.userIds" size="large" :style="{ background: ColorList[index % 4], margin: '2px' }">{{ name }}</Avatar>


      <!--<p>{{ board }}</p>-->
    </div>


<!-- </div> -->

</template>
<script>
  export default {
    data() {
      return {
        members: [{
          name: 'aaa',
        }, {
          name: 'bbb',
        }, {
          name: 'ccc',
        }],
        board: null,
        wdUserInfo: {},
        ColorList: ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'],
      };
    },
    mounted() {
      const that = this;
      this.$root.$wilddogRefs.ref.child('/board').on('value', (snapshot) => {
        that.board = snapshot.val();
      });
      // setInterval(() => {
      //   if (that.wdUserInfo
      //     && (that.wdUserInfo.submitAnswerState === 0)
      //     && (that.board.stopTime === 0)) {
      //     if (that.board.question.isMultipleChoice) {
      //       that.submitChoices();
      //       console.log('sendAnswer for multiple choice question',
      // that.wdUserInfo.submitAnswerState);
      //     } else {
      //       that.sendAnswer();
      //       console.log('sendAnswer for single choice question', new Date());
      //     }
      //   }
      // }, 1000);
    },
  };

</script>

<style scoped>

</style>
