<template lang="html">
  <div>
    <content3 class="a"></content3>
  </div>
</template>

<script>
import content from '../../public/content.vue'
export default {
  props: ['message'],
  data () {
    return {
    }
  },
  components: {
    'content3': content
  }
}
</script>

<style lang="scss" scoped>
.a {
  padding-left: .53rem;
}
</style>
