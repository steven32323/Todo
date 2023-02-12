'use strict';

import { displayList } from '.';

const projects = (() => {
  let projectList = [];
  class Project {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }
  projectList = [
    {
      title: 'New Project',
      tasks: [
        {
          title: 'Add a new project',
          description: 'the same as above, but a little bit longer',
          dueDate: '2023-10-10',
          priority: 'High',
        },
      ],
    },
  ];
  function newProject(title) {
    const project = new Project(title);
    projectList.push(project);
    displayList();
  }
  return { newProject, projectList };
})();

export default projects;
