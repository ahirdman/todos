import { RootState } from './ts-utils/type';

const saveToLocalStorage = (state: RootState) => {
  localStorage.setItem('todos', JSON.stringify(state.todos));
};

const existingTodos = localStorage.getItem('todos');

export {
  saveToLocalStorage,
  existingTodos,
};
