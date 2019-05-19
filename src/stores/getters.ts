import { GetterTree } from 'vuex';
import RootState from './state';

const getters: GetterTree<RootState, RootState> = {
  isLoggedIn(state: RootState): boolean {
    return state.user !== null;
  },
  isInitialized(state: RootState): boolean {
    return state.initialized;
  },
};

export default getters;
