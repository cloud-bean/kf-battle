<template>
  <div>
    <p>Winner</p>
    <span>{{ winner }}</span>
    <button @click="showTheWinner">Show the winner</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        winner: 'who is the winner',
      };
    },
    methods: {
      showTheWinner() {
        console.log('clicked!', this.winner);
        this.winner = 'howard!';
      },
    },
  };
</script>
