<template>
  <div class="panel">
    <!-- <Row type="flex" justify="center" align-items="center">
      <div class="i-button" @click="randomEvent"  v-if="startButton">命运之轮</div>
      <div class="i-button" v-if="!startButton" style="background-color:#eee">命运之轮</div>
    </Row> -->
    <!-- <Row type="flex" > -->
      <!-- <Col span="4" v-for="event,index in randomEvents" :key="event._id" class="random-box"
           :class="[finalSelectedIndex == index ? 'selected': '', event.isSelected ? 'online' : 'offline']"> -->
        <div class="event-content">
          <div class="desc">
            <p style="font-size: 5rem; font-weight: 600; ">{{selectedEvent.name}}</p>
            <p style="font-size: 3rem;">{{selectedEvent.description}}</p>
          </div>
          <img v-if="selectedEvent.file" style="height:29.5rem" :src="selectedEvent.file.URL">
          <img v-else="selectedEvent.file" style="height:29.5rem" :src="defaultRandomImgURL">
        </div>

      <!-- </Col> -->
    <!-- </Row> -->

    <!-- <Row type="flex" justify="center" align-items="center">
      <ButtonGroup>
        <Button @click="setAllBoxs(true)" style="font-size: 2em;">全选</Button>
        <Button @click="setAllBoxs(false)" style="font-size: 2em;">全不选</Button>
      </ButtonGroup>
    </Row> -->
  </div>
</template>

<script>
  export default {
    props: ['randomEvents', 'playMusic'],
    data() {
      return {
        defaultRandomImgURL: '/static/img/randomEvent.jpg',
        startButton: true,
        selectedIndex: -1,
        finalSelectedIndex: -1,
        selectedEvent: -1,
      };
    },
    methods: {
      toggleSelected(index) {
        if (this.startButton) {
          this.randomEvents[index].isSelected = !this.randomEvents[index].isSelected;
          this.$forceUpdate();
        }
      },
      async randomEvent() {
        this.startButton = false;

        const selectedEvents = [];
        const selectedEventsIndexArray = [];
        await this.randomEvents.forEach((item, index) => {
          if (item.isSelected) {
            selectedEvents.push(selectedEvents);
            selectedEventsIndexArray.push(index);
          }
        });

        const max = selectedEvents.length;

        // if (this.randomTimer) {
        //   clearInterval(this.randomTimer);
        //   this.randomTimer = null;
        // }

        // this.randomTimer = setInterval(() => {
        //   this.finalSelectedIndex = selectedEventsIndexArray[parseInt(Math.random() * max, 10)];
        // }, 50);
        this.finalSelectedIndex = selectedEventsIndexArray[parseInt(Math.random() * max, 10)];
        this.selectedEvent = this.randomEvents[this.finalSelectedIndex];

        this.playMusic(this.selectedEvent._id);

        // setTimeout(() => {
        //   if (this.randomTimer) {
        //     clearInterval(this.randomTimer);
        //   }
        //   this.startButton = true;
        // }, 1500);
      },
      setAllBoxs(isSelected) {
        this.randomEvents.map((item) => {
          item.isSelected = isSelected;
          return 0;
        });
        this.$forceUpdate();
      },
    },
    beforeMount() {
      console.log('beforeMount');
      this.setAllBoxs(true);
      this.randomEvent();
    },
    updated() {
      // this.randomEvent();
    },
  };
</script>

<style lang="less" scoped>
  .panel{
    // padding: .5rem;
    .event-content{
      position: relative;
    }
    .desc{
      width: 100%;
      position: absolute;
      color:white;
      text-align: center;
      margin: 0 auto;
      bottom: 1rem;
      background-color: rgba(0,0,0,.3);
    }
  }

  .random-box {
    text-align: center;
    background-color: aliceblue;
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #888;
  }

  .selected {
    background-color: #ff6d10 !important;
    color: white !important;
    border: 1px solid gold !important;
  }

  .offline {
    opacity: .2;
  }

  .online {
    opacity: 1;
  }
</style>
