<template>
  <div class="hello">
    <banner></banner>
    <channel></channel>

    <div class="cate-list">
      <span class="cate-item">推荐</span>
      <span class="cate-item">颜值</span>
      <span class="cate-item">搞笑</span>
      <span class="cate-item">生活</span>
      <span class="cate-item">海报</span>
    </div>
      
    <waterfall
      :align="align"
      :line-gap="200"
      :min-line-gap="100"
      :max-line-gap="220"
      :single-max-width="300"
      :watch="items"
      @reflowed="reflowed"
      ref="waterfall"
    >
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.index"
        move-class="item-move"
      >
        <div class="item" :style="item.style" :index="item.index"></div>
      </waterfall-slot>
    </waterfall>
    
  </div>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import Banner from './Banner'
import Channel from './Channel'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: ItemFactory.get(100),
      isBusy: false,
      align: 'center',
      selected: '1'
    }
  },
  components: {
    Banner,
    Channel,
    Waterfall,
    WaterfallSlot
  },
  methods: {
    addItems: function () {
      if (!this.isBusy && this.items.length < 500) {
        this.isBusy = true
        this.items.push.apply(this.items, ItemFactory.get(50))
      }
    },
    shuffle: function () {
      this.items.sort(function () {
        return Math.random() - 0.5
      })
    },
    reflowed: function () {
      this.isBusy = false
    }
  },
  mounted () {
    let $me = this
    document.body.addEventListener('click', function () {
      $me.shuffle()
      // app.$refs.waterfall.$emit('reflow') // manually trigger reflow action
    }, false)

    window.addEventListener('scroll', function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop + window.innerHeight >= document.body.clientHeight) {
        $me.addItems()
      }
    })
  }
}

var ItemFactory = (function () {
  var lastIndex = 0
  function generateRandomItems (count) {
    var items = []
    let i
    for (i = 0; i < count; i++) {
      items[i] = {
        index: lastIndex++,
        style: {
          background: getRandomColor()
        },
        width: 100 + ~~(Math.random() * 50),
        height: 100 + ~~(Math.random() * 50)
      }
    }
    return items
  }
  function getRandomColor () {
    var colors = [
      'rgba(21,174,103,.5)',
      'rgba(245,163,59,.5)',
      'rgba(255,230,135,.5)',
      'rgba(194,217,78,.5)',
      'rgba(195,123,177,.5)',
      'rgba(125,205,244,.5)'
    ]
    return colors[~~(Math.random() * colors.length)]
  }
  return {
    get: generateRandomItems
  }
})()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$fontSize: 16px;
$color: #828a92;
$width: 100% !default;
.item-move {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
body {
  margin: 5px;
}
body * {
  box-sizing: border-box;
}
.item {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  font-size: 1.2em;
  color: rgb(0,158,107);
}
.item:after {
  content: attr(index);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.wf-transition {
  transition: opacity .3s ease;
  -webkit-transition: opacity .3s ease;
}
.wf-enter {
  opacity: 0;
}
.cate-list {
  border-top: 1px solid #BCD2EE;
  padding: 10px 5px;
  display: flex;
}
.cate-list .cate-item {
  font-size: 1.2rem;
  flex: 1;
}
.cate-list a {
  text-decoration: none;
  color: $color;
}
</style>
