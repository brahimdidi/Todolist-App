import './style.css';

const myList = [
  {
    description: 'take your breakfast',
    completed: false,
    index: 0,
  },
  {
    description: 'study your books',
    completed: false,
    index: 1,
  },
  {
    description: 'make the dinner',
    completed: false,
    index: 2,
  },
];

const list = document.getElementById('licontainer');

// add items to dom
const addNew = (array, element) => {
  array.forEach((item) => {
    const listItems = document.createElement('li');
    listItems.classList.add('liststyle');
    element.appendChild(listItems);
    listItems.innerHTML = `
    <input type="checkbox" class = "check" id="${item.index}">
    <label for="${item.index}">${item.description}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    <i class="fas fa-ellipsis-v"></i>
    `;
  });
};
addNew(myList, list);
