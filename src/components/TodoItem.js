import React from "react";

export default ({ singleTodo }) => {
    console.log(singleTodo);
  return (
    <li className="list-group-item " >
      <h5> {singleTodo.title} </h5>
       <p>{singleTodo.descriprion}</p> 
    </li>
  );
};
