import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Todo from "./components/TodoList";

function App() {
  const [token, setToken] = useState("");
  const [todos, setTodos] = useState([]);
  const updateData = (data) => {
    setToken(data);
    if (token !== "") {
      getTodo(token);
      setIfLoged(false);
    }
  };

    const getTodo = (token) => {
      fetch("http://localhost:8081/todos/", {
        headers: {
          method:"Get",
          "Content-Type": "application/json",
          token: `${token}`,
        },
      })
        .then((response) => response.json())
        .then(response => console.log(response))
        .then((todos) => setTodos(todos))};
  const [ifLogend, setIfLoged] = useState(true);
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-around mt-3">
          <div className="col-5  ">{ifLogend ? <Register /> : null}</div>
          <div className="col-5 ">
            {ifLogend ? <Login updateData={updateData} /> : null}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  mt-3  justify-content-center ">
          <div>
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
