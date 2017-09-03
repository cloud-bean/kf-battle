<template>
  <div id="app">
    <router-view></router-view>
    <div class="bg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
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

</style>
