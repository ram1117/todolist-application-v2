import Storage from './storage.js';
import { loadTaskList, updateTaskIDs } from './taskCRUD.js';

export const updateTaskStatus = (checkBoxElement) => {
  const index = parseInt(checkBoxElement.parentNode.id, 10) - 1;
  const arr = Storage.getTaskArray();
  arr[index].completed = checkBoxElement.checked;
  Storage.setTaskArray(arr);
  checkBoxElement.nextSibling.classList.toggle('strike-through');
};

export const removeCompleted = () => {
  const arr = Storage.getTaskArray();
  Storage.setTaskArray(arr.filter((task) => task.completed !== true));
  updateTaskIDs();
  loadTaskList();
};