<template>
  <div id="app">
    <router-view></router-view>

    <div class="bg">
    </div>
    <transition name="fade">
    <div class="bg-enter" v-if="showLogo" @click="close">
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showLogo: true,
    };
  },
  methods: {
    close() {
      this.showLogo = false;
    },
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  font-size: 20pt;
  /*overflow:hidden;*/
  height: 100%;
  width: 100%;
  position: absolute;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/static/img/battle_bg/team_bg_3.jpeg") no-repeat #000;
  background-size: cover;
  z-index: -1;
}
.bg-enter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/static/img/enterbg.jpg") no-repeat #000;
  background-size: cover;
  z-index: 999;
}
.container {
  position: relative;
  margin: auto;
  width: 95%;
  top: 2rem; left: 0; bottom: 0; right: 0;
  /*margin: 2rem 2rem;*/
  padding: 2rem 2rem;
  background-color: rgba(255,255,255,.9);
  height: 90%;
  border-radius: .5rem;
  box-shadow: 0 0 15px #000;
  overflow: scroll;
}
.title-area {
  font-size: 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.3rem;
}
.main-area{
  padding: 1rem 4rem;
}
.button-area {
  padding: 0 5rem;
    bottom: 1rem;
    position: absolute;
   left: 0;
   right: 0;
   bottom: 2rem;
   margin:auto;
  }
  .i-button{
    padding: 1rem;
    background-color: #2d8cf0;
    max-width: 60rem;
    min-width: 10rem;
    width:15rem;
    height:5rem;
    color: #fff;
    border-radius: .5rem;
    border:1px solid #eee;
    margin: 0 auto;
    box-shadow: 0 0 2px #888;
    font-size: 1.8rem;
    text-align: center;
  }
</style>
