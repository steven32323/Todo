// export default function hello() {
//   console.log("hello");
// }

export const itemList = [];
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
  addItems() {
    itemList.push(this);
    // console.log(itemList);
    return itemList;
  }
}

export default function newItem(title, description, dueDate, priority) {
  const item = new Todo(title, description, dueDate, priority);
  //   item.display();
  item.addItems();
}
