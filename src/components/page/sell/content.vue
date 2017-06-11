<template lang="html">
  <div>
    <div class="content">
      <div class="cell" >
        <p>小区名</p>
        <input type="text" v-model="xiaoqu" class="input" placeholder="请输入小区名">
      </div>
      <div class="cell" >
        <p>单元号</p>
        <input type="text" v-model="danyuan" class="input" placeholder="请输入单元号">
      </div>
      <div class="cell" >
        <p>门牌号</p>
        <input type="text" v-model="menpai" class="input" placeholder="请输入门牌号">
      </div>
      <div class="cell" >
        <p>楼栋号</p>
        <input type="text" v-model="loudong" class="input" placeholder="请输入楼栋号">
      </div>
    </div>
    <div class="finish">
      <button class="btn" @click="save">点击发布</button>
    </div>
    <div class="pic">
      <i class="icon"></i>
    </div>
    <transition name="fade" v-if="this.$store.state.fb_show">
      <t-toast :message='tips'></t-toast>
    </transition>
  </div>
</template>

<script>
import toast from '../../public/toast.vue'
export default {
  data () {
    return {
      tips: '您保存的内容使用localstroge进行存储,您可以在首页的查看小区中查看',
      itemList: [],
      xiaoqu: '',
      danyuan: '',
      menpai: '',
      loudong: ''
    }
  },
  mounted () {

  },
  computed: {
    a () {
      return this.$store.state.fb_show
    }
  },
  components: {
    't-toast': toast
  },
  methods: {
    save () {
      this.itemList.push({
        xiaoqu: this.xiaoqu,
        danyuan: this.danyuan,
        menpai: this.menpai,
        loudong: this.loudong
      })
      localStorage.setItem('lux', JSON.stringify(this.itemList))
      this.$store.state.fb_show = true
      setTimeout(() => {
        this.$store.state.fb_show = false
      }, 3 * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s ease-in-out
// }
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
@import "../../../assets/scss/sell/content.scss";
</style>
