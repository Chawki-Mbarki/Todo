import displayTask from "./displayTaskElement.mjs"

export default function displayAllTasksElements(tasks) {
  const todos = document.querySelector(".tasks");
  todos.innerHTML = "";
  tasks.forEach((task) => {
    displayTask(task);
  })
}