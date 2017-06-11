<template lang="html">
  <transition name="fade">
    <div class="toast">
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['message'],
  mounted () {
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.toast{
  display: -webkit-flex;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 15%;
  width: 6rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  -webkit-border-radius: 1rem;
  border-radius: 1rem;
  padding: .3rem .5rem;
  background: rgba(0, 0, 0, 0.68);
}
</style>
