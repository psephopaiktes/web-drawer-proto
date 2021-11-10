import { createStore } from "vuex";

export default createStore({
  state: {
    headline: 'ビデオ',
    domain: 'video'
  },
  mutations: {
    setBlogIndex(state, opt) {
      state.headline = opt.headline;
      state.domain = opt.domain;
    },
  },
  actions: {},
  modules: {}
});
