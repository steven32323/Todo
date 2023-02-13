'use strict';
import './style.css';
import tasks from './tasks';
import projects from './projects';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const body = document.querySelector('body');
const createPage = function (projectTitle = 'Example Project') {
  const html = `
<div class="container">
<div class="header"><h1>✔️ToDo</h1></div>
<div class="body">
    <form class="modal hidden">
        <h1>Add an item to this ToDo list</h1>
        <input type="text" class="title" placeholder="title" required>
        <input type="text" class="description" placeholder="description" required>
        <input type="date" class="dueDate" placeholder="dueDate" required>
        <label for="priority">Priority:</label>

        <select name="priorityInput" id="priorityInput">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="ASAP">ASAP</option>
        </select>

        <button type="submit" class="btn-submit">Add item</button>
    </form>
    <div class="left">
    <button class="newProject"> +</button>
    <ul class="projects">
        <li class="projectListItem">${projectTitle}</li>
    </ul>
    </div>
    <div class="right">
    <button class="addItem"> +</button>
    <h1>Tasks</h1>
    <div>
    <ul class="tasks">
    </ul>
    </div>
    </div>
</div>
<div class="overlay hidden"></div>
</div>
<footer class="footer"> Steven Smith 2023 <a target="_blank" href="https://github.com/steven32323"><i class="fab fa-github"></i></a></footer>`;

  body.innerHTML = html;
};
createPage();

// all the query selectors for handling the form input
const form = document.querySelector('form');
const titleInput = document.querySelector('.title');
const descriptionInput = document.querySelector('.description');
const dueDateInput = document.querySelector('.dueDate');
const priorityInput = document.querySelector('#priorityInput');
const projectDOM = document.querySelector('.projects');

// Add Item button, event listener and funcion call
const addItem = document.querySelector('.addItem');
const overlay = document.querySelector('.overlay');

// selectors to control the 2 sides of the page
const leftSide = document.querySelector('.left');
const taskList = document.querySelector('.tasks');

export let currentProject = 0;

//////////////////////////////////////////////////////////////////
// All task related functions/methods (right side of app)
addItem.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  form.classList.remove('hidden');
});
const closeModal = function () {
  overlay.classList.add('hidden');
  form.classList.add('hidden');
};
overlay.addEventListener('click', () => closeModal());

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = titleInput.value;
  const description = descriptionInput.value;
  const dueDate = dueDateInput.value;
  //   console.log(priorityInput);
  const priority = priorityInput.value;
  form.reset();

  //pass values into newItem module
  tasks.newTask(currentProject, title, description, dueDate, priority);
  //   console.log(...itemList);
  displayTasks(currentProject);
  closeModal();
});

// display values in DOM
export function displayProjects() {
  projectDOM.innerHTML = '';
  const projectsHtml = projects.projectList
    .map((project, i) => {
      return `
      <li class="projectListItem" data_project="${i}">${project.title}</li>`;
    })
    .join('');
  projectDOM.innerHTML = projectsHtml;
  // saves current state of projects/tasks to local storage
  localStorage.setItem('projects', JSON.stringify(projects.projectList));
  displayTasks();
}

export function displayTasks(projectId = 0) {
  taskList.innerHTML = '';
  const tasksHtml = projects.projectList[projectId].tasks
    .map((item, i) => {
      return `
      <li>
      <div class="listItem data_id="${i}">${item.title}</div> <div class="itemInfo" data_id="${i}">${item.dueDate} <span class="edit">Edit</span><span class="descriptionIcon">i</span> <span class="${item.priority}">${item.priority}</span><button class="remove">Remove</div>
      </li>`;
    })
    .join('');
  taskList.innerHTML = tasksHtml;
  // saves current state of projects/tasks to local storage
  localStorage.setItem('projects', JSON.stringify(projects.projectList));
}

