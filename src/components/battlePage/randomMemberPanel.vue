<template>
  <div>
    <Row type="flex" justify="center" align-items="center">
      <ButtonGroup>
        <Button @click="setAllMembers(true)" size="large">全选</Button>
        <Button @click="setAllMembers(false)" size="large">全不选</Button>
      </ButtonGroup>
    </Row>
    <Row class="panel" type="flex" justify="start">
      <Col v-for="(member,index) in members" :key="member._id" span="3">
      <div class="member-head">
        <img :src="member.profileImageURL" v-bind:class="[(isActive==index) ? 'active' : '', 'pic']">
        <div @click="toggleSelected(index)">
          <div><Icon type="record" v-bind:class="[member.isSelected ? 'online' : 'offline']"/>{{member.displayName}}</div>
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
        const selectedMembers = [];
        const selectedMembersIndexArray = [];
        this.members.forEach((item, index) => {
          if (item.isSelected) {
            selectedMembers.push(selectedMembers);
            selectedMembersIndexArray.push(index);
          }
        });

        const max = selectedMembers.length;
        this.intervalId = setInterval(() => {
          const num = parseInt(Math.random() * max, 10);
          this.isActive = selectedMembersIndexArray[num];
        }, 100);
        this.startButton = true;
        this.stopButton = false;
      },
      stop() {
        clearInterval(this.intervalId);
        this.startButton = false;
        this.stopButton = true;
      },
      toggleSelected(index) {
        const member = this.members[index];
        member.isSelected = !member.isSelected;
        this.$set(this.members, index, member);
      },
      setAllMembers(status) {
        this.members.map((member) => {
          member.isSelected = status;
          return 0;
        });
        this.$forceUpdate();
      },
    },
  };
</script>

<style scoped lang="less">
  .member-head {
    margin: 0 auto;
    // background-color: #ccc;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .panel {
    padding: 2rem;
  }

  .pic {
    width: 100px;
    border: 1px solid #ccc;

  }

  .active {
    border: 5px solid #19be6b;
  }

  .online {
    color: #19be6b;
  }

  .offline {
    color: #ccc;
  }
</style>
