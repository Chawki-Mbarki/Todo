import Task from "../classes/task.mjs";
import statusUpdate from "./statusUpdate.mjs";

export default function addNewTask(tasks, description, completed, element) {
  
  const newTask = new Task(tasks.length, description, completed, element);
  
  const check = newTask.element.children[0];

  const taskInput = newTask.element.children[1];

  check.addEventListener("change", () => {
    newTask.completed = statusUpdate(newTask, check, taskInput)
  });

  taskInput.addEventListener("keyup", (e) => {
    newTask.taskUpdate(e);
  });

  if (newTask.completed) {
    newTask.element.children[0].checked = true;
    newTask.element.children[1].classList.add("true");
  }
  const trash = newTask.element.children[2].children[1];

  newTask.element.addEventListener("focusin", () => {
    trash.classList.add("display-trash");
  });

  newTask.element.addEventListener("focusout", () => {
    trash.classList.remove("display-trash");
  });

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
