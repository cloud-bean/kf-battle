<template>
  <div style="width: 95%; margin: 0 auto;">
    <Row>
      <Col span="8" v-for="team in teamList" :key="team._id" style="padding: 10px;">
        <Card>
          <div @click="selectedTeam = team;">
            <p style="font-size: 2em; color: dimgray">{{team.name}}</p>
            <img :src="team.logo.URL" style="width: 120px;" @click="showLogosModal = true;">
            <div v-if="selectedTeam && selectedTeam._id == team._id">
              <!-- <Button @click="showLogosModal = true;">换战队logo</Button> -->
              <!-- <br> -->
              <!-- <input v-model="team.name"/>
              <Button @click="saveTeam(team)">换个战队名字</Button> -->

              <Row class="member-container">
                <Col span="4" v-for="member in team.students" :key="member._id" style=" margin: 5px;">
                  <img :src="member.profileImageURL" style="width: 60px;" @click="openSetMemberAvatarModal(member)">
                  <p>{{ member.displayName }}</p>
                </Col>
              </Row>
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
    <div class="">
      <div @click="goIndex"  class="i-button" style="background-color:#19be6b;">
        返回首页
        <Icon type="chevron-right"></Icon>
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
.member-container{
  margin-top: 20px;
}
</style>
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
      this.getAllTeams();
      this.getAllTeamLogos();
      this.getAllMemberAvatars();
    },
  };
</script>
