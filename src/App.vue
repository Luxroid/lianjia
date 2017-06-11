<template>
  <div class="app">
    <router-view></router-view>
    <transition name="fade" v-if="this.$store.state.onetoast">
      <toast :message='tips'></toast>
    </transition>
  </div>
</template>

<script>
import toast from './components/public/toast.vue'
export default {
  name: 'app',
  data () {
    return {
      tips: 'Tips:此demo中所有下载链接均可直接下载,请确保您在wifi环境下'
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 50 && this.$store.state.fdlh_show === false) {
        this.$store.state.dlh_show = true
      }
      if (scrollTop < 50) {
        this.$store.state.dlh_show = false
      }
    }, true)
    setTimeout(() => {
      this.$store.state.onetoast = false
    }, 3 * 1000)
  },
  computed: {
    a () {
      return this.$store.state.dlh_show
    }
  },
  components: {
    toast
  }
}
</script>

<style>
@import './assets/css/reset.css';
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.app {
  height: 100%;
}
</style>
