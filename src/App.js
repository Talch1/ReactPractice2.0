import "./App.css";
import React from "react";
import TodoListFunc from "./components/TodoListFunc";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1 className = "mt-5 mb-3">TodoList</h1>
            <TodoListFunc />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
