// export default function hello() {
//   console.log("hello");
// }

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  display() {
    console.log(this.title, this.description, this.dueDate, this.priority);
  }
}

export default function newItem() {
  const item = new Todo("Clean", "Hoover & Mop", "25/12/23", "high");
  item.display();
}
