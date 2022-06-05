import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addTodo } from '../store/todoSlice';
import './Form.scss';

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    dispatch(addTodo({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__title">Title</label>
      <input
        required
        id="txtTodoItemToAdd"
        className="form__input-title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label className="form__description">Description</label>
      <input
        className="form__input-description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        className="form__button"
        id="btnAddTodo"
        type="submit"
        value="Add"
      />
    </form>
  );
}

export default Form;
