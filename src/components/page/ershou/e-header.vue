<template lang="html">
  <div class="header">
    <div class="left">
      <i class="icon back" @click="a"></i>
      <p>长沙</p>
      <i class="icon spread"></i>
    </div>
    <div class="middle">
      <i class="icon logo"></i>
    </div>
    <div class="right">
      <i class="icon my"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    a () {
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ershou/header.scss"
</style>
