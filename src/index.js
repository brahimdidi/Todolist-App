import './style.css';

const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('.todo-list');
const inputField = document.querySelector('#input-field');
const clearAll = document.querySelector('.clearAll');
const container = document.querySelector('.container');
const inputDiv = document.querySelector('.input-div');

const todoListArray = [
  {
    description: 'none',
    completed: false,
    index: 0,
  },
];

const addNew = () => {
  if (inputField.value === '') {
    const warn = document.createElement('h2');
    warn.classList.add('warn');
    warn.innerHTML = 'Please type something';
    container.insertBefore(warn, inputDiv);
    setTimeout(() => warn.remove(), 1000);
  } else {
    const div = document.createElement('div');
    div.classList.add('div-active');
    div.innerHTML = inputField.value;
    todoList.insertBefore(div, clearAll);
    inputField.value = '';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    div.appendChild(checkbox);
    checkbox.classList.add('checkbox');
    const checked = () => {
      if (checkbox.checked === false) {
        checkbox.parentElement.classList.remove('line-through');
      } else {
        checkbox.parentElement.classList.add('line-through');
      }
    };
    checkbox.addEventListener('click', checked);
    clearAll.classList.remove('dis-none');
    const todo = {
      description: inputField.value,
      completed: checkbox.checked,
      index: 0,
    };
    todoListArray.push(todo);
  }
};
const removeItems = () => {
  const toRemove = document.querySelectorAll('.line-through');
  toRemove.forEach((r) => {
    r.remove();
  });
};

addBtn.addEventListener('click', addNew);
clearAll.addEventListener('click', removeItems);
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addNew();
  }
});
