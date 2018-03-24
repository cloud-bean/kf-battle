<template>
    <div class="member-cell" @click="getScore()">
        <div class="mask">
          <div class="mark">
            <span class="color-score">{{member.get|| 0}}</span>
          </div>
        </div>
        <div class="member-head">
          <img :src="member.profileImageURL"></img>
        </div>
        <span style="font-size:1.5rem; color:#fff;">{{ member.displayName }}</span>
    </div>
</template>

<script>
  export default {
    name: 'MemberCell',
    props: ['member', 'addScore'],
    methods: {
      getScore() {
        this.addScore({ member: this.member, score: 1 });
        this.$forceUpdate();
      },
    },
  };
</script>

<style scoped lang="less">
  .member-cell{
    // margin-top: 1rem;
    // background-color: rgba(255,255,255,.5);
    // border:1px solid #fff;
    // padding: 1px;
    // box-shadow: 0 0 10px #888;
    // -webkit-border-radius: 5px;
    // -moz-border-radius: 5px;
    // border-radius: 5px;
  }
  .member-head{
    // padding: 0rem;
    // border-bottom: 1px solid #ccc;
  }
  img{
    // border-radius: 5px;
    width: 5rem;
    height: 5rem;
  }

  .mark{
    font-size: 2rem;
    color: #ccc;
    margin: 0 auto;
    text-align: center;
  }
  .color-score {
    color: #fff;
    font-size: 3rem;
  }
  .mask {
    left:50%;
    // top:50%;
    // margin-top:-2rem;
    margin-left:-2.5rem;
    width: 5rem;
    height: 5rem;
    border-radius: 5px;
    // border-radius: 50%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    /*border: 1px solid #ccc;*/
    /*box-shadow: 0 0 5px #888;*/
  }
</style>
