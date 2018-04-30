<template>
    <div class="bg-enter" v-if="showLogo">

      <div class="" style="position:fixed;right:2rem;top:2rem;">
        <Button type="success" size="large" icon="ios-color-filter-outline" @click="goCustomPage">团队配置</Button>
      </div>
      <div class="title" >
        悦盒战场
        <div style="font-size:1.5rem;color:#ccc;">
          v1.0
        </div>
        <Button class="large-plus" type="info" size="large" icon="xbox" @click="setMode(1)">巅峰对决</Button>
        <Button class="large-plus" type="info" size="large" icon="ios-paw" @click="setMode(2)">混乱之治</Button>
        <Button class="large-plus" type="info" size="large" icon="social-snapchat-outline" @click="setMode(3)" disabled>绝地求生</Button>
        <Button class="large-plus" type="info" size="large" icon="social-freebsd-devil" @click="setMode(4)" disabled>勇闯世界</Button>
      </div>
      <Row class="theme-panel" type="flex" justify="center">
        <Col span="4" v-for="theme in battleThemes" :key="theme._id" style="display: inline-block; text-align: center;" @click.native="setTheme(theme)">
          <img :src="theme.image ? theme.image.URL : '/static/img/vay2.png'"  style="margin: 10px; width: 5rem; height: 5rem;">
          <p style="font-size:1rem;">{{ theme.name }}</p>
          <Tag checkable color="yellow" v-if="selectedTheme && selectedTheme._id === theme._id">已选中的主题</Tag>
          <!-- <Button v-else @click="setTheme(theme)">使用主题</Button> -->
        </Col>
      </Row>

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
        'setSelectedTheme',

      ]),
      setTheme(theme) {
        this.setSelectedTheme(theme);
        // this.showSelectThemeModal = false;
      },
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
        'battleThemes',
        'selectedTheme',
      ]),
      bgImage() {
        let url = 'url(/static/img/battle_bg/team_bg_1.jpg)';
        if (this.selectedTheme && this.selectedTheme.mainBgImg && this.selectedTheme.mainBgImg.URL) {
          url = `url(${this.selectedTheme.mainBgImg.URL})`;
        }
        // console.log('bg img:', url);
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


  /* .bg-enter {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/static/img/enterbg.jpg") no-repeat #000;
    background-size: cover;
    z-index: 999;
  }  */
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
    font-size: 1.5rem !important;
    /* padding: 10px 20px !important; */
    /* margin-right: 20px !important; */
  }
  .theme-panel{
    margin:auto;
    padding: 1rem;
    background-color: rgba(255,255,255,.6);
    width:50%;
    border-radius: 10px;
    position:fixed;
    bottom:3rem;
    left:0;
    right:0;
  }
  .title{
    font-size: 3rem;
    color: #fff;
    padding: 2rem;
    background-color: rgba(0,0,0,.7);
    width:60%;
    margin: 5rem auto;

  }
</style>
