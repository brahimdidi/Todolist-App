export default function newTask(task) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskName = document.createElement('p');
  taskName.innerHTML = task.description;

  const more = document.createElement('i');
  more.classList.add('fa', 'fa-ellipsis-v');

  const taskContainer = document.createElement('li');
  taskContainer.classList.add('task-container', 'di', 'btm-bdr');

  taskContainer.appendChild(checkbox);
  taskContainer.appendChild(taskName);
  taskContainer.appendChild(more);

  return taskContainer;
}