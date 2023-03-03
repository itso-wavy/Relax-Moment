// * TodoList
const todoForm = document.querySelector('#todoForm');
const goallist = document.querySelector('#goallist');
const addBtn = document.querySelector('#addBtn');

const todos = [];
let counter = 3;
addBtn.textContent = counter;

addBtn .addEventListener('mouseover', () => {
  addBtn.textContent = '+';
})
addBtn .addEventListener('mouseout', () => {
  addBtn.textContent = counter;
})

addBtn .addEventListener('click', () => {
  addBtn.textContent = counter;
})

todoForm.addEventListener('submit', updateTodo);
function updateTodo (e) {
  e.preventDefault();
  // todolist.push(todoInput.value);
  console.dir(e)
  // e.target.value = '';

}

