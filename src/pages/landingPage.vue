<template>
  <div>
    <div class="bg-enter" v-if="showLogo">
      <div style="margin-top: 100px;">
        <Button type="default" shape="circle" icon="ios-locked" @click="setMode(1)" disabled>绝地求生</Button>
        <Button type="primary" shape="circle" icon="xbox" @click="setMode(2)">双塔奇兵</Button>
        <Button type="default" shape="circle" icon="ios-locked" @click="setMode(3)">深渊大乱斗</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'landingPage',
    data() {
      return {
        showLogo: true,
      };
    },
    methods: {
      ...mapActions([
        'getAllBattleThemes',
        'setGameMode',
      ]),
      close() {
        this.showLogo = false;
      },
      setMode(mode) {
        console.log('game mode', mode);
        this.setGameMode(mode);
        this.showLogo = false;
        if (mode === 2) {
          this.$router.push('/chooseTeamPage');
        } else if (mode === 3) {
          this.$router.push('/chooseTeamPage2');
        }
      },
    },
    computed: {
      ...mapGetters([
        'selectedTheme',
      ]),
      bgImage() {
        let url = 'url(/static/img/battle_bg/team_bg_1.jpg)';
        if (this.selectedTheme && this.selectedTheme.mainBgImg && this.selectedTheme.mainBgImg.URL) {
          url = `url(${this.selectedTheme.mainBgImg.URL})`;
        }
        console.log('bg img:', url);
        return url;
      },
    },
    created() {
      // 获取主题包，设置为默认主题
      this.getAllBattleThemes();
    },
  };
</script>

<style scoped>


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
