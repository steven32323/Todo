'use strict';
import './style.css';
import tasks from './tasks';
import { itemList, updateTask } from './tasks';
import projects from './projects';
import { projectList } from './projects';
import { isExists } from 'date-fns';

const body = document.querySelector('body');
const createPage = function (projectTitle = 'Example Project') {
  const html = `
<div class="container">
<div class="header"><h1>Shit List</h1></div>
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
        <button class="projectListItem">${projectTitle}</button>
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
</div>`;

  body.innerHTML = html;
};
createPage();

// all the query selectors for handling the form input
const form = document.querySelector('form');
const titleInput = document.querySelector('.title');
const descriptionInput = document.querySelector('.description');
const dueDateInput = document.querySelector('.dueDate');
const priorityInput = document.querySelector('#priorityInput');

// Add Item button, event listener and funcion call
const addItem = document.querySelector('.addItem');
const overlay = document.querySelector('.overlay');

// selectors to control the 2 sides of the page
const leftSide = document.querySelector('.left');
const taskList = document.querySelector('.tasks');

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
  tasks.newTask(title, description, dueDate, priority);
  //   console.log(...itemList);
  displayList();
  closeModal();
});

// display values in DOM
export function displayList() {
  taskList.innerHTML = '';
  itemList.forEach((item, i) => {
    const html = `
      <li>
      <div class="listItem data_id="${i}">${item.title}</div> <div class="itemInfo" data_id="${i}">${item.dueDate} <span class="edit">Edit</span><span class="descriptionIcon">i</span> <span class="${item.priority}">${item.priority}</span><button class="remove">Remove</div>
      </li> 
      </div>`;
    taskList.innerHTML += html;
  });
}

taskList.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    tasks.deleteTask(e), displayList();
  }
  if (e.target.classList.contains('descriptionIcon')) {
    overlay.classList.remove('hidden');
    let itemId = e.target.parentElement.getAttribute('data_id');
    let html = `
    <div class="modal details">
    <div class="closeModal">X</div>
        <div><h3>Title:</h3> ${itemList[itemId].title}</div>
        <div><h3>Description:</h3> </div>
        <div>${itemList[itemId].description}</div>
        <div><h3>Due Date:</h3> ${itemList[itemId].dueDate}</div>
        <div><h3>Priority:</h3> ${itemList[itemId].priority}</div>
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
        <input type="text" class="title" value="${itemList[itemId].title}">
        <textarea class="editDescription" rows="3" style="width: 100%; box-sizing: border-box;">${itemList[itemId].description}</textarea>
        <input type="date" class="dueDate" value="${itemList[itemId].dueDate}">
        <label for="priority">Priority:</label>

        <select name="priorityInput" id="priorityInput">
            <option value="default">${itemList[itemId].priority}</option>
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
        itemId,
        titleInput2.value,
        descriptionInput2.value,
        dueDateInput2.value,
        priorityInput2.value
      );
      displayList();
      closeModal();
      editSubmit.remove();
    });
  }
});

displayList();

/////////////////////////////////////////////////////////////////////////
// All project related functions/methods (right side of app)
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
