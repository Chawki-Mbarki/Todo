import orderTasks from "./orderTasks.mjs";

export default function removeTask(tasks, index) {
  const orderedTasks = orderTasks(tasks.splice(index));
  return orderedTasks
}