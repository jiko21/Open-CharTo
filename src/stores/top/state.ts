import Todo from '@/entities/todo';

export default interface TopState {
  todos: Todo[];
}

export const state: TopState = {
  todos: [],
};
