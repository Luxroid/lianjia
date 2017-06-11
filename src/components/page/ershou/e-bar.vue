<template lang="html">
  <div class="" v-if="!this.$store.state.fb_show">
    <div class="bar">
        <div class="flex">
          <i class="close" @click="close"></i>
          <div class="left">
            <i class="logo"></i>
            <div class="describe">
              <p class="title">下载链家APP</p>
              <p class="subtitle">查看更多长沙精选</p>
            </div>
          </div>
          <div class="right">
            <button class="dl" @click="dl">点击下载</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$store.state.fb_show = true
      console.log('1111')
    },
    dl () {
      location.href = 'https://package1.ljcdn.com/channel/Android_appicontest.apk'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ershou/bar.scss"
</style>
