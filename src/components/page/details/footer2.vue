<template lang="html">
<div class="footer2">
  <div class="ffooter">
    <p class="title">考虑卖房?我们可以帮您</p>
    <p class="subtitle">30万业主信赖的选择,卖房专业又省心</p>
    <div class="three">
      <p class="btn">帮我卖房</p>
    </div>
</div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.three {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  justify-content: center;
  align-items: center;
}
.ffooter {
  text-align: center;
  margin: .77rem 0 1.5rem;
  font-weight: lighter;
  .title {
    font-size: .51rem;
  }
  .subtitle {
    font-size: .35rem;
    color: #9c9fa1;
  }
  .btn {
    margin: 0 auto;
    width: 20%;
    font-size: .43rem;
    color: #394043;
    height: 1.12rem;
    line-height: 1.12rem;
    padding: 0 1.07rem;
    border: 1px solid #9c9fa1;
    border-radius: 1.12rem;
    margin: .53rem 0 .8rem 0;
  }
}

</style>
