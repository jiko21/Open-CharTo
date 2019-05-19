<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a @click="toggleBurger" role="button" class="navbar-burger burger" v-bind:class="{'is-active': isToggled}" aria-label="menu" aria-expanded="false" data-target="navBarmenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div @click="toggleBurger" id="navBarmenu" class="navbar-menu" v-bind:class="{'is-active': isToggled}">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/top">Top</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
            <a class="button is-primary" @click="doLogout" v-if="isLoggedIn"><strong>Log out</strong></a>
            <a class="button is-primary" href="/signin" v-else><strong>Log in</strong></a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {mapGetters, mapActions, mapState} from 'vuex';
@Component({
  computed: {
    ...mapGetters(
      ['isLoggedIn'],
    ),
  },
})
export default class Header extends Vue {
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
  @import "~bulma/sass/utilities/_all";

  nav.navbar, div.navbar-menu {
    background-color: $black-ter;
    a {
      color: $link-invert;
      &:hover {
        color: $red;
      }
    }
  }
</style>
