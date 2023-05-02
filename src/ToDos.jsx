import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ToDoItem from "./ToDoItem.jsx";

import "./ToDos.css";

function ToDos({ todos, toggleTodo, deleteTodo }) {
  const [filter, setFilter] = useState("all");

  const handleClearClick = () => {
    todos.forEach((todo) => deleteTodo(todo.id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    } else {
      return true;
    }
  });

  const count = filteredTodos.length;
  const itemText = count === 1 ? "item left" : "items left";

  return (
    <div className="list">
      <div className="items">
        {filteredTodos.map((todo) => {
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
          <p>
            {" "}
            {count} {itemText}
          </p>
          <p onClick={handleClearClick}>Clear</p>
        </div>
        <div className="desk-last-section">
          <p>
            {count} {itemText}
          </p>
          <div>
            <p onClick={() => setFilter("all")}>All</p>
            <p onClick={() => setFilter("active")}>Active</p>
            <p onClick={() => setFilter("completed")}>Completed</p>
          </div>
          <p onClick={handleClearClick}>Clear</p>
        </div>
      </div>
      <div className="filters">
        <p
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </p>
        <p
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </p>
        <p
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </p>
      </div>
    </div>
  );
}

export default ToDos;
