import { ActionTree, Commit } from 'vuex';
import TopState from './state';
import RootState from '../state';
import firebase from 'firebase/app';
import TodoResponse from '@/entities/todo_response';
import * as firebaseRdbService from '@/services/firebaseRdbService';
import * as objModule from '@/modules/objectModule';
import Todo from '../../entities/todo';
import * as firebaseAuthService from '@/services/firebaseAuthService';

const actions: ActionTree<TopState, RootState> = {
  initialize({ state, commit }) {
    const user = this.state.user;
    if (user !== null) {
      firebaseRdbService.getTodos(user, (todos: TodoResponse|null) => {
        if (todos !== null) {
          commit('setTodos', objModule.objectToArrayWithKey(todos!));
        }
      });
    }
  },
  changeStatus({ commit }, todo: Todo) {
    const user = this.state.user;
    if (user !== null) {
      firebaseRdbService.putStatus(user, todo);
    }
  },
  async putTodo({ commit }, content: string) {
    const user = this.state.user;
    if (user !== null) {
      try {
        const rst = await firebaseRdbService.putTodo(user, content);
      } catch (err) {
        alert(err);
      }
    }
  },
};

export default actions;
