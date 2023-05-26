import Todo from "../classes/todo.mjs";
import clearAllCompleted from "../functions/clearAllCompleted.mjs";
import createTodoElement from "../functions/createTodoElement.mjs";
import orderTodos from "../functions/orderTodos.mjs";

describe("clear all completed tasks", () => {
  test('clearing "SOME" tasks', () => {
    const task1 = new Todo(0, "task1", false, createTodoElement("taks1"));
    const task2 = new Todo(1, "task2", true, createTodoElement("taks2"));
    const task3 = new Todo(2, "task3", false, createTodoElement("taks3"));
    const task4 = new Todo(3, "task4", true, createTodoElement("taks4"));
    const task5 = new Todo(4, "task5", false, createTodoElement("taks5"));
    let t1 = [task1, task2, task3, task4, task5];
    t1 = clearAllCompleted(t1);
    expect(t1).toEqual(orderTodos([task1, task3, task5]));
  });

  test('clearing "ALL" tasks', () => {
    const task1 = new Todo(0, "task1", true, createTodoElement("taks1"));
    const task2 = new Todo(1, "task2", true, createTodoElement("taks2"));
    const task3 = new Todo(2, "task3", true, createTodoElement("taks3"));
    const task4 = new Todo(3, "task4", true, createTodoElement("taks4"));
    const task5 = new Todo(4, "task5", true, createTodoElement("taks5"));
    let t2 = [task1, task2, task3, task4, task5];
    t2 = clearAllCompleted(t2);
    expect(t2).toEqual([]);
  });

  test('clearing " NO " tasks', () => {
    const task1 = new Todo(0, "task1", false, createTodoElement("taks1"));
    const task2 = new Todo(1, "task2", false, createTodoElement("taks2"));
    const task3 = new Todo(2, "task3", false, createTodoElement("taks3"));
    const task4 = new Todo(3, "task4", false, createTodoElement("taks4"));
    const task5 = new Todo(4, "task5", false, createTodoElement("taks5"));
    let t3 = [task1, task2, task3, task4, task5];
    t3 = clearAllCompleted(t3);
    expect(t3).toEqual(orderTodos([task1, task2, task3, task4, task5]));
  });
});
