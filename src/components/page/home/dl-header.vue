<template lang="html">
  <transition name="slide-fade">
    <div class="fixed" v-if="this.$store.state.dlh_show">
        <div class="pdlh">
          <div class="left">
            <img class="logo" src="https://s1.ljcdn.com/hulk-web/static/m/images/common/logo300x300.png?_v=2017060214011991b" alt="">
            <p class="dlp">下载链家APP</p>
          </div>
          <div class="right">
            <button class="dlb" @click ="dl">点击下载</button>
          </div>
          <a href="javascript:;" class="close close2" @click="fclose">关闭</a>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    fclose () {
      this.$store.state.fdlh_show = true
      this.$store.state.dlh_show = false
    },
    dl () {
      location.href = 'https://package1.ljcdn.com/channel/Android_appicontest.apk'
    }
  },
  computed: {
    a () {
      return this.$store.state.fdlh_show
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/home/dl_header.scss"
</style>
