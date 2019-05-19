import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase';
import router from './router';
import store from './stores';
import './registerServiceWorker';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueApexCharts from 'vue-apexcharts';

Vue.component('apexchart', VueApexCharts);
Vue.use(Buefy);
Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  // ここにFirebaseのコードをいれよう!!

};
firebase.initializeApp(config);

store.dispatch('initialize');

type NextType = (to?: string | false | void | Location | ((vm: Vue) => any) | any) => void;

const requireAuthGuard = (next: NextType): void => {
  if (store.getters.isLoggedIn) {
    next();
  } else {
    next({ path: '/signin' });
  }
};

const signinGuard = (next: NextType): void => {
  if (store.getters.isLoggedIn) {
    next({ path: '/top' });
  } else {
    next();
  }
};

const routerGuard = (next: NextType, guard: (next: NextType) => void): void => {
  if (!store.getters.isInitialized) {
    const unwatch = store.watch((state) => state.initialized, () => {
      guard(next);
      unwatch();
    });
  } else {
    guard(next);
  }
};

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    routerGuard(next, requireAuthGuard);
  } else if (to.path === '/signin') {
    routerGuard(next, signinGuard);
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
