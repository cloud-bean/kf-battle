<template>
  <div id="app">
    <router-view></router-view>
    <div class="bg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  font-size: 14pt;
  overflow:hidden;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/static/battle_bg/team_bg_1.jpg") no-repeat #000;
  background-size: cover;
  z-index: -1;
}
.container {
  position: relative;
  top: 0;
  left: 0;
  margin: 2rem 2rem;
  padding: 2rem 2rem;
  background-color: rgba(255,255,255,.9);
  height: 46rem;
  border-radius: .5rem;
  box-shadow: 0 0 15px #000;
  overflow: scroll;
}
.title-area {
  font-size: 1.5rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.3rem;
}
.main-area{
  padding: 1rem 4rem;
}
.button-area {
  padding: 0 5rem;
    bottom: 2rem;
    position: absolute;
    /*top:0;*/
   left: 0;
   right: 0;
   bottom: 2rem;
   margin:auto;
  }
</style>
