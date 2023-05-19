import Task from "../classes/task.mjs";
import createTaskElement from "./createTaskElement.mjs";

export default function addNewTask(tasks, addedTask) {
  const newTaskElement = createTaskElement(addedTask.value);
  const newTask = new Task(tasks.length, addedTask.value, false, newTaskElement);
  
  newTask.element.addEventListener("keyup", () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  let taskCheck = newTask.element.children[0];
  taskCheck.addEventListener("change", ()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })

  tasks.push(newTask);

  return tasks;
}
