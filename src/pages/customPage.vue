<template>
  <div>
    <div v-for="team in teamList" :key="team._id">
      <p>{{team.name}}</p>
      <img :src="team.logo.URL" style="width: 60px;" @click="openSetTeamLogoModal(team)">
      <input v-model="team.name">
      <Button @click="saveTeam(team)">Update</Button>

      <div v-for="member in team.students" :key="member._id">
        <p>{{ member.displayName }}</p>
        <img :src="member.profileImageURL" style="width: 60px;" @click="openSetMemberAvatarModal(member)">
      </div>
    </div>

    <Modal
      title="设置团队logo"
      v-model="showLogosModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <div v-for="logo in teamLogos" :key="logo._id">
        <img :src="logo.URL" style="width: 60px;" @click="setLogo(logo)">
      </div>
    </Modal>

    <Modal
      title="设置头像"
      v-model="showMemberAvatarsModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <div v-for="avatar in memberAvatars" :key="avatar._id">
        <img :src="avatar.URL" @click="setAvatar(avatar.URL)">
      </div>
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
      },
    },
    created() {
      this.getAllTeams();
      this.getAllTeamLogos();
      this.getAllMemberAvatars();
    },
  };
</script>
