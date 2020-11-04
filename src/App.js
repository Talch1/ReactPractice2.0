import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Register />
          </div>{" "}
          <div className="col-6">
            <Login />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="m-t-10">
                <Todo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
