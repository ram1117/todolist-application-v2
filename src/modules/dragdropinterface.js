const container = document.querySelector('.todo-list');
let dragged = null;
let target = null;
let draggables = null;

const updateContainerDetails = () => {
  draggables = document.querySelectorAll('.todo-list-task');
  for (let i = 0; i < draggables.length; i += 1) {
    draggables[i].id = i + 1;
  }
};

const draginit = () => {
  draggables = document.querySelectorAll('.todo-list-task');
  draggables.forEach((tasktile) => {
    tasktile.addEventListener('dragstart', (event) => {
      dragged = event.target;
    });

    tasktile.addEventListener('dragover', (event) => {
      event.preventDefault();
      const node = event.target.parentNode;
      if (node.tagName === 'LI' && node.classList.contains('todo-list-task')) {
        target = node;
      }
    });
  });
  container.addEventListener('drop', (event) => {
    event.preventDefault();
    if (target !== null && dragged !== null) {
      const dragId = parseInt(dragged.id, 10);
      const targetId = parseInt(target.id, 10);
      if (dragId < targetId) {
        container.removeChild(dragged);
        container.insertBefore(dragged, target.nextSibling);
      } else if (dragId === targetId) {
        updateContainerDetails();
      } else {
        container.removeChild(dragged);
        container.insertBefore(dragged, target);
      }
      updateContainerDetails();
    }
  });
};

export default draginit;