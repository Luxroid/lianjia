<template lang="html">
  <transition name="slide-fade">
    <div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
@import "../../assets/scss/animation/find.scss";
</style>
