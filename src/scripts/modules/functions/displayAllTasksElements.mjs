import displayTask from "./displayTaskElement.mjs"

export default function displayAllTasksElements(tasks) {
  tasks.forEach((task) => {
    displayTask(task);
  })
}