<template>
  <div class="team-item">
    <Tooltip placement="top">
      <div class="team-head" @click="handleClick">
        <div class="mask" v-if="selected">
          <Icon type="checkmark" size="30" class="icon"></Icon>
        </div>
        <img :src="teamData.logo.URL" alt="">
      </div>
      <div slot="content">
        {{teamData.description}}
      </div>
    </Tooltip>
    <div class="team-name">
      <p>{{teamData.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['teamData', 'onSelect'],
    data () {
      return {
        selected: false
      }
    },
    methods: {
      handleClick () {
        this.selected = !this.selected
        this.onSelect(this.teamData, this.selected)
      }
    }
  }
</script>

<style scoped>
  .team-item {
    /*padding: 2rem;*/

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

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #888;
  }

  .team-head {
    position: relative;
  }

  .icon {
    margin-top: 30px;
    color: #eee;
  }
</style>
