<template lang="html">
    <div class="ershou">
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
import content from './page/ershou/e-content.vue'
import bar from './page/ershou/e-bar.vue'
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

<style lang="css">
.ershou{
  height: 100%;
  position: relative;
  /*padding-left: .53rem;*/
}

</style>
