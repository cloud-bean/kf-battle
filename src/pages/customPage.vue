<template>
  <div style="width: 95%; margin: 10px auto; overflow:scroll;">
    <Affix>
      <span @click="goIndex" class="demo-affix"
        style="padding: 10px; vertical-align: middle; color: white; background-color: green; border-radius: 5px;">
        <Icon type="chevron-left"></Icon>
        重返战场
      </span>
    </Affix>


    <Row>
      <Col span="8" v-for="team in teamList" :key="team._id" style="padding: 10px; height:660px;">
      <Card>
        <div @click="selectedTeam = team;">
          <p style="font-size: 3rem; color: #888">{{team.name}}</p>
          <img :src="team.logo ? team.logo.URL : '/static/img/vay2.png'" style="width: 15rem; margin:1rem 0;"
            @click="showLogosModal = true;">
          <div>
            <!-- <Button @click="showLogosModal = true;">换战队logo</Button> -->
            <!-- <br>  v-if="selectedTeam && selectedTeam._id == team._id" -->
            <!-- <input v-model="team.name"/>
              <Button @click="saveTeam(team)">换个战队名字</Button> -->

            <Row class="member-container">
              <Col span="4" v-for="member in team.students" :key="member._id" style=" margin: 5px;">
              <img :src="member.profileImageURL" style="width: 5rem;" @click="openSetMemberAvatarModal(member)">
              <p style="font-size:1rem;">{{ member.displayName }}</p>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
      </Col>
    </Row>

    <Modal title="设置团队logo" v-model="showLogosModal" width="80%" class-name="vertical-center-modal">
      <p slot="footer"></p>
      <img v-for="logo in teamLogos" :key="logo._id" :src="logo ? logo.URL : '/static/img/vay2.png'"
        style="margin: 10px; max-width: 10rem; max-height: 10rem; background-color: gray;" @click="setLogo(logo)">
    </Modal>

    <Modal title="设置头像" v-model="showMemberAvatarsModal" width="80%" class-name="vertical-center-modal">
      <p slot="footer"></p>
      <img v-for="avatar in memberAvatars" :key="avatar._id" :src="avatar.URL" @click="setAvatar(avatar.URL)"
        style="margin: 10px; max-width: 8rem; max-height: 8rem; background-color: gray;">
    </Modal>
  </div>
</template>
<style scoped>
  .member-container {
    margin-top: 20px;
  }

</style>
<script>
  import {
    mapGetters,
    mapActions,
  } from 'vuex';
  export default {
    name: 'customPage',
    data() {
      return {
        selectedTeam: null,
        selectedMember: null,
        showMemberAvatarsModal: false,
        showLogosModal: false,
        page: 1,
        limit: 20,
      };
    },
    computed: {
      ...mapGetters([
        'teamLogos',
        'memberAvatars',
      ]),
      ...mapGetters('team', [
        'teamList',
      ]),
    },
    methods: {
      ...mapActions('team', [
        'getAllTeams',
        'updateTeam',
      ]),
      ...mapActions([
        'getAllTeamLogos',
        'getAllMemberAvatars',
        'setMemberAvatar',
      ]),
      saveTeam(team) {
        this.updateTeam({
          id: team._id,
          data: {
            name: team.name,
          },
        });
      },
      goIndex() {
        this.$router.push('/');
      },
      openSetTeamLogoModal(team) {
        this.selectedTeam = team;
        this.showLogosModal = true;
      },
      openSetMemberAvatarModal(member) {
        this.selectedMember = member;
        this.showMemberAvatarsModal = true;
      },
      setLogo(logo) {
        if (this.selectedTeam) {
          this.updateTeam({
            id: this.selectedTeam._id,
            data: {
              logo,
            },
          });
        }
        this.showLogosModal = false;
        this.selectedTeam.logo = logo;
      },
      setAvatar(profileImageURL) {
        if (this.selectedMember) {
          this.setMemberAvatar({
            id: this.selectedMember._id,
            data: {
              profileImageURL,
            },
          });
        }
        this.showMemberAvatarsModal = false;
        this.selectedMember.profileImageURL = profileImageURL;
      },
    },
    created() {
      this.getAllTeams({
        page: this.page,
        limit: this.limit,
      });
      this.getAllTeamLogos();
      this.getAllMemberAvatars();
    },
  };

</script>
