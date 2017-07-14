import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const WX_SHARED_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx451e343fcbbe3615&redirect_uri=https%3A%2F%2Fm.hopeandrising.com%2F%23%2Fcourse&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'

// 应用初始状态
const state = {
  isLoading: false,
  wxSharedUrl: WX_SHARED_URL,
  userInfo: {}
}

const getters = {
  getIsLoading: (state) => {
    return state.isLoading
  },
  getUserInfo: (state) => {
    return state.userInfo
  }
}

// mutation: vue事件，不能有异步操作
const mutations = {
  storeUserInfo: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

// action: vue事件，可以有异步操作
const actions = {
  storeUserInfo: (context, userInfo) => {
    context.commit('storeUserInfo', userInfo)
  },
  getInstitutions: () => {
    let _params = { object: { userId: 'test' } }
    axios.post('/v3.0/institution/list', _params)
      .then(function (res) {
        console.log('axios:', res)
      })
      .catch(function (err) {
        console.log('axios:', err)
      })
  }
}

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {}
})
