import { FC } from 'react';
import Todo from '../Todo/Todo'
import './TodoList.scss';
import { ITodoCard, IListProps } from '../interfaces';

const TodoList:FC<IListProps> = ({ todos, completeTodo, removeTodo }) => {
  return (
      <ul id="todoList" className='todolist'>
      {todos.map((todo: ITodoCard, index: number) =>
      (<Todo
        key={index}
        todo={todo}
        removeTodo={removeTodo}
        completeTodo={completeTodo} />))}
      </ul>
  );
}

export default TodoList;
