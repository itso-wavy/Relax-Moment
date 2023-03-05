// * TodoList
const TODOS_KEY = 'todos';
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const addBtn = document.querySelector('#addBtn');

let todos = [];
let counter = 0;

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter(i => i.id !== parseInt(li.id));
  saveTodos();
  counter--;
  addBtn.textContent = counter;
}

function paintTodo(todo) {
  const todoItem = document.createElement('li');
  const delBtn = document.createElement('button');

  todoItem.id = todo.id;
  todoItem.innerHTML = `<input type="checkbox" id="todoItem${todo.id}" class="ir todo-item"><label for="todoItem${todo.id}" class="item-label">${todo.txt}</label>`;
  delBtn.type='button';
  delBtn.addEventListener('click', deleteToDo);
  todoItem.appendChild(delBtn);
  todoList.appendChild(todoItem);
  counter++;
  addBtn.textContent = counter;
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    txt: todoInput.value,
  }
  todos.push(newTodo);
  todoInput.value = '';
  todoInput.classList.toggle('ir');
  saveTodos();
  paintTodo(newTodo);
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  todos.forEach(paintTodo)
}

addBtn.addEventListener('mouseover', () => {
  addBtn.textContent = '+';
})
addBtn.addEventListener('mouseout', () => {
  addBtn.textContent = counter;
})
addBtn.addEventListener('click', () => {
  todoInput.classList.toggle('ir');
})
todoForm.addEventListener('submit', handleTodoSubmit);
