<template lang="html">
<div class="details">
  <dl-header></dl-header>
  <deheader></deheader>
  <e-header></e-header>
  <div class="detail">
    <div class="wrap">
      <div class="pic-banner">
        <mt-swipe :auto="0" :show-indicators="false" @change="handleChange">
          <mt-swipe-item v-for="data in items" key="data.id">
            <img :src="data.img_url" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="numbox">
        <p>{{currentpage}}/{{items.length}}</p>
      </div>
    </div>
    <div class="content">
      <div class="title">
        {{this.$store.item.title}}
      </div>
      <div class="house_info">
        <div class="cell">
          <p class="ititle">售价</p>
          <p class="data">{{this.$store.item.tmoney}}</p>
        </div>
        <div class="cell">
          <p class="ititle">房型</p>
          <p class="data">{{subtitle[0]}}</p>
        </div>
        <div class="cell last">
          <p class="ititle">建筑面积</p>
          <p class="data">{{subtitle[1]}}</p>
        </div>
      </div>
    </div>
    <div class="dl">
      <img class="logo" src="https://s1.ljcdn.com/hulk-web/static/m/images/common/logo300x300.png?_v=2017060214011991b" alt="">
      <p class="describe">下载链家APP,在线咨询经纪人</p>
    </div>
    <div class="house_detail">
      <div class="tagbox">
        <span class="time">{{this.$store.item.time}}</span>
        <span class="look">{{this.$store.item.time.look}}</span>
        <span class="tran" >{{this.$store.item.tran.title}}</span>
      </div>
      <ul class="detail" v-for="item in lidata">
        <li><span>{{item.title}} : </span>{{item.subtilte}}</li>
      </ul>
      <p class="xiaoqu">
        <span>小区 : </span>
        保利花园三期
      </p>
      <div class="more">
        更多房源信息
      </div>
      <m-map class="map"></m-map>
    </div>
    <div class="info">
      <div class="source_rec">
          <p class="stitle">房源介绍</p>
          <p class="ssubtitle">恒温 恒湿  恒氧 恒静 南北通的户型，交通出行方便两房两厅两卫户型，南北通透纯板楼，餐厅通客厅，客厅出阳台，大气，两个卧室一前一后，主次分明，都带有卫生间。此房是恒温，恒湿，恒氧，恒静，比较适合老年人居住，私密性好.</p>
      </div>
      <div class="zhuren_rec">
        <div class="top">
          <div class="left">
            <p class="ztitle">房主自荐</p>
            <p class="time">更新时间:2017.02.14</p>
          </div>
          <div class="right">
            <img src="https://s1.ljcdn.com/hulk-web/static/m/images/common/agent_none.png?_v=2017060214011991b" alt="" class="avatar">
          </div>
        </div>
        <p class="zsubtitle">这套房的亮点有三：一是家居用具用品及电器一应俱全，可伶包入住；二是有一块近40平米露台可供盆、箱载花木、蔬菜，也可装饰成休闲、养生之处；三是该套房的**指标没被占用，入住后小孩可就近入园、入学。珠江花城二期房屋建筑质量尚好，从2010年入住以来尚未发生过建筑质量问题，电梯为两梯两户，物业收费不高，邻居家好相处。</p>
      </div>
      <div class="zhuren_rec a">
        <div class="top">
          <div class="left">
            <p class="ztitle">经纪人带看反馈(6)</p>
            <p class="time">最新带看2017.05.20</p>
          </div>
          <div class="right">
            <img src="https://image1.ljcdn.com/usercenter/images/ehr_halflen_avatar/12a4f191-5235-487d-ab92-323d1d8b8749.jpg.200x200.jpg" alt="" class="avatar">
          </div>
        </div>
        <p class="zsubtitle jin">这个房子是独门独户的，进门这边可以放个鞋柜或者其他东西，挺方便的。进去后，面对的就是餐厅，右边是次卧室和厨房，公厕。往左就是南边，主卧室和客厅朝南。这个房子对于老人小孩居家都是非常好的，冬暖夏凉。好了，先说这么多哈</p>
      </div>
    </div>
    <m-tabbar></m-tabbar>
  </div>
  <m-state></m-state>
  <m-xiaoqu></m-xiaoqu>
  <m-footer></m-footer>
  <m-footer2></m-footer2>
</div>
</template>

<script>
import map from './public/map.vue'
import dheader from './page/home/dl-header.vue'
import header from './page/ershou/e-header.vue'
import deheader from './page/details/dl-header.vue'
import tabbar from './page/details/tabbar.vue'
import state from './page/details/state.vue'
import xiaoqubox from './page/details/xiaoqu.vue'
import footer from './page/details/footer.vue'
import footer2 from './page/details/footer2.vue'
export default {
  data () {
    return {
      lidata: [
        {
          title: '单价',
          subtilte: ''
        },
        {
          title: '挂牌',
          subtilte: '2017.01.06'
        },
        {
          title: '朝向',
          subtilte: '8939'
        },
        {
          title: '楼层',
          subtilte: '中楼层/14'
        },
        {
          title: '楼形',
          subtilte: '板塔结合'
        },
        {
          title: '电梯',
          subtilte: '8939'
        },
        {
          title: '装修',
          subtilte: '毛坯'
        },
        {
          title: '年代',
          subtilte: '2011年'
        },
        {
          title: '用途',
          subtilte: '普通住宅'
        },
        {
          title: '权属',
          subtilte: '商品房'
        },
        {
          title: '首付预算',
          subtilte: '参考42万'
        }
      ],
      items: {},
      currentpage: 1,
      subtitle: []
    }
  },
  methods: {
    handleChange (index) {
      this.currentpage = index + 1
      // console.log('aaa')
    }
  },
  computed: {
    c () {
      this.$store.item
    }
  },
  components: {
    'dl-header': dheader,
    'e-header': header,
    'deheader': deheader,
    'm-map': map,
    'm-tabbar': tabbar,
    'm-state': state,
    'm-xiaoqu': xiaoqubox,
    'm-footer': footer,
    'm-footer2': footer2
  },
  mounted () {
    document.body.scrollTop = 0
    this.lidata[0].subtilte = this.$store.item.money
    this.subtitle = this.$store.item.subtitle.split('/')
    this.axios.get('https://luxroid.com/home/img')
      .then(data => {
        // console.log(data)
        this.items = data.data
      })
    window.addEventListener('scroll', () => {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 50 && this.$store.state.fdlh_show === false) {
        this.$store.state.dlh_show = true
      }
      if (scrollTop < 50) {
        this.$store.state.dlh_show = false
      }
    }, true)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/detail/detail.scss";
</style>
