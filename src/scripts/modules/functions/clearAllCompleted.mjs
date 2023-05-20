import addNewTask from "./addNewTask.mjs";
import createTaskElement from "./createTaskElement.mjs";
import orderTasks from "./orderTasks.mjs";

export default function clearAllCompleted(tasks) {
  tasks = tasks.filter(function(el) {
    return !el.completed;
  });


  let refactoredTasks = [];
  
  tasks.forEach((task) => {
    let taskElement = createTaskElement(task.description);
    refactoredTasks = addNewTask( refactoredTasks, task.description, task.completed, taskElement);
  });
  
  tasks = refactoredTasks;

  return tasks;

}