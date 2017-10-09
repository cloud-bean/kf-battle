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
      <div class="i-button" @click="startGame">
        确认选择
        <Icon type="chevron-right"></Icon>
      </div>
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
        if (status === true) {
          this.pushMember(member, groupIndex);
        } else {
          this.removeMember(member, groupIndex);
        }
      },
      pushMember(member, groupIndex) {
        member.groupIndex = parseInt(groupIndex, 10);
        const index = this.onlineMembers.findIndex(item => item === member);
        if (index === -1) {
          this.onlineMembers.push(member);
        }
      },
      removeMember(member, groupIndex) {
        member.groupIndex = parseInt(groupIndex, 10);
        const index = this.onlineMembers.findIndex(item => item === member);
        if (index !== -1) {
          this.onlineMembers.splice(index, 1);
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
