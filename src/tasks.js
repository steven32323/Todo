import { displayTasks, displayProjects } from '.';
import projects from './projects';

export const itemList = [
  {
    title: 'hello',
    description: 'This is a more detailed Description',
    dueDate: '2023-02-23',
    priority: 'High',
  },
];
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
    let itemId = e.target.parentElement.getAttribute('data_id');
    itemList.splice(itemId, 1);
    displayTasks();
  }
  function updateTask(itemId, title, description, dueDate, priority) {
    itemList[itemId] = { title, description, dueDate, priority };
    displayTasks();
  }
  return { newTask, deleteTask, updateTask };
})();

export default tasks;
