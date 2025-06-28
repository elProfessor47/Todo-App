import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoDateTime from "./TodoDateTime";
import TodoItems from "./TodoItems";

const TodoApp = () => {
  const todoKey = "TodoLocalStorage";
  const [tasks, setTasks] = useState(getLocalStorage);

  function getLocalStorage() {
    let storedTodos = localStorage.getItem(todoKey);
    if (!storedTodos) return [];
    return JSON.parse(storedTodos);
  }

  //handle Submit function
  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const matchedTodoItem = tasks.find(
      (currTask) => content === currTask.content
    );
    if (matchedTodoItem) return;

    setTasks((prevTasks) => [...prevTasks, { id, content, checked }]);
  };

  //setting tasks to localStorage
  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(tasks));
  },[tasks])

  //handle Checked Todo function
  const handleCheckTodo = (value) => {
    const updatedArray = tasks.map((currTask) => {
      if (currTask.content == value) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTasks(updatedArray);
  };

  //handle Delete Todo function
  const handleDeleteTodo = (value) => {
    const updatedArray = tasks.filter((currTask) => value !== currTask.content);
    setTasks(updatedArray);
  };

  // handle clear all Todo function
  const handleClearTasks = () => {
    setTasks([]);
  };

  return (
    <section className="flex flex-col items-center bg-gradient-to-br from-[#033338] to-[#3a0606] pt-[5%] pb-[3%] w-full min-h-screen overflow-x-hidden overflow-y-auto text-white">
      <header className="flex flex-col items-center justify-around">
        <h1 className="text-3xl sm:text-4xl">Todo List</h1>
        <TodoDateTime />
      </header>
      <TodoForm onFormSubmit={handleSubmit} />
      <section>
        <ul className="flex flex-col pt-8 ">
          {tasks.map((currTask) => (
            <TodoItems
              currTask={currTask.content}
              key={currTask.id}
              checked={currTask.checked}
              onDeleteTodo={handleDeleteTodo}
              onCheckedTodo={handleCheckTodo}
            />
          ))}
        </ul>
      </section>
      <section>
        <button
          className="px-8 py-2 m-3 bg-red-600 cursor-pointer rounded-xl"
          onClick={handleClearTasks}
          title="Clear all"
        >
          Clear all
        </button>
      </section>
    </section>
  );
};

export default TodoApp;
