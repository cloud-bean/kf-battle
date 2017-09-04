<template>
  <Card style="text-align: left; margin-bottom: 5px;">
    <p slot="title">
      {{ member.name }}
      <span style="color: #57c5ff">【level {{member.option.level}}, 悦币 {{member.option.goldToken}}】</span>
    </p>
    <p slot="extra">
      <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get}}</span>
      /
      <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{member.lost}}</span>
      <Button shape="circle" size="small" style="margin-left: 10px;">
        <Icon color="green" type="plus-round"></Icon>
        <Icon color="red" type="minus-round"></Icon>
      </Button>
    </p>
    <div style="text-align:left; margin: -10px;">
      <Tooltip placement="top" v-for="card in member.cards">
        <img style="width: 80px; margin: 0 5px;" :src="card.imageURL">
        <div slot="content">
          <p>{{card.name}}</p>
          <p><i>{{card.description}}</i></p>
        </div>
      </Tooltip>
      <!--<img style="width: 80px; margin: 0 5px;" :src="card.imageURL" v-for="card in member.cards">-->
    </div>
  </Card>
</template>

<script>
  export default {
    name: 'MemberCell',
    props: ['member']
  }
</script>

<style scoped>
</style>


