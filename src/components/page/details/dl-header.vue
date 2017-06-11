<template lang="html">
  <div class="header">
    <div class="dl-header">
      <div class="dl_left">
        <img src="https://s1.ljcdn.com/hulk-web/static/m/images/common/logo300x300.png?_v=20170526171654622"
          alt="链家" class="logo">
          <div class="describe">
            <p class="title">下载链家APP</p>
            <p class="subtitle">即享个性化房源推荐</p>
          </div>
      </div>
      <div class="dl-right">
        <button class="dl" @click="dlAPP">点击下载</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    dlAPP () {
      location.href = 'https://package1.ljcdn.com/channel/Android_appicontest.apk'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/home/header.scss";
</style>
