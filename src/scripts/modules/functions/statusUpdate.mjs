export default function statusUpdate(task, check, taskInput) {
  if (task.completed) {
    task.completed = false;
    check.checked = false;
    taskInput.classList.remove("true");
  } else {
    task.completed = true;
    check.checked = true;
    taskInput.classList.add("true");
  }
  return task.completed;
}