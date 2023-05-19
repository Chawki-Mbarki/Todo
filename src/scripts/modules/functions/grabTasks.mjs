import Task from "../classes/task.mjs";
import createTaskElement from "./createTaskElement.mjs";

export default function grabTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let reconstructedTasks = [];
  if (!tasks) {
    reconstructedTasks = [];
  }else {
    tasks.forEach((task) => {
      let index = task.index;
      let description = task.description;
      let completed = task.completed;
      let element = createTaskElement(description);
      
      task = new Task(index, description, completed, element)

      reconstructedTasks.push(task);
    })

  }
  return reconstructedTasks
}