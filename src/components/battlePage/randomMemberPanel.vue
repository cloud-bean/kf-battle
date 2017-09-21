<template>
  <div>
    <Row class="panel" type="flex" justify="start">
      <Col v-for="(member,index) in members" span="3">
      <div class="member-head">
        <img :src="member.profileImageURL" v-bind:class="[ (isActive==index) ? 'active' : '', 'pic']">
        <div class="">
          {{member.displayName}}
        </div>
      </div>
      </Col>
    </Row>
    <Row type="flex" justify="center" align-items="center">
      <ButtonGroup>
        <Button @click="randomMember" size="large" :disabled="startButton">开始</Button>
        <Button @click="stop" size="large"  :disabled="stopButton">停止</Button>
      </ButtonGroup>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ['members'],
    data() {
      return {
        opModal: false,
        isActive: 0,
        intervalId: 0,
        startButton: false,
        stopButton: true,
      };
    },
    computed: {
    },
    methods: {
      randomMember() {
        const max = this.members.length;
        this.intervalId = setInterval(() => {
          const num = parseInt(Math.random() * max, 10);
          this.isActive = num;
        }, 100);
        this.startButton = true;
        this.stopButton = false;
      },
      stop() {
        clearInterval(this.intervalId);
        this.startButton = false;
        this.stopButton = true;
      },
    },

  };
</script>

<style scoped lang="less">
.member-head{
  margin: 0 auto;
  // background-color: #ccc;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.panel{
  padding: 2rem;
}
.pic{
  width: 100px;
  border: 1px solid #ccc;

}
.active{
  border: 5px solid #19be6b;
}
</style>
