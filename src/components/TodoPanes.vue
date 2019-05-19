<template>
  <b-tabs class="tile is-child" type="is-toggle" expanded>
    <template v-for="(status, index) in statusArray">
      <b-tab-item :label="status" :key="index">
        <TodoForm v-if="status === 'todo'" />
        <TodoList :todos="allTodos[status]" :changeStatus="changeStatus" :status="status"/>
      </b-tab-item>
    </template>
  </b-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import TodoPacks from '../entities/todo_packs';
import Todo from '../entities/todo';

@Component({
  components: {
    TodoForm,
    TodoList,
  },
  methods: {
    ...mapActions('top', [
      'changeStatus',
    ]),
  },
})
export default class TodoPanes extends Vue {
  public isCardModalActive = false;
  private statusArray: string[] = ['todo', 'doing', 'done'];
  @Prop() private allTodos!: TodoPacks;
}
</script>
