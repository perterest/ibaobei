<template>
  <div class="channel">
    <div class="title-row">
      开心频道
    </div>
    <div class="channel-list">
      <div class="channel-item">
        <a href=""><img src="https://pic.36krcnd.com/avatar/201707/11003250/l7ldyixbqtujzvg8.jpeg!heading" alt=""></a>
      </div>
      <div class="channel-item">
        <a href=""><img src="https://pic.36krcnd.com/avatar/201707/11003250/l7ldyixbqtujzvg8.jpeg!heading" alt=""></a>
      </div>
      <div class="channel-item">
        <a href=""><img src="https://pic.36krcnd.com/avatar/201707/11003250/l7ldyixbqtujzvg8.jpeg!heading" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'channel',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$fontSize: 16px;
$width: 100% !default;
.channel {
  margin-top: 1rem;
}
.title-row {
  text-align: right;
  margin-right: 10px;
  font-size: 1.2rem;
}
.channel img {
  width: 100%;
}
.channel-list {
  display: flex;
  padding: 4px;
}
.channel-item {
  flex: 1;
}
.channel-item a {
  display: block;
  padding: 5px 2px;
}
</style>
