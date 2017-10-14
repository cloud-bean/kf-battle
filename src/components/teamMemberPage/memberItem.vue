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
        onLine: true,
        msg: 'hello',
      };
    },
    methods: {
      handleClick() {
        this.onLine = !this.onLine;
        this.setMemberOnline(this.memberData, this.groupIndex, this.onLine);
      },
    },
    mounted() {
      this.setMemberOnline(this.memberData, this.groupIndex, this.onLine);
    },
  };
</script>

<style scoped>
.member-item{
  font-size: 1.5rem;
}
.online{
  color: #19be6b;
}
.offline{
  color: #ccc;
}
</style>
