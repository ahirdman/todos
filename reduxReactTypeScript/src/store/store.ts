import { configureStore } from '@reduxjs/toolkit';
import { saveToLocalStorage } from '../localStorage';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

store.subscribe(() => {
  saveToLocalStorage({
    todos: store.getState().todos,
  });
});

export default store;
