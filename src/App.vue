<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  font-size: 14pt;
  overflow:hidden;
}
.bg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("./assets/battle_bg/team_bg_1.jpg") no-repeat #000;
  background-size: cover;
  z-index: -1;
}
.container{
  margin: 2rem 2rem;
  padding: 2rem 2rem;
  background-color: rgba(255,255,255,.9);
  height: 45rem;
  border-radius: .5rem;
  box-shadow: 0 0 15px #000;
  overflow: scroll;
  position: relative;
}
</style>
