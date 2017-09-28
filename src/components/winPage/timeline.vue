<template>
  <div class="">
    <Timeline class="timeline-box" pending>
      <Timeline-item v-for="item, index in feeds" :color="item.color" :key="index">
        <p class="time">{{ moment(item.created).from(startTime)}}</p>
        <p class="content">
          <span>{{ item.people + '(' + item.groupName + ')' }}</span>
          <span>{{item.description}}</span>
        </p>
      </Timeline-item>
      <Timeline-item color="black">
        开始于: {{moment(startTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}}
      </Timeline-item>
    </Timeline>
  </div>
</template>

<script>
  const moment = require('moment');
  moment.locale('zh-cn');

  export default {
    name: 'timelineComponent',
    data() {
      return {
      };
    },
    props: ['feeds', 'startTime'],
    computed: {
    },
    methods: {
      moment,
    },
  };
</script>
<style scoped>
  .time {
    font-size: 14px;
    font-weight: bold;
  }

  .content {
    padding-left: 5px;
    font-size: 12px;
  }

  .timeline-box {
    text-align: left !important;
    margin: 20px;
    padding: 10px;
    background-color: ghostwhite;
    -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
    height: 400px;
    overflow-y: scroll;
  }

  .container {
    text-align: right;
    /*border-left: 3px solid whitesmoke;*/
    /*border-right: 3px solid whitesmoke;*/
    min-height: 800px;
    padding: 10px;
  }
</style>
