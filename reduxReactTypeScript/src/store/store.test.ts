import reducer, { addTodo, toggleDone, deleteTodo } from './todoSlice';
import ITodoItem from '../ts-utils/interface';

const newTodo = {
  title: 'Implement testing',
  description: 'this is the way',
};

const existingTodo = {
  id: '1',
  title: 'Make sure done button will work',
  description: 'this is the way',
  done: false,
};

test('should handle a todo being added to an empty list', () => {
  const previousState: ITodoItem[] = [];
  expect(reducer(previousState, addTodo(newTodo))).toMatchObject([
    {
      title: 'Implement testing',
      description: 'this is the way',
      done: false,
    },
  ]);
});

test('should toggle the done property', () => {
  const previousState: ITodoItem[] = [existingTodo];
  expect(reducer(previousState, toggleDone({ id: '1', done: true }))).toMatchObject([
    {
      id: '1',
      title: 'Make sure done button will work',
      description: 'this is the way',
      done: true,
    },
  ]);
});

test('should handle removing a todo', () => {
  const previousState: ITodoItem[] = [existingTodo];
  expect(reducer(previousState, deleteTodo({ id: '1' }))).toEqual([]);
});
