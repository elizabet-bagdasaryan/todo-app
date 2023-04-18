import { useState } from "react";

import "./ToDoItem.css";
import CloseIcon from "@mui/icons-material/Close";
function ToDoItem() {
  return (
    <div className="item">
      <div>
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <CloseIcon id="close" />
      </div>
      <hr />
    </div>
  );
}

export default ToDoItem;
