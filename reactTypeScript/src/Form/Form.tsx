import { IFormProps } from '../interfaces';
import { useRef, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Form.scss';

const Form: FC<IFormProps> = ({ setTodos, todos }) => {
  
  const todoTitle = useRef<HTMLInputElement>(null);
  const todoDesc = useRef<HTMLInputElement>(null);

  const inputIsNotNull = todoTitle && todoTitle.current && todoDesc && todoDesc.current

  const addTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (inputIsNotNull) {
      setTodos([{
        id: uuidv4(),
        title: todoTitle.current.value,
        description: todoDesc.current.value,
        done: false
      }, ...todos]);
      localStorage.setItem('todos', JSON.stringify(todos))
      todoTitle.current.value = ''
      todoDesc.current.value = ''
    }
  }

  return (
    <form className='form' onSubmit={addTodo}>
      <label className="form__title">Title</label>
      <input id="txtTodoItemToAdd" className="form__input-title" type="text" placeholder="Title" required ref={todoTitle} />
      <label className="form__description">Description</label>
      <input className="form__input-description" type="text" placeholder="Description" ref={todoDesc} />
      <input className="form__button" id="btnAddTodo" type="submit" value="Add" />
    </form>
  );
}

export default Form;
