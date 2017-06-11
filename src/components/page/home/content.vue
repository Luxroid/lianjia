<template lang="html">
  <div class="content">
    <div class="cell">
      <router-link to="/ershou/aa" class="link">
        <i class="icon ershou"></i>
        <p>二手房</p>
      </router-link>
    </div>
    <div class="cell">
      <router-link to="/ershou/aa" class="link">
        <i class="icon xin"></i>
        <p>新房</p>
      </router-link>
    </div>
    <div class="cell">
      <router-link to="/ershou/aa" class="link">
        <i class="icon zu"></i>
        <p>租房</p>
      </router-link>
    </div>
    <div class="cell">
      <router-link to="/sell/aa" class="link">
        <i class="icon mai"></i>
        <p>卖房</p>
      </router-link>
    </div>
    <div class="cell" @click="dl">
      <i class="icon dl"></i>
      <p>下载APP</p>
    </div>
    <div class="cell">
      <i class="icon hai"></i>
      <p>海外</p>
    </div>
    <div class="cell">
      <router-link to="/ershou/aa" class="link">
        <i class="icon cha"></i>
        <p>查成交</p>
      </router-link>
    </div>
    <div class="cell">
      <router-link to="/see/aa" class="link">
        <i class="icon zhao"></i>
        <p>查看小区</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    dl () {
      location.href = 'https://package1.ljcdn.com/channel/Android_appicontest.apk'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/home/content.scss"
</style>
