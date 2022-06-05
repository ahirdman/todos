import { ITodoCardProps } from '../interfaces'
import { FC } from 'react';
import './Todo.scss';

const Todo: FC<ITodoCardProps> = ({ todo, completeTodo, removeTodo }) => {

  const todoCardStatus = todo.done ? 'todo todo--completed' : 'todo'
  const todoButtonStatus = todo.done ? 'todo__button todo__button--remove' : 'todo__button'

  return (
      <li className={todoCardStatus}>
        <section className='todo__content'>
          <h4 className='todo__title'>{todo.title}</h4>
          <p className='todo__description'>{todo.description}</p>
        </section>
        <section className='todo__buttons'>
        <button onClick={() => completeTodo(todo)} className='todo--toggle-completed'>Done</button>
        <button onClick={() => removeTodo(todo)} className={todoButtonStatus}>X</button>
        </section>
      </li>
  );
}

export default Todo;
