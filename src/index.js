import './style.css';
import newTask from './AddandRemove.js';

const inputTask = document.getElementById('input-task');
inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputTask.value !== '') {
    const v = e.target.value;
    e.target.value = '';
    e.preventDefault();
    newTask(v);
  }
});
