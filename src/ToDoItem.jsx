import { useState } from "react";

import "./ToDoItem.css";
import CloseIcon from "@mui/icons-material/Close";
function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <div className="item">
      <div>
        <label class="container">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <p id="texts-todos"> {title}</p>
          <span class="checkmark"></span>
        </label>
        <CloseIcon id="close" onClick={() => deleteTodo(id)} />
      </div>
      <hr />
    </div>
  );
}

export default ToDoItem;
