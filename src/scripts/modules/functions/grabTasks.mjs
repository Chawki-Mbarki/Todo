import addNewTask from "./addNewTask.mjs";
import createTaskElement from "./createTaskElement.mjs";

export default function grabTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  let refactoredTasks = [];
  if (tasks) {
    tasks.forEach((task) => {
      let taskElement = createTaskElement(task.description);
      console.log(taskElement)
      refactoredTasks = addNewTask( refactoredTasks, task.description, task.completed, taskElement);
    });
  }
  return refactoredTasks;
}
