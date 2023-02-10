import { displayList } from '.';

export const itemList = [];
const tasks = (() => {
  class Task {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }
  function newTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    itemList.push(task);
  }
  function deleteTask(e) {
    if (e.target.classList.contains('remove')) {
      let itemId = e.target.parentElement.getAttribute('data_id');
      itemList.splice(itemId, 1);
      displayList();
    }
  }
  return { newTask, deleteTask };
})();

export default tasks;
