<template>
  <table class="member-table" style="width: 100%; border-collapse: separate;  border-spacing:0px 1rem;">
    <tr>
      <th>形象</th>
      <th>姓名</th>
      <th>得分</th>
      <th>丢分</th>
      <th>经验</th>
      <th>贡献</th>
    </tr>
    <tr v-for="member in members" :class="member.isMVP ? 'winner': ''">
      <td v-if="member.isMVP"><Badge :count="honorName"><img  style="width: 4rem;"  :src="member.profileImageURL"></Badge></td>
      <td v-if="!member.isMVP"><img  style="width: 4rem;"  :src="member.profileImageURL"></td>
      <td><span>{{member.displayName}}</span></td>
      <td><span>{{member.get}}</span></td>
      <td><span>{{member.lost}}</span></td>
      <td><span>{{ (member.get + member.lost) * 100}}</span></td>
      <td>
        <span>{{ parseInt((member.get + member.lost) / (groupScore == 0?1:groupScore) * 100, 10) / 4 }}</span>
        <!-- <Tag v-if="member.isMVP" color="red">MVP</Tag> -->
      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    props: ['members', 'groupScore', 'honorName'],
    data() {
      return {

      };
    },
  };
</script>

<style scoped>
img{
  vertical-align: middle;
}
.member-table tr{
  /*line-height: 60px;*/
  font-size: 2rem;
  /*background-color: rgba(255, 255, 255, 0.9);*/
  /*vertical-align: bottom;*/
}
  .winner {
    background-color: rgba(255, 0, 0, 0.2);
    margin: 2px;
  }

</style>
