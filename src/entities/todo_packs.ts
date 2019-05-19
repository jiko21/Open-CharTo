import Todo from './todo';

export default interface TodoPacks {
  [key: string]: Todo[] | null;
}
