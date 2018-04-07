<template>
  <div>
    <div class="bg-enter" v-if="showLogo">
      <!--<Button type="default" size="large" icon="ios-cog" @click="setMode(1)">配置</Button>-->
      <ButtonGroup>
        <Button type="primary" size="default" icon="ios-color-wand-outline" @click="goBattleThemePage">主题</Button>
        <Button type="primary" size="default" icon="ios-color-filter-outline" @click="goCustomPage">团队</Button>
      </ButtonGroup>
      <Carousel autoplay v-model="value1" loop>
        <CarouselItem>
          <br>
          <br>
          <Button class="large-plus" type="primary" shape="circle" size="large" icon="xbox" @click="setMode(1)">双塔奇兵</Button>
          <br>
          <br>
        </CarouselItem>
        <CarouselItem>
          <br>
          <br>
          <Button class="large-plus" type="success" shape="circle" size="large" icon="ios-paw" @click="setMode(2)">深渊大乱斗</Button>
          <br>
          <br>
        </CarouselItem>
        <CarouselItem>
          <br>
          <br>
          <Button class="large-plus" type="warning" shape="circle" size="large" icon="social-snapchat-outline" @click="setMode(3)" >绝地求生</Button>
          <br>
          <br>
        </CarouselItem>
        <CarouselItem>
          <br>
          <br>
          <Button class="large-plus" type="error" shape="circle" size="large" icon="social-freebsd-devil" @click="setMode(4)" disabled>Boss团战</Button>
          <br>
          <br>
        </CarouselItem>
      </Carousel>
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
        value1: 0,
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
        if (mode === 1) {
          this.$router.push('/chooseTeamPage');
        } else if (mode === 2) {
          this.$router.push('/chooseTeamPage2');
        } else if (mode === 3) {
          this.$router.push('/chooseTeamPage3');
        } else if (mode === 4) {
          this.$router.push('/chooseTeamPage4');
        }
      },
      goCustomPage() {
        this.$router.push('/custom');
      },
      goBattleThemePage() {
        this.$router.push('/battleTheme');
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
  .large-plus {
    font-size: 48px !important;
    padding: 20px 40px !important;
    margin-right: 20px !important;
  }
</style>
