<template>
  <div style="width: 80%; margin: 0 auto;">
    <Row>
      <Col span="8" v-for="team in teamList" :key="team._id" style="padding: 10px;">
        <Card>
          <div @click="selectedTeam = team;">
            <p>{{team.name}}</p>
            <img :src="team.logo.URL" style="width: 120px;">
            <div v-if="selectedTeam && selectedTeam._id == team._id">
              <Button @click="showLogosModal = true;">更换团队logo</Button>
              <br>
              <input v-model="team.name">
              <Button @click="saveTeam(team)">修改团队名字</Button>
              <hr>
              <div v-for="member in team.students" :key="member._id" style="border: 1px solid rgba(128,128,128,0.26); padding: 5px; margin: 5px; display: inline-block;">
                <img :src="member.profileImageURL" style="width: 60px;" @click="openSetMemberAvatarModal(member)">
                <p>{{ member.displayName }}</p>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>

    <Modal
      title="设置团队logo"
      v-model="showLogosModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <img v-for="logo in teamLogos" :key="logo._id" :src="logo.URL" style="margin: 10px; max-width: 120px; max-height: 120px; background-color: gray;" @click="setLogo(logo)">
    </Modal>

    <Modal
      title="设置头像"
      v-model="showMemberAvatarsModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <img  v-for="avatar in memberAvatars" :key="avatar._id" :src="avatar.URL" @click="setAvatar(avatar.URL)" style="margin: 10px; max-width: 60px; max-height: 60px; background-color: gray;">
    </Modal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'customPage',
    data() {
      return {
        selectedTeam: null,
        selectedMember: null,
        showMemberAvatarsModal: false,
        showLogosModal: false,
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
      this.getAllTeams();
      this.getAllTeamLogos();
      this.getAllMemberAvatars();
    },
  };
</script>
