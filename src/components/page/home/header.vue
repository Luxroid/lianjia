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
    <div class="p-header">
      <img src="https://s1.ljcdn.com/hulk-web/static/m/images/home/head_slogan.png?id=201607141919&version=eq7ojdu289"
          alt="" class="slogan">
      <div class="top">
        <div class="user_info">
          <span>南昌</span>
          <i class="iconfont">&#xe633;</i>
        </div>
        <div class="user_avatar">
          <i class="iconfont">&#xe695;</i>
        </div>
      </div>
      <div class="h-search">
        <router-link to='search/aa'>
          <i class="iconfont sear">&#xe60d;</i>
          <input type="text"  disabled class="hint" placeholder="输入小区或商圈开始找房咯">
        </router-link>
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
