import orderTasks from "./orderTasks.mjs";

export default function removeTask(tasks, index) {
  tasks.splice(index, 1)
  const orderedTasks = orderTasks(tasks);
  console.log(orderedTasks)
  return orderedTasks;
}