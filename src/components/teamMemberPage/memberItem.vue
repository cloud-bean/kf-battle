<template>
  <div @click="handleClick">
    <Card class="member-item" >
      <!-- <Avatar size="large" shape="square" :src="memberData.profileImageURL" /> -->
      <div><Icon type="record" v-bind:class="[onLine?'online':'offline']"/>   {{memberData.displayName}}</div>
    </Card>
  </div>

</template>

<script>
  export default {
    props: ['memberData', 'setMemberOnline', 'groupIndex'],
    data() {
      return {
        onLine: false,
      };
    },
    methods: {
      handleClick() {
        console.log(this.groupIndex, this.memberData);
        this.onLine = !this.onLine;
        this.setMemberOnline(this.memberData, this.groupIndex, this.onLine);
      },
    },
  };
</script>

<style scoped>
.member-item{
  font-size: 1rem;
}
.online{
  color: #19be6b;
}
.offline{
  color: #ccc;
}
</style>
