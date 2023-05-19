import orderTasks from "./orderTasks.mjs";

export default function removeTask(tasks, index) {
  if(index === tasks.length-1) {
    tasks.pop();
  }else if (index === 0){
    tasks.shift();
  }else{
    tasks.splice(index, 1);
  }

  const orderedTasks = orderTasks(tasks);
  return orderedTasks;
}