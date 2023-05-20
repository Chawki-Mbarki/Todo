import displayAllTasksElements from "./displayAllTasksElements.mjs";
import removeTask from "./removeTask.mjs";

export default function eventsReminder(tasks){
  tasks.forEach((task) => {
    task.element.children[0].addEventListener("change", () => {
    });
    task.element.children[1].addEventListener("keyup", () => {
    });
    const trash = task.element.children[2].children[1];
    trash.addEventListener("click", () => {
      tasks = removeTask(tasks, task.index);
      displayAllTasksElements(tasks);
    });
  });
  return tasks
}