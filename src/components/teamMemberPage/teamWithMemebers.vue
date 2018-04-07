<template>
  <div  class="team-item">
    <div class="team-head">
      <img :src="teamData.logo.URL" alt="">
    </div>
    <div class="team-name">
      {{teamData.name}}
    </div>
    <Row class="members" :gutter="16" type="flex" justify="start">
      <Col span="8" v-for="member, index in teamData.students" class="member-item"  :key="index">
          <member-item :memberData="member" :setMemberOnline="setMemberOnline" :groupId="teamData._id"></member-item>
      </Col>
      <Col span="8" class="member-item" @click.native="showAddTempMemberPanel">
          <Card ><Icon type="plus-round" size="35"></Icon></Card>
      </Col>
    </Row>
    <Modal
      v-model="showAddMemberModal"
      width="20%"
      class-name="vertical-center-modal">
      <p slot="header" style="text-align: center;">
        添加队员
      </p>
      <div class="panel" style="text-align:center;">
          <div style="text-align:center;font-size:2.5rem;color:#2d8cf0">
            添加队员
          </div>
          <div style="margin-top:2rem;">
            <img src="static/img/defaultUserHead.jpg" style="width:5rem;height:5rem;border-radius:0;margin:0 auto;" alt="">
            <div style="margin-top:2rem;">
              <input type="text" v-model="tempMember" value="" placeholder="队员姓名" style="text-align:center;font-size:1.5rem;width:10rem;border:1px solid #888;">
            </div>
          </div>

          <!-- <div class=""> -->
            <button @click="addMember" class="i-button" style="margin-top:2rem;height:3rem;font-size:1.2rem;padding:5px;width:6rem;">加入战队</button>
          <!-- </div> -->
      </div>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>

<script>
import memberItem from './memberItem';
import { mapActions } from 'vuex';

export default {
  props: ['teamData', 'setMemberOnline'],
  data() {
    return {
      showAddMemberModal: false,
      tempMember: '',
    };
  },
  methods: {
    showAddTempMemberPanel() {
      this.showAddMemberModal = true;
    },
    addMember() {
      this.addTempMember({
        member: {
          displayName: this.tempMember,
          profileImageURL: 'static/img/defaultUserHead.jpg',
          isSelected: true,
          _id: '',
          groupId: this.teamData._id,
          option: {
            exp: 0,
            goldToken: 0,
            level: 0,
          },
        },
      });
      this.tempMember = '';
      this.showAddMemberModal = false;
    },
    ...mapActions('team', [
      'addTempMember',
    ]),
  },
  components: {
    memberItem,
  },
};
</script>

<style scoped>
  .team-item {
    margin: 2rem;
    padding: 1rem;
    /*border-radius:10px;*/

    /*border: 1px solid #ccc;*/
  }
  .team-head {
    position: relative;
  }
  img {
      width: 15rem;
      height: 15rem;
      /*border: 2px solid white;*/
      border-radius:50%;
      box-shadow:0px 0px 5px #555555;
  }
  .team-name {
    font-size: 2rem;
    line-height: 3rem;
  }
  .member-item{
    margin: .5rem 0;
  }
  .mask {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    /*border: 1px solid #ccc;*/
    /*box-shadow: 0 0 5px #888;*/
  }





  .icon {
    margin-top: 30px;
    color: #eee;
  }



  .members {
    /*text-align: center;*/
    /*display: inline-flex;*/
    margin-top: 20px;
  }

</style>
