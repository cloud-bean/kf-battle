<template>
  <div style="width: 95%; margin: 10px auto; overflow:scroll;">
    <Affix>
      <span @click="goIndex" class="demo-affix" style="padding: 10px; vertical-align: middle; color: white; background-color: green; border-radius: 5px;">
        <Icon type="chevron-left"></Icon>
        重返战场
      </span>
    </Affix>

    <div>
      <Button @click="openSetThemeModal()">选择主题</Button>
    </div>

    <Modal
      title="设置主题"
      v-model="showSelectThemeModal"
      width="80%"
      class-name="vertical-center-modal">
      <p slot="footer"></p>
      <div v-for="theme in battleThemes" :key="theme._id" style="display: inline-block; text-align: center;">
        <img :src="theme.image ? theme.image.URL : '/static/img/vay2.png'"  style="margin: 10px; max-width: 8rem; max-height: 8rem;">
        <p>{{ theme.name }}</p>
        <Tag checkable color="yellow" v-if="selectedTheme && selectedTheme._id === theme._id">已选中的主题</Tag>
        <Button v-else @click="setTheme(theme)">使用主题</Button>
      </div>
    </Modal>
  </div>
</template>
<style scoped>
.member-container{
  margin-top: 20px;
}
</style>
<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'customPage',
    data() {
      return {
        showSelectThemeModal: true,
        themeId: '',
      };
    },
    computed: {
      ...mapGetters([
        'battleThemes',
        'selectedTheme',
      ]),
    },
    methods: {
      ...mapActions([
        'getAllBattleThemes',
        'setSelectedTheme',
      ]),
      setTheme(theme) {
        this.setSelectedTheme(theme);
        this.showSelectThemeModal = false;
      },
      openSetThemeModal() {
        this.showSelectThemeModal = !this.showSelectThemeModal;
      },
      goIndex() {
        this.$router.push('/');
      },
    },
    created() {
      this.getAllBattleThemes();
    },
  };
</script>
