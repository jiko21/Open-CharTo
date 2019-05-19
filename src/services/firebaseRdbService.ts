import firebase from 'firebase/app';
import TodoResponse from '@/entities/todo_response';
import Todo from '@/entities/todo';

export const getTodos = (user: firebase.User, cb: (todoResponse: TodoResponse) => void): void => {
  const db = firebase.database();
  const todoRef = db.ref(`users/${user.uid}`);

  todoRef.on('value', (snapshot) => {
    if (snapshot !== null) {
      cb(snapshot.val() as TodoResponse);
    }
  });
};

export const putStatus = (user: firebase.User, todo: Todo): void => {
  if (todo.status < 2) {
    const db = firebase.database();
    const statusRef = db.ref(`users/${user.uid}/${todo.key}`);
    statusRef.transaction((todoRef) => {
      todoRef.status += 1;
      return todoRef;
    });
  }
};

export const putTodo = (user: firebase.User, content: string): Promise<any> => {
  const todo = {
    content,
    status: 0,
  };
  const db = firebase.database();
  const rst = db.ref(`users/${user.uid}/`).push().set(todo);
  return rst;
};
