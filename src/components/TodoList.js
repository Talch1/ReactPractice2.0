import React from "react";


import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  state = {
    tasks: [],
  };

  async componentDidMount() {
    const resp = await fetch(
      "https://nztodo.herokuapp.com/api/tasks/?format=json"
    );
    const tasks = await resp.json();
    this.setState({
      tasks,
    });
  }

  render() {
    return (
      <ul className = 'list-group'>
        {
        this.state.tasks.map(function (singleTask) {
          return <TodoItem task={singleTask} key ={singleTask.id} />;
        })}
      </ul>
    );
  }
}
