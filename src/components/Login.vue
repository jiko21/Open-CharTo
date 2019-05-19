<template>
  <div class="login">
    <h1 class="title">
      CharToをご利用になるにはサインインまたはサインアップが必要となります。
    </h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', {
      signInFlow: 'redirect',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/top',
    });
  }
}
</script>
<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
