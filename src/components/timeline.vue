<template>
  <div class="container">
    <Button type="warning">游戏结束</Button>
    <Timeline class="timeline-box" pending>
      <Timeline-item v-for="item in timelineData" :color="item.color">
        <p class="time">{{ moment(item.created).fromNow()}}</p>
        <p class="content">{{ '【' +  item.type  + '】' + item.groupName + ', ' + item.description}}</p>
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
  import timelineData from '../mockData/timeline.json';

  export default {
    name: 'timelineComponent',
    data() {
      return {
        timelineData: timelineData.events,
        startTime: '2017-08-24T02:27:43.536Z',
      };
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
    font-size: 18px;
  }

  .timeline-box {
    text-align: left !important;
    margin: 20px;
    padding: 10px;
    background-color: ghostwhite;
  }

  .container {
    text-align: right;
    border-left: 3px solid whitesmoke;
    border-right: 3px solid whitesmoke;
    min-height: 800px;
    padding: 10px;
  }
</style>
