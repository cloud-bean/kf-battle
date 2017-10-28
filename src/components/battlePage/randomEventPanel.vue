<template>
  <div class="panel">
    <Row type="flex" justify="center" align-items="center">
      <div class="i-button" @click="randomEvent"  v-if="startButton">命运之轮</div>
      <div class="i-button" v-if="!startButton" style="background-color:#eee">命运之轮</div>
    </Row>
    <Row type="flex" >
      <Col span="4" v-for="event,index in randomEvents" :key="event._id" class="random-box"
           :class="[finalSelectedIndex == index ? 'selected': '', event.isSelected ? 'online' : 'offline']">
        <div @click="toggleSelected(index)">
          <img v-if="event.file" style=" height: 8rem;" :src="event.file.URL">
          <img v-else="event.file" style=" height: 8rem;" :src="defaultRandomImgURL">
          <p style="font-size: 1.5rem; font-weight: 600;">{{ event.name }}</p>
          <p style="font-size: 1rem;">{{ event.description }}</p>
        </div>

      </Col>
    </Row>

    <Row type="flex" justify="center" align-items="center">
      <ButtonGroup>
        <Button @click="setAllBoxs(true)" style="font-size: 2em;">全选</Button>
        <Button @click="setAllBoxs(false)" style="font-size: 2em;">全不选</Button>
      </ButtonGroup>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ['randomEvents'],
    data() {
      return {
        defaultRandomImgURL: '/static/img/random.gif',
        startButton: true,
        selectedIndex: -1,
        finalSelectedIndex: -1,
      };
    },
    methods: {
      toggleSelected(index) {
        if (this.startButton) {
          this.randomEvents[index].isSelected = !this.randomEvents[index].isSelected;
          this.$forceUpdate();
        }
      },
      randomEvent() {
        this.startButton = false;

        const selectedEvents = [];
        const selectedEventsIndexArray = [];
        this.randomEvents.forEach((item, index) => {
          if (item.isSelected) {
            selectedEvents.push(selectedEvents);
            selectedEventsIndexArray.push(index);
          }
        });

        const max = selectedEvents.length;

        if (this.randomTimer) {
          clearInterval(this.randomTimer);
          this.randomTimer = null;
        }

        this.randomTimer = setInterval(() => {
          this.finalSelectedIndex = selectedEventsIndexArray[parseInt(Math.random() * max, 10)];
        }, 50);
        setTimeout(() => {
          if (this.randomTimer) {
            clearInterval(this.randomTimer);
          }
          this.startButton = true;
        }, 2000);
      },
      setAllBoxs(isSelected) {
        this.randomEvents.map((event) => {
          event.isSelected = isSelected;
          return 0;
        });
        this.$forceUpdate();
      },
    },
    mounted() {
      this.setAllBoxs(true);
    },
  };
</script>

<style lang="less" scoped>
  .panel{
    padding: .5rem;
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
