import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ToDoItem from "./ToDoItem.jsx";

import "./ToDos.css";

function ToDos({ todos, toggleTodo, deleteTodo }) {
  const count = todos.length;
  console.log(count);
  const [block, setBlock] = useState(false);

  function handleZero() {
    if (todos.length === 0) {
      setBlock(true);
    }
  }

  return (
    <div
      className="list"
      style={{
        display: block ? "none" : "block",
      }}
    >
      <div className="items">
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
          <p> {count} items left</p>
          <p onClick={handleZero}>Clear</p>
        </div>
        <div className="desk-last-section">
          <p>{count} items left</p>
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
