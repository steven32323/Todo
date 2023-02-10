'use strict';
import './style.css';
import newItem from './addItem';

const body = document.querySelector('body');

const html = `
<div class="container">
<div class="header"><h1>Shit List</h1></div>
<div class="body">
    <form class="modal hidden">
        <h1>Add an item to this ToDo list</h1>
        <input type="text" class="title" placeholder=title required>
        <input type="text" class="decription" placeholder="decription" required>
        <input type="num" class="dueDate" placeholder="dueDate" required>
        <input type ="text" class="priority" placeholder="priority"></input>

        <button type="submit" class="btn-submit">Add item</button>
    </form>
    <div class="left">
        <button class="projectListItem">Painting</button>
    </div>
    <div class="right">
    <ul>
    <button class="listItem">Buy Paint</button>
    <button class="listItem">Clean Wall</button>
    <button class="listItem">Cover the floor with an old sheet</button>
    <button class="listItem">Paint the walls</button>
    </ul>
    <button class="addItem"> +</button>
    </div>
</div>
<div class="overlay hidden"></div>
</div>`;

body.innerHTML = html;

const form = document.querySelector('form');

// Add Item button, event listener and funcion call
const addItem = document.querySelector('.addItem');
const overlay = document.querySelector('.overlay');
addItem.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  form.classList.remove('hidden');
});
const closeModal = function () {
  overlay.classList.add('hidden');
  form.classList.add('hidden');
};
overlay.addEventListener('click', () => closeModal());
