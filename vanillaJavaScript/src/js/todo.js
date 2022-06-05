const inputTitle = document.querySelector('#input-title');
const inputDesc = document.querySelector('#input-description');
const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#todo-form');

const pendingTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todoState = [];

pendingTodos.forEach((item) => todoState.push(item));

const todoTemplate = (state) => {
  const htmlString = state.map((todoItem, i) => `
    <li id="${i}" class="${todoItem.done ? 'card card--complete' : 'card'}">
    <section class="card__content">
    <h4 class="card__title">${todoItem.title}</h4>
    <p class="card__description">${todoItem.description}</p>
    </section>
    <button class="${todoItem.done ? 'card__button' : 'card__button card__button--hidden'}">X</button>
    </li>
    `);
  return htmlString.join('');
};

const render = (htmlString, el) => {
  const element = el;
  element.innerHTML = htmlString;
};

const addTodo = (title, description) => {
  todoState.unshift({ title, description, done: false });
  window.dispatchEvent(new Event('state-change'));
};

const removeTodo = (index) => todoState.splice(index, 1);

const completeTodo = (index) => {
  todoState[index].done = !todoState[index].done;
};

document.addEventListener('click', (event) => {
  if (event.target.className === 'card__button') {
    removeTodo(event.target.parentNode.id);
    window.dispatchEvent(new Event('state-change'));
  }

  if (event.target.className === 'card' || event.target.className === 'card card--complete') {
    completeTodo(event.target.id);
    window.dispatchEvent(new Event('state-change'));
  }
});

form.onsubmit = (event) => {
  event.preventDefault();
  if (inputTitle.value) {
    addTodo(inputTitle.value, inputDesc.value);
    inputTitle.value = '';
    inputDesc.value = '';
  }
};

window.addEventListener('state-change', () => {
  localStorage.setItem('todos', JSON.stringify(todoState));
  render(todoTemplate(todoState), todoList);
});

window.dispatchEvent(new Event('state-change'));
