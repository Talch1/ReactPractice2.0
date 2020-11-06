import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([{
    title:'Do somesing',
    descriprion:'Do somesing NoW!!!!!!!'
  }]);


  return (
    <div>
      <h1>Todo</h1>
      <ul className="list-group ">
      {todos.map(function(singleTodo)
      {return <TodoItem singleTodo = {singleTodo}  key={singleTodo.id}/> }) }  
      </ul>
    </div>
  );
};
export default Todo;
