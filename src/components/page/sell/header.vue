<template lang="html">
    <div class="header" >
      <div class="left" @click="a">
        <i class="icon"></i>
        <p class="back">返回</p>
      </div>
      <div class="right">
        <p class="pub">免费发布房源</p>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    a () {
      console.log('1111')
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/sell/hearder.scss"
</style>
