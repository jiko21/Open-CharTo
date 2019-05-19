import { MutationTree } from 'vuex';
import TopState from './state';
import Todo from '../../entities/todo';

const mutations: MutationTree<TopState> = {
  setTodos(state: TopState, todos: Todo[]): void {
    state.todos = todos;
  },
};

export default mutations;
