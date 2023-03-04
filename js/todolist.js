// * TodoList
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const addBtn = document.querySelector('#addBtn');

let todos = [];
let counter = 0;

paintTodos();

addBtn.addEventListener('mouseover', () => {
  addBtn.textContent = '+';
})
addBtn.addEventListener('mouseout', () => {
  addBtn.textContent = counter;
})
addBtn.addEventListener('click', () => {
  todoInput.classList.toggle('ir');
})

todoForm.addEventListener('submit', updateTodo);

function paintTodos() {
  todos = [];
  counter = 0;
  todoList.innerHTML = '';
  const TODOS_KEY = localStorage.getItem('todos');

  if (TODOS_KEY) {
    todos.push(...TODOS_KEY.split(','));
  }
  console.log(todos)
  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement('li');

    todoItem.innerHTML =
      `<input type="checkbox" id="todoItem${i}" class="ir todo-item"><label for="todoItem${i}" class="item-label">${todos[i]}</label>`;

    todoList.appendChild(todoItem);
    counter++;
  }
  addBtn.textContent = counter;
}

function updateTodo(e) {
  e.preventDefault();
  todos.push(todoInput.value);
  localStorage.setItem('todos', todos);
  todoInput.value = '';
  todoInput.classList.toggle('ir');

  paintTodos();
}
