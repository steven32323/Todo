'use strict';

import { displayTasks, displayProjects } from '.';

const projects = (() => {
  let projectList = [];
  class Project {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }
  // if local storage is empty, generates a sample project with tasks
  if (localStorage.getItem('projects') === null) {
    projectList = [
      {
        title: 'New Project',
        tasks: [
          {
            title: 'Delete a new project',
            description: 'the same as above, but a little bit longer',
            dueDate: '2023-10-10',
            priority: 'High',
          },
        ],
      },
      {
        title: 'New Project part 2',
        tasks: [
          {
            title: 'Add a new project',
            description:
              'not the same as above, but also a little bit longer too',
            dueDate: '2022-01-11',
            priority: 'Low',
          },
        ],
      },
    ];
  } else {
    // otherwise, loads projects from local storage
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    projectList = storedProjects;
  }
  function newProject(title) {
    const project = new Project(title);
    projectList.push(project);
    displayProjects();
  }
  return { newProject, projectList };
})();

export default projects;
