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
    max-width: 100px;
    padding: 20px;
  }
</style>
