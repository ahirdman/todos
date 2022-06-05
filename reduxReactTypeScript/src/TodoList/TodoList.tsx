import { useAppSelector } from '../store/hooks';
import ITodoItem from '../ts-utils/interface';
import Todo from '../Todo/Todo';
import './TodoList.scss';

function TodoList() {
  const todoState = useAppSelector((state) => state.todos);

  return (
    <ul id="todoList" className="TodoList">
      {todoState.map((todo: ITodoItem) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          done={todo.done}
        />
      ))}
    </ul>
  );
}

export default TodoList;
