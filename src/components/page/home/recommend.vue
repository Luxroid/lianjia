<template lang="html">
  <div class="recommend">
    <div class="r-header">
      <p class="title">为您推荐二手房</p>
      <p class="more">更多</p>
    </div>
    <div>
      <div>
        <content3></content3>
        <div class="somes">
          "大家都在浏览"
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../../public/content.vue'
export default {
  data () {
    return {
      items: {}
    }
  },
  components: {
    'content3': content
  },
  mounted () {
    this.axios.get('https://luxroid.com/home/data')
      .then(data => {
        // console.log(data)
        this.items = data.data
      })
  },
  methods: {
    a (index) {
      this.$store.item = this.items[index]
    }
  },
  computed: {
    b () {
      return this.$store.item
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/home/recommand.scss";
.tal {
  text-align: left;
  width: 100%;
}
.right {
  flex: 1;
}
</style>