// Edit and remove task functions
taskList.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    tasks.deleteTask(e), displayTasks();
  }
  if (e.target.classList.contains('descriptionIcon')) {
    overlay.classList.remove('hidden');
    let itemId = e.target.parentElement.getAttribute('data_id');
    let html = `
    <div class="modal details">
    <div class="closeModal">X</div>
        <div><h3>Title:</h3> ${projects.projectList[currentProject].tasks[itemId].title}</div>
        <div><h3>Description:</h3> </div>
        <div>${projects.projectList[currentProject].tasks[itemId].description}</div>
        <div><h3>Due Date:</h3> ${projects.projectList[currentProject].tasks[itemId].dueDate}</div>
        <div><h3>Priority:</h3> ${projects.projectList[currentProject].tasks[itemId].priority}</div>
    </div>`;
    body.insertAdjacentHTML('afterbegin', html);
    const closeModalWindow = document.querySelector('.closeModal');
    closeModalWindow.addEventListener('click', () => {
      const descriptionDetails = document.querySelector('.modal.details');
      descriptionDetails.remove();
      closeModal();
    });
  }
  if (e.target.classList.contains('edit')) {
    overlay.classList.remove('hidden');
    let itemId = e.target.parentElement.getAttribute('data_id');
    let html = `
      <form class="modal editor">
          <div class="closeModal">X</div>
          <h1>Edit this ToDo list</h1>
          <input type="text" class="title" value="${projects.projectList[currentProject].tasks[itemId].title}">
          <textarea class="editDescription" rows="3" style="width: 100%; box-sizing: border-box;">${projects.projectList[currentProject].tasks[itemId].description}</textarea>
          <input type="date" class="dueDate" value="${projects.projectList[currentProject].tasks[itemId].dueDate}">
          <label for="priority">Priority:</label>

          <select name="priorityInput" id="priorityInput">
              <option>${projects.projectList[currentProject].tasks[itemId].priority}</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="ASAP">ASAP</option>
          </select>

          <button type="submit" class="btn-submit">Confirm Edit</button>
  </form>`;
    body.insertAdjacentHTML('afterbegin', html);
    const closeModalWindow = document.querySelector('.closeModal');
    closeModalWindow.addEventListener('click', () => {
      const EditDetails = document.querySelector('.modal.editor');
      EditDetails.remove();
      closeModal();
      return;
    });
    const editSubmit = document.querySelector('.editor');
    const titleInput2 = document.querySelector('.title');
    const descriptionInput2 = document.querySelector('.editDescription');
    const dueDateInput2 = document.querySelector('.dueDate');
    const priorityInput2 = document.querySelector('#priorityInput');
    editSubmit.addEventListener('submit', e => {
      e.preventDefault();
      tasks.updateTask(
        currentProject,
        itemId,
        titleInput2.value,
        descriptionInput2.value,
        dueDateInput2.value,
        priorityInput2.value
      );
      displayTasks(currentProject);
      closeModal();
      editSubmit.remove();
    });
  }
});

//initialises the app
function init() {
  displayProjects();
  displayTasks();
}

init();
/////////////////////////////////////////////////////////////////////////
// All project related functions/methods (left side of app)
const addProject = document.querySelector('.newProject');
addProject.addEventListener('click', () => {
  let html = `
  <form class="modal project">
  <button class="exit">X</button>
  <p>Create a New Project</p>
    <input type="text" class ="title" placeholder="title" required>
    <button type="submit">Create</button>
  </div>
    
    `;
  overlay.classList.remove('hidden');
  body.insertAdjacentHTML('afterbegin', html);
  const close = document.querySelector('.exit');
  close.addEventListener('click', () => {
    const newProject = document.querySelector('.modal.project');
    newProject.remove();
    closeModal();
  });
  const projectAdd = document.querySelector('.project');
  projectAdd.addEventListener('submit', e => {
    e.preventDefault();
    const projectTitle = document.querySelector('.title');

    console.log(projectTitle.value);
    projects.newProject(projectTitle.value);
    const newProject = document.querySelector('.modal.project');
    newProject.remove();
    closeModal();
  });
});

// controls project buttons, changes task list and styling
projectDOM.addEventListener('click', e => {
  if (e.target.classList.contains('projectListItem')) {
    let projectId = e.target.getAttribute('data_project');
    currentProject = projectId;
    const projectBtn = document.querySelectorAll('.projectListItem');
    projectBtn.forEach(button => {
      button.addEventListener('click', e => {
        projectBtn.forEach(b => b.classList.remove('clicked'));
      });
      e.target.classList.add('clicked');
      displayTasks(projectId);
    });
  }
});
////////////////////////////////////////////////////
//  Project [
//  name
//  index

//  {
//  tasks
//  name
//  description
//  dueDate
//  Priority
//  }
//  ]

////////////////////////////////////
// TODO
// create todo project functionality, change code to link tasks into projects, then you're done!
