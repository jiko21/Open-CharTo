import { ActionTree, Commit } from 'vuex';
import RootState from './state';
import firebase from 'firebase/app';
import * as firebaseAuthService from '@/services/firebaseAuthService';

const actions: ActionTree<RootState, RootState> = {
  initialize({ state, commit }) {
    if (!state.initialized) {
      firebaseAuthService.setOnAuthStateChangeListener((user: firebase.User | null) => {
        if (user) {
          commit('setUser', user);
        }
        commit('setInitialized', true);
      });
    }
  },
  doLogout({ commit }) {
    firebaseAuthService.signOut();
    commit('setUser', null);
  },
};

export default actions;
