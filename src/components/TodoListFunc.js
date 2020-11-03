import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
 fetch("http://nztodo.herokuapp.com/api/tasks/?format=json")
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks));
  });
  return (
    <ul className="list-group">
      {tasks.map(function (singleTask) {
        return <TodoItem task={singleTask} key={singleTask.id} />;
      })}
    </ul>
  );
};
