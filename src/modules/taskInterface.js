import { addNewTask, loadTaskList, updateTaskDetails,deleteSelectedTask } from './taskCRUD.js';

const taskContainer = document.querySelector('.todo-list');
const taskInputField = document.querySelector('#todolist-input');
const enterButton = document.querySelector('#enter-button');

let editTaskElement = null;

export const initListeners = () => {
  loadTaskList();
  taskInputField.onkeyup = (event) => {
    if (event.key == 'Enter' && taskInputField.value !== '') {
      addNewTask(taskInputField.value);
      taskInputField.value = '';
    }
  };
  enterButton.onclick = () => {
    if (taskInputField.value !== '') {
      addNewTask(taskInputField.value);
      taskInputField.value = '';
    }
  }

  taskContainer.addEventListener('long-press', (event) => {
    if (event.target.classList.contains('button-more')) {
      editTaskElement = event.target.parentNode;
      createEditWindow(editTaskElement);
      editTaskElement.onkeyup = (event) => {
        if (event.key === 'Enter') {
          const inputField = editTaskElement.querySelector('.task-details');
          updateTaskDetails(parseInt(editTaskElement.id, 10) - 1, inputField.value);
          resetEditWindow(editTaskElement);
        }
      };
      const deleteBtn = editTaskElement.querySelector('.button-delete');
      deleteBtn.onclick = (event) => {
          deleteSelectedTask(editTaskElement);
      }
    }
  });

  document.body.onkeyup = (event) => {
    if (event.key == 'Escape' && editTaskElement !== null) {
      resetEditWindow(editTaskElement);
    }
  };

}

const createEditWindow = (taskElement) => {
  taskElement.style.background = '#e6ffe6';
  taskElement.lastElementChild.style.display = 'none';
  const taskElementInput = taskElement.querySelector('.task-details');
  taskElementInput.removeAttribute('readonly');
  taskElementInput.focus();
  taskElementInput.style.background = '#e6ffe6';
  const listItemDelButton = taskElement.querySelector('.button-delete');
  listItemDelButton.style.display = 'inline';
}

const resetEditWindow = (taskElement) => {
  taskElement.style.background = '#fff';
  taskElement.lastElementChild.style.display = 'inline';
  const taskElementInput = taskElement.querySelector('.task-details');
  taskElementInput.setAttribute('readonly', true);
  taskElementInput.style.background = '#fff';
  const listItemDelButton = taskElement.querySelector('.button-delete');
  listItemDelButton.style.display = 'none';
}

