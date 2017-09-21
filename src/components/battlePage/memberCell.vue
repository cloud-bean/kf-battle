<template>
  <div>
    <Card v-if="member.groupIndex == 0" style="text-align: left; margin-bottom: 5px;" @click.native="toggleOpModal(member)">
      <p slot="extra">
        {{ member.displayName }}
      </p>
      <p slot="title">
        <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get || 0}}</span>
        /
        <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{Math.abs(member.lost) || 0}}</span>

      </p>
      <span style="color: #57c5ff">
        <Tag type="border" color="green">可用卡牌数 {{member.cards.length}}</Tag>
        <Tag type="border" color="yellow">悦币 {{member.option.goldToken}}</Tag>
        <Tag type="border" color="blue">等级 {{member.option.level}}</Tag>
      </span>
      <Avatar size="large" shape="square" :src="member.profileImageURL" style="margin-left: 10px; float: right;"></Avatar>
    </Card>

    <Card v-if="member.groupIndex == 1" style="text-align: right; margin-bottom: 5px;" @click.native="toggleOpModal(member)">
      <p slot="extra">
        <span style="color: green;font-size: 1.2em; font-weight: 700;">+{{member.get || 0}}</span>
        /
        <span style="color: red;font-size: 1.2em; font-weight: 700;">-{{Math.abs(member.lost) || 0}}</span>
      </p>
      <p slot="title" style="text-align: left;">
        {{ member.displayName }}
      </p>
      <Avatar size="large" shape="square" :src="member.profileImageURL" style="margin-right: 10px; float: left"></Avatar>

      <span style="color: #57c5ff;">
        <Tag type="border" color="blue">等级 {{member.option.level}}</Tag>
        <Tag type="border" color="yellow">悦币 {{member.option.goldToken}}</Tag>
        <Tag type="border" color="green">可用卡牌数 {{member.cards.length}}</Tag>
    </span>
    </Card>
  </div>
</template>

<script>
  export default {
    name: 'MemberCell',
    props: ['member', 'toggleOpModal'],
  };
</script>

<style scoped lang="less">

img{
  border-radius: 10px;
  border: 1px solid #eee;
  // box-shadow: 0 0 5px #888;
  width:80px;

}
.name-area{
  padding: 20px;
  font-size: 1.5rem;
  color: #888;
}
.user-detail{
  font-size: 1rem;
}

</style>
