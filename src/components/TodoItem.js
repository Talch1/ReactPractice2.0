import React from "react";

export default ({ singleTodo }) => {
  
  return (
    <li className="list-group-item " >
      <h5> {singleTodo.title} </h5>
       <p>{singleTodo.description}</p> 
    </li>
  );
};
