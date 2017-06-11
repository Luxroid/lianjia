<template lang="html">
  <div class="tool">
    <div class="title">
      <p>常用工具</p>
    </div>
    <div class="toolbox">
      <div class="cell">
        <i class="icon wen"></i>
        <p>问答</p>
      </div>
      <div class="cell">
        <i class="icon bai"></i>
        <p>百科</p>
      </div>
      <div class="cell">
        <i class="icon zhao"></i>
        <p>找经纪人</p>
      </div>
      <div class="cell">
        <a href="tel:400-0000-68">
          <i class="icon ke"></i>
          <p>客服电话</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}
@import "../../../assets/scss/home/tool.scss";
</style>
