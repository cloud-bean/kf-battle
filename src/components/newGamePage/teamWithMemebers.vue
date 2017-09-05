<template>
  <div  class="team-item">
    <div class="team-head">
      <img :src="teamData.logo.URL" alt="">
    </div>
    <div class="team-name">
      {{teamData.name}}
    </div>
    <Row class="members" :gutter="16" type="flex" justify="start">
      <Col span="8" v-for="member in teamData.students" class="member-item">
          <member-item :memberData="member"></member-item>
      </Col>
    </Row>
  </div>
</template>

<script>
import memberItem from './memberItem';
export default {
  props: ['teamData'],
  data() {
    return {};
  },
  methods: {},
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
      width: 10rem;
      height: 10rem;
      /*border: 2px solid white;*/
      border-radius:50%;
      box-shadow:0px 0px 5px #555555;
  }
  .team-name {
    font-size: 1.5rem;
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
