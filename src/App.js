import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";

function App() {
  const [token, setToken] = useState("123");

  const updateData = (token) => {
    console.log(token);
    setToken(token);
    if(token !== undefined){ setIfLoged(false);}
  };

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
            <TodoList token={token} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
