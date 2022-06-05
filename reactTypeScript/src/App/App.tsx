import { FC, useEffect, useState } from 'react';
import { ITodoCard } from '../interfaces';
import TodoList from '../TodoList/TodoList'
import Form from '../Form/Form'
import './App.scss';

const App:FC = () => {
  const [todos, setTodos] = useState<ITodoCard[]>([]);

  useEffect(() => {
    const existingTodos = localStorage.getItem('todos')
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const completeTodo = (todo: ITodoCard): void => {
    setTodos(todos.map(todoArr => {
      if (todoArr.id === todo.id) {
        return {...todoArr, done: !todo.done}
      }
      return todoArr;
    }))
  }

  const removeTodo = (todo: ITodoCard): void => {
    setTodos(todos.filter((todoArr) => todoArr.id !== todo.id))
  }
  
  return (
    <>
    <header className="header">
      <h1 className="header__title">TODO</h1>
        <Form
          setTodos={setTodos}
          todos={todos} />
    </header>
      <TodoList
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        todos={todos} />
    </>
  );
}

export default App;
