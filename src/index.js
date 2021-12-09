import './style.css';

const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('.todo-list');
const inputField = document.querySelector('#input-field');
const clearAll = document.querySelector('.clearAll');

const todoListArray = [];

const addnew = () => {
  todoListArray.push(inputField.value);
  const div = document.createElement('div');
  div.classList.add('div-active');
  div.innerHTML = inputField.value;
  todoList.insertBefore(div, clearAll);
  inputField.value = '';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  div.appendChild(checkbox);
  checkbox.classList.add('checkbox');
  checkbox.addEventListener('click', (e) => {
    e.target.parentElement.classList.add('line-through');
  });
  checkbox.addEventListener('dblclick', (l) => {
    l.target.parentElement.classList.remove('line-through');
  });
  clearAll.classList.remove('dis-none');
};
const removeItems = () => {
  const toRemove = document.querySelectorAll('.line-through');
  toRemove.forEach((r) => {
    r.remove();
  });
};

addBtn.addEventListener('click', addnew);
clearAll.addEventListener('click', removeItems);
