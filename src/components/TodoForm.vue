<template>
  <div>
    <b-collapse class="card">
      <div class="card-content">
        <div class="content">
          <b-field grouped>
            <b-input v-model = "content" placeholder="Todoをここに記入" expanded></b-input>
            <p class="control">
              <button @click="onButtonClick" class="button is-primary">追加</button>
            </p>
          </b-field>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component
export default class TodoForm extends Vue {
  private content: string = '';
  public onButtonClick() {
    if (this.content !== '' && !this.content.match(/[\s|　]+/gm)) {
      this.$store.dispatch('top/putTodo', this.content);
      this.content = '';
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  margin: 10px auto;
  width: 500px;
}
</style>
