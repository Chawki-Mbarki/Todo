export default function displayTaskElement(task) {
  const tasks = document.querySelector('.tasks');
  tasks.appendChild(task.element);
}