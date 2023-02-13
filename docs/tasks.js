import { displayTasks, currentProject } from '.';
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
  function newTask(currentProject, title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    projects.projectList[currentProject].tasks.push(task);
  }
  function deleteTask(e) {
    let itemId = e.target.parentElement.getAttribute('data_id');
    projects.projectList[currentProject].tasks.splice(itemId, 1);
    displayTasks(currentProject);
  }
  function updateTask(
    currentProject,
    itemId,
    title,
    description,
    dueDate,
    priority
  ) {
    projects.projectList[currentProject].tasks[itemId] = {
      title,
      description,
      dueDate,
      priority,
    };
    displayTasks(currentProject);
  }
  return { newTask, deleteTask, updateTask };
})();

export default tasks;
