<template lang="html">
  <div class="chat">
    <div class="header">
      <div class="left">
        <i class="icon back" @click="back"></i>
        <p>返回</p>
      </div>
      <div class="middle">
        <i class="icon logo"></i>
      </div>
    </div>
    <div class="content" ref="scroll">
            <div class="height-hook">
                <div v-for="(item, index) in messageList">
                    <div class="item-box left-hook" v-if="item.type === 2">
                        <div class="center">
                            <div class="user">mixihome</div>
                            <div class="text"><span class="horn">{{item.msg}}</span></div>
                        </div>
                        <br style="clear: both;"/>
                    </div>
                    <div class="item-box right-hook" v-if="item.type === 3">
                        <div class="center">
                            <div class="user">luxroid</div>
                            <div class="text"><span class="horn">{{item.msg}}</span></div>
                        </div>
                        <br style="clear: both;"/>
                    </div>
                </div>
            </div>
        </div>
    <div class="footer">
      <i class="iconfont">&#xe64d;</i>
      <input @keyup.enter="send" class='input' type="text" v-model="value">
      <button class="send" @click="send">发送</button>
    </div>
  </div>
</template>

<script>
// import io from '../../lib/socket.io.js'
export default {
  data () {
    return {
      value: '',
      messageList: [{
        type: 2 ,
        msg: '请问你有什么需要咨询的'
      }]
    }
  },
  updated () {
      this.scroll();
    },
  mounted () {
    // this.httpServer = io.connect('https://luxroid.com');
    socket.on('message', (value) => {
        this.messageList.push(
          {type: 2, msg: value}
        );
    })
  },
  methods: {
    back () {
      history.go(-1)
    },
    send () {
      socket.emit('send', this.value.trim());
      this.messageList.push({
        type: 3,
        msg: this.value.trim()
      })
      this.value = ''
    },
    scroll () {
        this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight;
    }
  }
}
</script>

<style lang="scss" scoped>
.send {
  width: 15%;
  margin-right: .2rem;
  color: #fff;
  background-color: #00a75b;
  border: none;
  border-radius: .1rem;
  height: .8rem;
  line-height: .8rem;
}
@import "../assets/scss/ershou/header.scss";
.content {
    width: 100%;
    position: absolute;
    top: 50px;
    bottom: 50px;
    display: block;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
    .item-box {
        width: 100%;
        margin-bottom: 10px;
        .left {
            float: left;
            width: 40px;
            img {
                height: 40px;
            }
        }
        .right {
            float: right;
            width: 40px;
            img {
                height: 40px;
            }
        }
        .center {
            max-width: 65%;
            .text {
                position: relative;
                font-size: 13px;
                padding: .21rem .27rem .13rem .27rem;
                border-radius: 3px;
                line-height: .53rem;
                text-align: left;
                .horn {

                    white-space: pre-wrap;
                    font-size: .35rem;
                }
            }
        }
        &.center-hook {
            text-align: center;
            padding: 20px 0;
            .tip {
                padding: 3px 6px;
                border-radius: 2px;
                background: rgba(0, 0, 0, 0.2);
                color: #fff;
                font-size: 12px;
                line-height: 12px;
            }
        }
    }
    .left-hook {
        .center {
            float: left;
            margin-left: 10px;
            .text {
                background: #fff;
                color: #333;
                .horn {
                    color: #000;
                    left: -8px;
                }
            }
            .user {
                margin-bottom: 5px;
                font-size: 12px;
                color: #aaa;
                line-height: 12px;
            }
        }
    }
    .right-hook {
        .center {
            float: right;
            text-align: right;
            margin-right: 10px;
            .text {
                background: #499eff;
                color: #fff;
                .horn {
                    color: #fff;
                    right: -8px;
                }
            }
            .user {
                text-align: right;
                margin-bottom: 5px;
                font-size: 12px;
                color: #aaa;
                line-height: 12px;
            }
        }
    }
}
@font-face {
  font-family: 'iconfont';  /* project id 320269 */
  src: url('https://at.alicdn.com/t/font_xuwcopgdqp8pvi.eot');
  src: url('https://at.alicdn.com/t/font_xuwcopgdqp8pvi.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_xuwcopgdqp8pvi.woff') format('woff'),
  url('https://at.alicdn.com/t/font_xuwcopgdqp8pvi.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_xuwcopgdqp8pvi.svg#iconfont') format('svg');
}
.iconfont{
	font-family:"iconfont";
	font-size:.8rem;
  color: #7d7e83;
	font-style:normal;
	-webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin-left: .2rem;
}
.input {
  flex: 1;
  height: .8rem;
  line-height: .8rem;
  margin: 0 .11rem;
  border-radius: .16rem;
  padding: 0 .27rem;
  overflow: hidden;
  border: 1px solid #7d7e83;
}
.footer {
  position: fixed;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 1.33rem;
  background-color: #fff;
}
</style>
