<template>
  <Timeline class="container" pending>
    <Timeline-item color="blue">
      <p class="time">10秒前</p>
      <p class="content">Alice 使用一张 抢答卡</p>
    </Timeline-item>
    <Timeline-item color="green">
      <p class="time">5分钟前</p>
      <p class="content">Frank 回答正确，解释正确完美且优雅，加 2 分</p>
    </Timeline-item>
    <Timeline-item color="red">
      <p class="time">10分钟前</p>
      <p class="content">Azur 打瞌睡，扣 1 分</p>
    </Timeline-item>
    <Timeline-item color="green">
      <p class="time">15分钟前</p>
      <p class="content">Tom 回答正确，解释正确完美且优雅，加 3 分</p>
    </Timeline-item>
    <Timeline-item color="green">
      <p class="time">19分钟前</p>
      <p class="content">Fisher 答案正确，解释错误，加 1 分</p>
    </Timeline-item>
    <Timeline-item color="white">
      一切才刚刚开始
    </Timeline-item>
  </Timeline>
</template>

<script>
  export default {

  }
</script>
<style scoped>
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .content{
    padding-left: 5px;
    font-size: 18px;
  }
  .container {
    text-align: left !important; margin: 20px; padding: 10px; background-color: ghostwhite;
  }
</style>
