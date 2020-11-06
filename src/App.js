import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Todo from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-between mt-3">
          <div className="col-6  ">
            <Register />
          </div>
          <div className="col-6 ">
            <Login />
          </div>
        </div>
      </div>
      <div className="container">
            <div className="row  mt-3  justify-content-center">
              <div>
                <Todo />
              </div>
            </div>
          </div>
    </div>
  );
}

export default App;
