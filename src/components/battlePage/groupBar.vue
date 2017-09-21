<template>
  <div>
    <Row v-if="position === 'left'" type="flex" align="middle" class="code-row-bg white-bg">



      <!-- <Col span="6" >

      </Col> -->
      <Col span="18">
        <span class="teamName">{{data.name}}</span>
      </Col>
      <Col span="6">
        <img :src="data.logo.URL" style="width: 100%;">

      </Col>
    </Row>
    <Row v-if="position === 'right'" type="flex" align="middle" class="code-row-bg white-bg">
      <Col span="6">
        <img :src="data.logo.URL"  style="width: 100%;">

      </Col>
      <Col span="18">
        <span class="teamName">{{data.name}}</span>
      </Col>
      <!-- <Col span="6" class="teamName">

      </Col> -->


    </Row>
  </div>
</template>

<script>
  import MemberCell from './memberCell';
  export default {
    name: 'GroupBar',
    props: ['position', 'data'],
    data() {
      return {};
    },
    components: {
      'member-cell': MemberCell,
    },
  };
</script>

<style scoped lang="less">
  .white-bg {
    // background-color: #fff;
  }

  .teamName {
    font-size: 4rem;
    // font-weight: 700;
    // text-shadow: 1px 1px 4px gray;
    color:#7b7b9e;
    text-align: left;
  }
  // img{
  //   width: 100px;
  //   height: 100px;
  //   border-radius: 50%;
  //   border: 1px solid #ccc;
  //   box-shadow: 0 0 5px #888;
  // }

</style>
