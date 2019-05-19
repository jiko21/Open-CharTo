<template>
  <div id="app">
    <Header />
    <router-view id="content"/>
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {mapGetters, mapActions, mapState} from 'vuex';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters(
      ['isLoggedIn'],
    ),
  },
})
export default class App extends Vue {
  private isToggled = false;
  private doLogout() {
    this.$store.dispatch('doLogout');
    this.$router.push('/');
  }

  private toggleBurger() {
    this.isToggled = !this.isToggled;
  }
}
</script>
<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
