import './style.css';

import {
  dragStart,
  allowDrop,
  dragEnd,
  drop,
  dragEnter,
  dragLeave,
} from './dragDrop.js';
import
renewStatus from './status.js';

const list = document.getElementById('list');

let myList = [
  {
    description: 'drive',
    completed: false,
    index: 0,
  },
  {
    description: 'play',
    completed: false,
    index: 1,
  },
  {
    description: 'work',
    completed: false,
    index: 2,
  },
  {
    description: 'make dinner',
    completed: false,
    index: 3,
  },
];

function renderList(arr) {
  list.innerHTML = arr.map((item) => `<li class='flex-row todo di btm-bdr' draggable='true' id='${item.index}'>
<input type='checkbox' class='checkbox' data-id='${item.index}'  ${item.completed ? 'checked' : ''}>
<input type='text' value='${item.description}' data-index='${item.index}'draggable='false' class='todo-text ${item.completed ? 'completed' : ''}'>
<i class='fas fa-ellipsis-v dots' data-id='${item.index}'></i>
</li>`).join('');

  list.addEventListener('dragenter', dragEnter);

  document.querySelectorAll('.todo').forEach((t) => {
    t.addEventListener('dragstart', dragStart);
    t.addEventListener('dragend', dragEnd);
    t.addEventListener('dragenter', dragEnter);
    t.addEventListener('dragleave', dragLeave);
    t.addEventListener('drop', drop);
    t.addEventListener('dragover', allowDrop);
  });

  document.querySelectorAll('.todo-text').forEach((text) => {
    text.addEventListener('focus', (event) => {
      document.querySelectorAll('.todo').forEach((t) => {
        t.style.backgroundColor = '#fff';
      });
      event.target.parentNode.style.backgroundColor = '#fea';
    });
    text.addEventListener('blur', () => {
      document.querySelectorAll('.todo').forEach((t) => {
        t.style.backgroundColor = '#fff';
      });
    });
  });

  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((chbox) => {
    chbox.addEventListener('change', renewStatus);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // if todo list is !empty, get data from it and render
  if (localStorage.getItem('myList')) {
    myList = JSON.parse(localStorage.getItem('myList'));
  } else {
    localStorage.setItem(
      'myList',
      JSON.stringify(myList.sort((a, b) => +a.index - +b.index)),
    );
  }

  renderList(myList.sort((a, b) => +a.index - +b.index));
});
console.log('bamo');
