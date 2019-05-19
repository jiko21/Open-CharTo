import Vue from 'vue';
import Vuex from 'vuex';
import {rootState} from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import top from './top';
Vue.use(Vuex);

export default new Vuex.Store({
  state: rootState,
  actions,
  getters,
  mutations,
  modules: {
    top,
  },
});
