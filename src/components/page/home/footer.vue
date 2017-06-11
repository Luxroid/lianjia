<template lang="html">
  <div class="footer">
    <div class="f-title">
      <p>杭州手机链家网</p>
    </div>
    <div class="content">
      <div class="f-content">
        <div class="nav" :class="{partactive: partactive}" @click="partclick">
          链家分站
        </div>
        <div class="nav" :class="{hotactive: hotactive}" @click="hotclick">
          热门城市
        </div>
      </div>
      <div v-if="partactive" class="">
        <part></part>
      </div>
      <div v-if="hotactive">
        <hotCity></hotCity>
      </div>
    </div>
    <div class="info">
      <div class="and_ios_dl">
        <div class="dl ios_dl"></div>
        <div class="dl and_dl"></div>
      </div>
      <div class="website_info">
        <p>北京链家房地产经纪有限公司</p>
        <p>网络经营许可证 京ICP备11024601号-12</p>
      </div>
    </div>
  </div>
</template>

<script>
import part from '../../part.vue'
import hotcity from '../../hotCity.vue'
export default {
  data () {
    return {
      partactive: true,
      hotactive: false
    }
  },
  components: {
    'part': part,
    'hotCity': hotcity
  },
  methods: {
    partclick () {
      this.partactive = true
      this.hotactive = false
    },
    hotclick () {
      this.partactive = false
      this.hotactive = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import  '../../../assets/scss/home/footer.scss'
</style>
