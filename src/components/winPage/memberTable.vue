<template>
  <table class="member-table" style="width: 100%; border-collapse: collapse; padding: 10px;">
    <tr>
      <th>头像</th>
      <th>名字</th>
      <th>得分</th>
      <th>丢分</th>
      <th>获得经验值</th>
      <th>贡献值</th>
    </tr>
    <tr v-for="member in members" :class="member.isMVP ? 'winner': ''">
      <td v-if="member.isMVP"><Badge count="MVP"><img  style="width: 40px;"  :src="member.profileImageURL"></Badge></td>
      <td v-if="!member.isMVP"><img  style="width: 40px;"  :src="member.profileImageURL"></td>
      <td><span>{{member.displayName}}</span></td>
      <td><span>{{member.get}}</span></td>
      <td><span>{{member.lost}}</span></td>
      <td><span>{{ (member.get + member.lost) * 100}}</span></td>
      <td>
        <span>{{ parseInt((member.get + member.lost) / groupScore * 100, 10) / 4 }}</span>
        <!-- <Tag v-if="member.isMVP" color="red">MVP</Tag> -->
      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    props: ['members', 'groupScore'],
    data() {
      return {
  
      };
    },
  };
</script>

<style scoped>
img{
  vertical-align: middle;
  box-shadow:  0 0  1px #888;

}
.member-table tr{
  line-height: 60px;
  /*background-color: rgba(255, 255, 255, 0.9);*/
  /*vertical-align: bottom;*/
}
  .winner {
    background-color: rgba(255, 0, 0, 0.2);
    margin: 2px;
  }
</style>
