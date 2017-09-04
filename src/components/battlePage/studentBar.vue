<template>
  <div style="background-color: whitesmoke; display: inline-flex">
    <img :src="avatar" style="width: 120px; height: 120px;">
    <div>
      <p>{{name}}</p>
      <p>+  12分</p>
      <p>-   3分</p>
    </div>
    <div>
      卡牌
      1， 2， 3
    </div>
    <div>
      <Button type="primary">OP</Button>
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        avatar: 'http://wx.qlogo.cn/mmopen/nOPEgiaj5ThpPueoLQZ7L966abkK82JMbDhOkMNejp6f3A5YSAlhRxuT1aiaAXkC8BN85PhgfJiaaJQDbdILtr0qMiacNxfDoyKY/0',
        name: '刘霄阳',
      };
    },
  };
</script>
