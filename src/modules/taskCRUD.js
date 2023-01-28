import Storage from './storage.js';
import Task from './task.js';

const taskContainer = document.querySelector('.todo-list');

export const createTaskTile = (task) => {
  const listItem = document.createElement('li');
  listItem.classList.add('todo-list-item', 'todo-list-task');
  listItem.id = task.id;
  listItem.draggable = 'true';

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('task-status-checkbox');
  checkBox.checked = task.completed;

  const taskDetail = document.createElement('input');
  taskDetail.type = 'text';
  taskDetail.classList.add('task-details');
  if (task.completed) {
    taskDetail.classList.add('strike-through');
  }
  taskDetail.value = task.details;
  taskDetail.setAttribute('readonly', true);

  const buttonDelete = document.createElement('span');
  buttonDelete.classList.add('material-icons', 'button-delete');
  buttonDelete.textContent = 'delete';
  buttonDelete.style.display = 'none';

  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-icons', 'button-more');
  iconSpan.textContent = 'more_vert';

  listItem.appendChild(checkBox);
  listItem.appendChild(taskDetail);
  listItem.appendChild(buttonDelete);
  listItem.appendChild(iconSpan);
  return listItem;
};

export const addNewTask = (text) => {
  const arr = Storage.getTaskArray();
  const task = new Task(arr.length + 1, text);
  arr.push(task);
  Storage.setTaskArray(arr);
  taskContainer.insertBefore(createTaskTile(task), taskContainer.lastElementChild);
};

export const loadTaskList = () => {
  const taskElements = document.querySelectorAll('.todo-list-task');
  for (let i = 0; i < taskElements.length; i += 1) {
    taskContainer.removeChild(taskElements[i]);
  }

  Storage.getTaskArray().forEach((task) => {
    taskContainer.insertBefore(createTaskTile(task), taskContainer.lastElementChild);
  });
};

export const updateTaskDetails = (index, newText) => {
  const arr = Storage.getTaskArray();
  arr[index].details = newText;
  Storage.setTaskArray(arr);
};

export const updateTaskIDs = () => {
  const arr = Storage.getTaskArray();
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].id = i + 1;
  }
  Storage.setTaskArray(arr);
};

export const deleteSelectedTask = (taskElement) => {
  const taskId = parseInt(taskElement.id, 10);
  const arr = Storage.getTaskArray();
  Storage.setTaskArray(arr.filter((task) => task.id !== taskId));
  updateTaskIDs();
  loadTaskList();
};
