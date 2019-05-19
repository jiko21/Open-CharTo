import Todo from '../entities/todo';
export const filterTodos = (todos: Todo[], status: number): Todo[] | null => {
  return todos.filter((todo: Todo) => (todo.status === status));
};
