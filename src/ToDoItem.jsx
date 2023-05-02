import { useState } from "react";

import "./ToDoItem.css";
import CloseIcon from "@mui/icons-material/Close";
function ToDoItem({ completed, id, title, toggleTodo, deleteTodo, isActive }) {
  return (
    <div className={isActive ? "item-dark" : "item"}>
      <div className={isActive ? "item-dark-child" : "item-child"}>
        <label class="container">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <p id="texts-todos"> {title}</p>
          <span class="checkmark"></span>
          <CloseIcon id="close" onClick={() => deleteTodo(id)} />{" "}
        </label>
      </div>
      <hr />
    </div>
  );
}

export default ToDoItem;
