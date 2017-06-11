<template lang="html">
    <div class="see">
      <e-header></e-header>
      <e-search></e-search>
      <e-selectbar></e-selectbar>
      <e-content></e-content>
      <e-bar></e-bar>
    </div>
</template>

<script>
import header from './page/ershou/e-header.vue'
import search from './page/ershou/e-search.vue'
import selectbar from './page/ershou/e-selectbar.vue'
import bar from './page/ershou/e-bar.vue'
import content from './page/see/content.vue'
export default {
  components: {
    'e-header': header,
    'e-search': search,
    'e-selectbar': selectbar,
    'e-content': content,
    'e-bar': bar
  }
}
</script>

<style lang="scss" scoped>
// @import "../assets/scss/animation/find.scss";
</style>
