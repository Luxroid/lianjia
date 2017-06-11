<template lang="html">
  <div>
    <div class="search">
      <a href="javascript:history.back();" class="back">
        <i class="span"></i>
      </a>
      <div class="searchbox">
        <input v-on:input="input" type="text" class="input" v-model="text" placeholder="请输入小区或商圈名称">
      </div>
    </div>
    <router-link to="bb" class="link">
      <ul class="result" v-if="items.length" ref="p"></ul>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true,
      text: '',
      items: {},
      item: {},
      title: ''
    }
  },
  mounted () {
    this.axios.get('https://luxroid.com/home/data')
      .then(data => {
        this.items = data.data
      })
  },
  methods: {
    input () {
      this.$refs.p.innerHTML = this.items.filter(item => {
        return (item.title).indexOf(this.text) > -1
      })
      .map(item => {
        this.$store.item = item
        return `
        <li class="bb">${item.title}</li>
        `
      }).join('')
    }
  },
  computed: {
    a () {
      console.log(this.title)
      return this.title
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  text-align: left;
  height: 1.07rem;
}
.a  {
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  border-bottom: 1px solid #fff;
  background-color: #fff;
}
.search {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  background-color: #fff;
  font-size: 16px;
}
.input{
  width: 100%;
  height: 70%;
  border: none;
}
.searchbox {
  flex: 1;
  margin-left: .2rem;
  margin-right: .4rem;
  height: 2.5em;
  line-height: 2.5em;
  display: inline-block;
}
a{
    display: inline-block;
    width: 2.5em;
    height: 2.5em;
    line-height: 2.5em;
    text-align: center;
    padding: 0;
}
.span {
  display: inline-block;
  width: 2em;
  height: 2em;
  margin: -.21rem;
  background-repeat: no-repeat;
  background-image: url('https://s1.ljcdn.com/hulk-web/static/m/images/common/sprite.svg?id=201607141919&version=eqf8zlemk7');
  -webkit-background-size: 2em 62.375em;
  background-size: 2em 62.375em;
  vertical-align: middle;
  background-position: 0 -36.75em;
  -webkit-transform: scale(.5);
  transform: scale(.5);
}
</style>
