export default function orderTasks(tasks) {
  if (tasks.length > 1) {
    for (let i = 0; i < tasks.length - 1; i += 1) {
      for (let j = i+1; j < tasks.length; j += 1) {
        if(tasks[i]["index"] > tasks[j]["index"]){
          let swap = tasks[i];
          tasks[i] = tasks[j];
          tasks[j] = swap
        }
      }
      tasks[i]["index"] = i;
    }
  }return tasks;
}
