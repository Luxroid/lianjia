<template lang="html">
  <div class="tabbar">
    <!-- <div class="flex"> -->
      <div class="left">
        <i class="icon" :class="{like: islike, unlike: isunlike}" @click="toggle"></i>
        <span class="follow">关注</span>
      </div>
      <div class="one">
        <button class="order">APP预约看房</button>
      </div>
        <div class="two">
          <router-link to="bb">
            <button class="ask">咨询经纪人</button>
          </router-link>
        </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      islike: false,
      isunlike: true
    }
  },
  methods: {
    toggle (){
      this.islike = !this.islike
      this.isunlike = !this.isunlike
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/detail/tabbar.scss"
</style>
