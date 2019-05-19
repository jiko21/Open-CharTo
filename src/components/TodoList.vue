<template>
  <div>
    <b-collapse  v-for="todo in todos" :key="todo.key" class="card">
      <div class="card-content">
        <div class="content">
          {{todo.content}}
        </div>
      </div>
      <footer class="card-footer">
        <b-button v-if="buttonText !== ''" @click="changeStatus(todo)" class="card-footer-item" type="is-success">{{buttonText}}へ</b-button>
      </footer>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo from '@/entities/todo';

@Component
export default class TodoList extends Vue {
  @Prop() private todos!: Todo[];
  @Prop() private status!: string;
  @Prop() private changeStatus!: (todo: Todo) => void;
  get buttonText(): string {
    switch (this.status) {
      case 'todo':
        return 'Doingにする';
      case 'doing':
        return 'Doneにする';
      default:
        return '';
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
