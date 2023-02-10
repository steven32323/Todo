'use strict';
import './style.css';
import tasks from './tasks';
import { itemList } from './tasks';

const body = document.querySelector('body');
const createPage = function () {
  const html = `
<div class="container">
<div class="header"><h1>Shit List</h1></div>
<div class="body">
    <form class="modal hidden">
        <h1>Add an item to this ToDo list</h1>
        <input type="text" class="title" placeholder="title" required>
        <input type="text" class="description" placeholder="description" required>
        <input type="num" class="dueDate" placeholder="dueDate" required>
        <input type ="text" class="priority" placeholder="priority"></input>

        <button type="submit" class="btn-submit">Add item</button>
    </form>
    <div class="left">
        <button class="projectListItem">Painting</button>
    </div>
    <div class="right">
    <button class="addItem"> +</button>
    <h1>Tasks</h1>
    <div >
    <ul class="tasks">
    <li>
    <div class="listItem">Buy Paint</div> <div class="itemInfo">20-10-2010 description priority</div>
    </li>
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
const priorityInput = document.querySelector('.priority');

// Add Item button, event listener and funcion call
const addItem = document.querySelector('.addItem');
const overlay = document.querySelector('.overlay');

// selectors to control the 2 side of the page
const leftSide = document.querySelector('.left');
const taskList = document.querySelector('.tasks');

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
      <div class="listItem data_id="${i}">${item.title}</div> <div class="itemInfo" data_id="${i}">${item.dueDate} ${item.description} ${item.priority}<button class="remove">Remove</div>
      </li>
      </div>`;
    taskList.innerHTML += html;
  });
}

taskList.addEventListener('click', e => tasks.deleteTask(e), displayList());
