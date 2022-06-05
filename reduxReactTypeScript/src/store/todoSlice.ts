import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { existingTodos } from '../localStorage';
import ITodoItem from '../ts-utils/interface';

const initialState: ITodoItem[] = existingTodos ? JSON.parse(existingTodos) : [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push({
        id: uuidv4(),
        title: payload.title,
        description: payload.description,
        done: false,
      });
    },
    toggleDone: (state, { payload }) => state.map((todo) => {
      if (todo.id === payload.id) {
        return { ...todo, done: payload.done };
      }
      return todo;
    }),
    deleteTodo: (state, { payload }) => state.filter((todo) => todo.id !== payload.id),
  },
});

export const { addTodo, toggleDone, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
