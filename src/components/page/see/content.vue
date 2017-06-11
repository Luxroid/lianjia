<template lang="html">
  <!-- <div >
    <content3></content3>
    <transition name="fade" v-if="a">
      <a-toast :message='tips'></a-toast>
    </transition>
  </div> -->
  <div class="full">
    <div class="content" v-for ="item in itemlist">
      <div class="r-content">
          <div class="img">
            <img src="http://oq6olpne2.bkt.clouddn.com/17-6-4/60285673.jpg" alt="">
          </div>
          <div class="right">
            <p class="title">{{item.xiaoqu}}小区{{item.loudong}}楼{{item.danyuan}}单元{{item.menpai}}门牌</p>
            <p class="subtitle">3室2厅/86.91㎡/南/富源</p>
            <p class="money"><span class="tmoney">115万</span>13233元/平</p>
            <span class="time">有电梯</span>
            <span class="look">随时</span>
            <span class="tran">交通</span>
          </div>
      </div>
    </div>
    <transition name="fade" v-if="a">
      <a-toast :message='tips'></a-toast>
    </transition>
  </div>
</template>

<script>
// import content from '../../public/content.vue'
import toast from '../../public/toast.vue'
export default {
  data () {
    return {
      tips: '信息为空,请您首页的卖房中添加住房信息',
      show: false,
      itemlist: [],
      ifnoneclass: 'false',
      xiaoqu: '',
      loudong: '',
      danyuan: '',
      menpai: ''
    }
  },
  components: {
    'a-toast': toast
    // content
  },
  computed: {
    a () {
      return this.show
    }
  },
  mounted () {
    this.itemlist = JSON.parse(localStorage.getItem('lux') || '[]')
    this.isValue = true
    // console.log(this.itemlist)
    if (this.itemlist.length === 0) {
      this.show = true
    }
    setTimeout(() => {
      this.show = false
    }, 3 * 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/content.scss';
.content {
  padding-left: .53rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
