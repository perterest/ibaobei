<template>
  <div class="banner">
    <mt-swipe :auto="4000" @change="handleChange">
      <mt-swipe-item><img src="https://pic.36krcnd.com/avatar/201707/11055941/9tctp7sitx2c6hnz.png!heading"></mt-swipe-item>
      <mt-swipe-item><img src="https://pic.36krcnd.com/avatar/201707/11062458/vpn8wjfj4a7kqndc.jpg!heading"></mt-swipe-item>
      <mt-swipe-item><img src="https://pic.36krcnd.com/avatar/201707/11055708/mw7lnhmxde2nv2gf.jpg!heading"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    handleChange (index) {
      console.log('index:', index)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$fontSize: 16px;
$width: 100% !default;
.banner {
  height: 20rem;
}
.banner img {
  width: 100%;
}
</style>
