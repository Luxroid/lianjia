<template lang="html">
  <div class="full ershou">
    <div class="content" v-for = "(item, index) in items" >
      <router-link to="/detail/aa" class="link">
        <div class="r-content" @click="a(index)">
            <div class="img">
              <img :src="item.img_url" alt="">
            </div>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <p class="subtitle">{{item.subtitle}}</p>
              <p class="money"><span class="tmoney">{{item.tmoney}}</span>{{item.money}}</p>
              <div class="tal">
                <span class="time">{{item.time}}</span>
                <span class="look">{{item.look}}</span>
                <span class="tran" v-for = "t in item.tran">{{t.title}}</span>
              </div>
            </div>
        </div>
      </router-link>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: {}
    }
  },
  methods: {
    a (index) {
      this.$store.item = this.items[index]
    }
  },
  mounted () {
    this.axios.get('https://luxroid.com/home/data')
      .then(data => {
        // console.log(data)
        this.items = data.data
      })
  }
}
</script>

<style lang="scss" scoped>
@import './content.scss';
.link {
  text-decoration: none;
  color: #000;
}
.link:visited {
  color: #000;
  text-decoration: none;
}
</style>
