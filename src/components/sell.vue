<template lang="html">
  <div class="sell">
    <s-header></s-header>
    <s-content></s-content>
  </div>
</template>

<script>
import header from '../components/page/sell/header.vue'
import content from '../components/page/sell/content.vue'
export default {
  components: {
    's-header': header,
    's-content': content
  }
}
</script>

<style lang="scss" scoped>
.sell {
  width: 100%;
  height: 100%;
}
</style>
