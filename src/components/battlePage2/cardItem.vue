<template>
  <div class="">
    <div style="display: inline-block;" @click="useCard()">
      <img style="width: 10rem; margin: 0 1rem;" :src="card.file.URL + '-kf_card_w200_h460'">
      <!-- <div slot="content">
        <p>{{card.name}}</p>
        <p>{{'LVL. ' + card.level}}</p>
      </div> -->
    </div>
    <transition enter-active-class="flipInY" leave-active-class="flipOutY">

       <div class="lock animated" v-if="display"   style="text-align: center; margin: 5px;  -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" @click="useCard()">
           <div class="animated" v-if="display">
             <img   style="width: 30rem; margin: 5px;margin-bottom:0; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" :src="card.file.URL + '-kf_card_w200_h460'">
             <p style="font-size: 3rem; padding:.2rem;color:white;">{{card.name}}</p>
           </div>
      </div>
    </transition>

    <audio ref="cardUse" :src="card.audioFile ? card.audioFile.URL : '/static/audio/Events/useCard.m4a'" preload="auto" style="display: none;"></audio>

  </div>

</template>

<style lang="less" scoped>
.lock{
  position: fixed;
  top: 0;
  bottom:0;
  left: 0;
  right:0;
  width: 100%;
  height: 100%;
  // background-color: rgba(255,255,255,.7);
  background-size: cover;
  z-index: 999;
}
</style>


<script>
  export default {
    data() {
      return {
        display: false,
      };
    },
    name: 'cardItem',
    props: ['card'],
    methods: {
      useCard() {
        this.$refs.cardUse.play();
        this.display = !this.display;
      },
    },
  };
</script>
