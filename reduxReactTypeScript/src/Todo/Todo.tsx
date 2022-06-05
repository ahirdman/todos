import { toggleDone, deleteTodo } from '../store/todoSlice';
import { useAppDispatch } from '../store/hooks';
import ITodoItem from '../ts-utils/interface';
import './Todo.scss';

function Todo({
  id, title, description, done,
}: ITodoItem) {
  const dispatch = useAppDispatch();

  const completeTodo = () => {
    dispatch(toggleDone({ id, done: !done }));
  };

  const removeTodo = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li className={`todo ${done ? 'todo--completed' : ''}`}>
      <section className="todo__content">
        <h4 className="todo__title">{title}</h4>
        <p className="todo__description">{description}</p>
      </section>
      <section>
        <button
          onClick={completeTodo}
          className="todo--toggle-completed"
        >
          Done
        </button>
        <button
          onClick={removeTodo}
          className={`todo__button ${done ? 'todo__button--remove' : ''}`}
        >
          X
        </button>
      </section>
    </li>
  );
}

export default Todo;
