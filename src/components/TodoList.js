import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/todos/", {
      headers: {
        method:"Get",
        "Content-Type": "application/json",
        token: "123",
      },
    })
      .then((response) => response.json())
      .then((todos) => setTodos(todos))}, []);
  return (
    <div>
      <h1>Todo</h1>
      <ul className="list-group ">
        {todos.map(function (singleTodo) {
          return <TodoItem singleTodo={singleTodo} key={singleTodo.id} />;
        })}
      </ul>
    </div>
  );
};
export default Todo;
