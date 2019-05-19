<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <h5>
        CharTo is produced by 
          <a href="https://github.com/daikikojima">daikikojima</a>.
      </h5>
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Footer extends Vue {
}
</script>
<style lang="scss">
  @import "~bulma/sass/utilities/_all";
  footer.footer {
    background-color: $black-ter;
    margin-top: auto;

    .content > h5, p {
      color: white;
      a {
        color: $red;
      }
    }
  }
</style>
