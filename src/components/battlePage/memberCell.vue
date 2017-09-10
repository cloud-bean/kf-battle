<template>
  <Card style="text-align: left; margin-bottom: 5px;">
    <p slot="title">
      {{ member.displayName }}
      <span style="color: #57c5ff">【level {{member.option.level}}，经验 {{member.option.exp}}，悦币 {{member.option.goldToken}}】</span>
    </p>
    <p slot="extra">
      <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get || 0}}</span>
      /
      <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{member.lost || 0}}</span>
      <Button shape="circle" size="small" style="margin-left: 10px;">
        <Icon color="green" type="plus-round"></Icon>
        <Icon color="red" type="minus-round"></Icon>
      </Button>
    </p>
    <div style="text-align:left; margin: -10px;">
      <Tooltip placement="top" v-for="card, index in member.cards"  :key="index">
        <div style="text-align: center; margin: 5px; background-color: rgba(204,204,204,0.31); -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;">
          <img style="width: 60px; margin: 5px; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" :src="card.file.URL">
          <p style="font-size: 0.8em;">{{card.name}}</p>
        </div>
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
    props: ['member'],
  };
</script>

<style scoped>
</style>
