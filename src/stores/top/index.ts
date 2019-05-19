import Vue from 'vue';
import { Module } from 'vuex';
import RootState from '../state';
import TopState, {state} from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const top = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default top;
