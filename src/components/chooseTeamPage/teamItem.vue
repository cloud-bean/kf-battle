<template>
  <div class="team-item">
    <Tooltip placement="top">
      <div class="team-head">
        <div class="mask" v-if="selected">
          <Icon type="checkmark" size="80" class="icon"></Icon>
        </div>
        <img :src="teamData.logo ? teamData.logo.URL : 'static/img/vay2_cut.png'" alt="">
      </div>
      <div slot="content">
        {{teamData.description}}
      </div>
    </Tooltip>
    <div class="team-name">
      <p>{{teamData.name}}</p>
      <Tag :color="selected ? 'green' : 'gray'">{{ teamData.students.length }}人</Tag>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['teamData', 'selected'],
    data() {
      return {
        // selected: false,
      };
    },
    methods: {
    },
  };
</script>

<style scoped>
  .team-item {
    /*padding: 2rem;*/

  }

  .mask {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    /*border: 1px solid #ccc;*/
    /*box-shadow: 0 0 5px #888;*/
  }

  img {
    width: 10rem;
    height: 10rem;
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
