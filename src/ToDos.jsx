import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ToDoItem from "./ToDoItem.jsx";

import "./ToDos.css";

function ToDos({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="list">
      <div className="items">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <ToDoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}

        <div id="items-clear">
          <p> items left</p>
          <p>Clear</p>
        </div>
        <div className="desk-last-section">
          <p> items left</p>
          <div>
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
          <p>Clear</p>
        </div>
      </div>
      <div className="filters">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </div>
  );
}

export default ToDos;
