import { MutationTree } from 'vuex';
import RootState from './state';

const mutations: MutationTree<RootState> = {
  setUser(state: RootState, user: firebase.User): void {
    state.user = user;
  },
  setInitialized(state: RootState, initialized: boolean): void {
    state.initialized = initialized;
  },
};

export default mutations;
