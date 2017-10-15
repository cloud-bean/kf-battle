<template>
  <div>
    <Row type="flex" justify="center" align-items="center">
      <div @click="setAllMembers(true)" class="i-button">全选</div>
      <div @click="setAllMembers(false)" class="i-button">全不选</div>
    </Row>
    <Row class="panel" type="flex" justify="start">
      <Col v-for="(member,index) in members" :key="member._id" span="3">
      <div class="member-head" @click="toggleSelected(index)">
        <img :src="member.profileImageURL" v-bind:class="[(isActive==index) ? 'active' : '', 'pic']">
        <div >
          <div><Icon type="record" v-bind:class="[member.isSelected ? 'online' : 'offline']"/>{{member.displayName}}</div>
        </div>
      </div>
      </Col>
    </Row>
    <Row type="flex" justify="center" align-items="center">
          <div class="i-button" @click="randomMember"  v-if="startButton">命运之轮</div>
          <div  class="i-button"   v-if="!startButton" style="background-color:#eee">命运之轮</div>
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
        startButton: true,
      };
    },
    computed: {
    },
    methods: {
      randomMember() {
        this.startButton = false;

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
        }, 50);
        setTimeout(() => {
          if (this.intervalId) {
            clearInterval(this.intervalId);
          }
          this.startButton = true;
        }, 3 * 1000);
        // this.stopButton = false;
      },
      // stop() {
      //   clearInterval(this.intervalId);
      //   this.startButton = false;
      //   this.stopButton = true;
      // },
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
    mounted() {
      this.setAllMembers(true);
    },
  };
</script>

<style scoped lang="less">
  .member-head {
    margin: 0 auto;
    // background-color: #ccc;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .panel {
    padding: 2rem;
  }

  .pic {
    width: 10rem;
    border: 1px solid #ccc;

  }

  .active {
    border: 5px solid #ed3f14;
  }

  .online {
    color: #19be6b;
  }

  .offline {
    color: #ccc;
  }
</style>
