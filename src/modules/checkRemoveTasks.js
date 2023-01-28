import Storage from "./storage";
import { loadTaskList, updateTaskIDs } from "./taskCRUD";

export const updateTaskStatus = (checkBoxElement) =>{
const index = parseInt(checkBoxElement.parentNode.id,10)-1;
const arr = Storage.getTaskArray();
arr[index].completed = checkBoxElement.checked;
Storage.setTaskArray(arr);
checkBoxElement.nextSibling.classList.toggle('strike-through');
}

export const removeCompleted = () =>{
  const arr = Storage.getTaskArray();
  Storage.setTaskArray(arr.filter(task=>{ return task.completed!==true}));
  updateTaskIDs();
  loadTaskList();
}