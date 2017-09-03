<template>
  <img :src="card.imageURL" class="card">
</template>

<script>
  export default {
    name: 'card',
    props: ['card']
  }
</script>

<style scoped>
  .card {
    max-width: 120px;
    margin:10px 10px;
  }
</style>
