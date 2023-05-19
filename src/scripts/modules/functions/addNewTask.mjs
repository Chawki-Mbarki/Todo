import Task from "../classes/task.mjs";
import createTaskElement from "./createTaskElement.mjs";

export default function addNewTask(tasks, addedTask) {
  const newTaskElement = createTaskElement(addedTask.value);
  const newTask = new Task(tasks.length, addedTask.value, false, newTaskElement);
  tasks.push(newTask);

  return tasks;
}
