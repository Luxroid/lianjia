<template lang="html">
    <div>
      <!-- <router-view></router-view> -->
      <dl-header></dl-header>
      <l-header></l-header>
      <l-content></l-content>
      <l-tool></l-tool>
      <l-recommend></l-recommend>
      <l-footer></l-footer>
    </div>
</template>

<script>
import dheader from './page/home/dl-header.vue'
import header from './page/home/header.vue'
import content from './page/home/content.vue'
import tool from './page/home/tool.vue'
import recommend from './page/home/recommend.vue'
import footer from './page/home/footer.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
    document.body.scrollTop = 0
    window.addEventListener('scroll', () => {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 50 && this.$store.state.fdlh_show === false) {
        this.$store.state.dlh_show = true
      }
      if (scrollTop < 50) {
        this.$store.state.dlh_show = false
      }
    }, true)
  },
  computed: {
    a () {
      return this.$store.state.dlh_show
    }
  },
  components: {
    'dl-header': dheader,
    'l-header': header,
    'l-content': content,
    'l-tool': tool,
    'l-recommend': recommend,
    'l-footer': footer
  }
}
</script>

<style lang="css" scoped>
@import '../assets/css/reset.css';
</style>
