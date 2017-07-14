<template>
  <div id="app">
    <router-view></router-view>
    <mt-palette-button content="首页" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb" :radius="80" ref="target_1"
      style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)">我</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)">拍</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
    </mt-palette-button>
  </div>
</template>

<script>
// extraordinary
import { PaletteButton } from 'mint-ui'
export default {
  name: 'app',
  components: {
    PaletteButton
  },
  methods: {
    main_log (val) {
      console.log('main_log', val)
    },
    sub_log (val) {
      console.log('sub_log', val)
      this.$refs.target_1.collapse()
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: PingFang SC,Lantinghei SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,STHeitiSC-Light,simsun,\\5B8B\4F53,WenQuanYi Zen Hei,WenQuanYi Micro Hei,"sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #828a92;
}
.pb {
  width: 60px;
  height: 60px;
  line-height: 60px;
  color: #FFF;
  position:fixed;
  bottom: 30px;
}
.my-icon-button {
  width:30px;
  height:30px;
  border-radius:50%;
  background-color:#26a2ff;
  color: #fff;
  line-height:30px;
  text-align:center;
}
.mint-main-button {
  color: #fff;
  background-color:#26a2ff;
}
.icon-popup:before {
}
</style>
