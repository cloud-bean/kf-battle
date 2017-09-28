<template>
  <div style="display: inline-block;">
    <img style="width: 150px; margin: 0 5px;" :src="card.file.URL + '-kf_card_w200_h460'">
    <div slot="content">
      <p>{{card.name}}</p>
      <p>{{'LVL. ' + card.level}}</p>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>


<script>
  export default {
    name: 'cardItem',
    props: ['card'],
  };
</script>
