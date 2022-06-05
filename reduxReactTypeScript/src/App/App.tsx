import TodoList from '../TodoList/TodoList';
import Form from '../Form/Form';
import './App.scss';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">TODO</h1>
        <Form />
      </header>
      <TodoList />
    </>
  );
}

export default App;
