/* 
   filename: sophisCode.js
   content: This code is a sophisticated and elaborate implementation of a 
            simple task manager application. It allows users to create, update,
            and delete tasks, as well as mark them as completed. It also includes
            various features such as sorting tasks, adding comments, and filtering
            tasks based on different criteria. 
*/

class Task {
  constructor(id, title, description, dueDate, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  generateId() {
    // Function to generate a unique task id
    // Implement your own logic here
    return Math.random().toString(36).substr(2, 9);
  }

  addTask(title, description, dueDate) {
    const id = this.generateId();
    const newTask = new Task(id, title, description, dueDate, false);
    this.tasks.push(newTask);
  }

  updateTask(taskId, newData) {
    const task = this.tasks.find((task) => task.id === taskId);

    if (task) {
      Object.assign(task, newData);
    }
  }

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  markTaskAsCompleted(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);

    if (task) {
      task.completed = true;
    }
  }

  getAllTasks() {
    return this.tasks;
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }

  getTasksByTitle(title) {
    return this.tasks.filter((task) => task.title.toLowerCase().includes(title.toLowerCase()));
  }

  getTasksByDueDate(dueDate) {
    return this.tasks.filter((task) => task.dueDate === dueDate);
  }

  sortByDueDate() {
    this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }

  sortByTitle() {
    this.tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}

// Usage example:
const taskManager = new TaskManager();

taskManager.addTask("Complete assignment", "Finish Math homework", "2021-04-30");
taskManager.addTask("Buy groceries", "Milk, eggs, and bread", "2021-04-25");
taskManager.addTask("Read book", "Chapter 3", "2021-05-05");

taskManager.updateTask(taskManager.tasks[1].id, { description: "Milk, eggs, bread, and cheese" });
taskManager.markTaskAsCompleted(taskManager.tasks[2].id);

taskManager.deleteTask(taskManager.tasks[0].id);

console.log(taskManager.getAllTasks());
console.log(taskManager.getCompletedTasks());
console.log(taskManager.getTasksByTitle("book"));
console.log(taskManager.getTasksByDueDate("2021-05-05"));

taskManager.sortByDueDate();
console.log(taskManager.getAllTasks());

taskManager.sortByTitle();
console.log(taskManager.getAllTasks());

// Adding comments to a task
taskManager.tasks[0].addComment("Remember to check the solution");

console.log(taskManager.tasks[0]);

// ... more code, additional features, etc.
// ... over 200 lines of code will be here