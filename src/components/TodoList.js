import React, {useState,useEffect} from "react";
import TodoItem from "./TodoItem";
import TodoService from "./services/todos.service"

export default ({token}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoService.getTodos(token).then(((newTask)=>{
      setTodos(newTask);  
    }))
  }, [token]);

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

