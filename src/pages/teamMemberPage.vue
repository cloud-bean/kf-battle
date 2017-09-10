<template lang="html">
  <div class="container">
    <div class="title-area">
      调整双方队员
    </div>
    <Row class="main-area">
      <Col span="10">
        <team-with-members :teamData="battleTeams[0]" :setMemberOnline="setMemberOnline" groupIndex="0"></team-with-members>
      </Col>
      <Col span="4">
        <div class="vs">
          <Icon type="ios-game-controller-a-outline" size="150"></Icon>
          <!-- <Icon type="ios-game-controller-a" size="150"></Icon> -->
        </div>
         <!-- <img src="/static/newGame/vs-art.png" style="width: 50%"> -->
      </Col>
      <Col span="10">
        <team-with-members :teamData="battleTeams[1]" :setMemberOnline="setMemberOnline" groupIndex="1"></team-with-members>
      </Col>
    </Row>
    <div class="button-area">
      <Button type="ghost" size="large" @click="startGame">下一步</Button>
    </div>
  </div>
</template>

<style scoped>
  .vs{
    padding-top: 8rem;
  }
</style>

<script>

  import teamWithMembers from '../components/teamMemberPage/teamWithMemebers';
  import { mapActions, createNamespacedHelpers } from 'vuex';
  const { mapGetters } = createNamespacedHelpers('team');


  export default {
    name: 'teamMemberPage',
    data() {
      return {
        current: 0,
        status: 'process',
        onlineMembers: [],
      };
    },
    computed: {
      ...mapGetters([
        'battleTeams',
      ]),
    },
    methods: {
      startGame() {
        // save onlineMembers data to the state
        this.setMembers(this.onlineMembers);
        this.$router.push('/randomCardPage');
      },
      setMemberOnline(member, groupIndex, status) {
        console.log(member, groupIndex, status);
        if (status === true) {
          this.pushMember(member, groupIndex);
        } else {
          this.removeMember(member, groupIndex);
        }
        console.log(this.onlineMembers);
      },
      pushMember(member, groupIndex) {
        console.log('pushMember', member.displayName);
        member.groupIndex = groupIndex;
        const index = this.onlineMembers.findIndex(item => item === member);
        if (index === -1) {
          this.onlineMembers.push(member);
        } else {
          console.log('find index:', index);
        }
      },
      removeMember(member, groupIndex) {
        console.log('removeMember', member.displayName);
        member.groupIndex = groupIndex;
        const index = this.onlineMembers.findIndex(item => item === member);
        if (index !== -1) {
          this.onlineMembers.splice(index, 1);
        } else {
          console.log('not found');
        }
      },
      ...mapActions('battle', [
        'setMembers',
      ]),
    },
    components: {
      teamWithMembers,
    },
  };
</script>
