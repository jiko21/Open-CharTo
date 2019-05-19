import { GetterTree } from 'vuex';
import TopState from './state';
import RootState from '../state';
import Todo from '../../entities/todo';
import { filterTodos } from '../../modules/todoModule';
import TodoPacks from '../../entities/todo_packs';
import PiechartData from '../../entities/piechart_data';

const getters: GetterTree<TopState, RootState> = {
  getAllTodos(state: TopState): TodoPacks|null {
    return {
      todo: filterTodos(state.todos, 0),
      doing: filterTodos(state.todos, 1),
      done: filterTodos(state.todos, 2),
    };
  },
  getChartData(state: TopState): PiechartData {
    return {
      title: {
        text: '進捗状況',
        style: {
          fontSize:  '25px',
          color:  '#263238',
        },
      },
      series: [
        filterTodos(state.todos, 0) ? filterTodos(state.todos, 0)!!.length : 0,
        filterTodos(state.todos, 1) ? filterTodos(state.todos, 1)!!.length : 0,
        filterTodos(state.todos, 2) ? filterTodos(state.todos, 2)!!.length : 0,
      ],
      labels: ['todo', 'doing', 'done'],
    } as PiechartData;
  },
};

export default getters;
