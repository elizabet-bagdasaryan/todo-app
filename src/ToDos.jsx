import { useState } from "react";

import ToDoItem from "./ToDoItem.jsx";

import "./ToDos.css";

function ToDos({ todos, toggleTodo, deleteTodo, isActive }) {
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
  const [selectedElement, setSelectedElement] = useState(null);
  const handleClick = (id) => {
    setSelectedElement(id);
  };

  const allFunc = () => {
    setFilter("all");
    handleClick(1);
  };
  const activeFunc = () => {
    setFilter("active");
    handleClick(2);
  };

  const completedFunc = () => {
    setFilter("completed");
    handleClick(3);
  };

  return (
    <div
      className="list"
      style={{
        backgroundColor: isActive ? "#25273D" : "#fff",
      }}
    >
      <div className={isActive ? "items-dark" : "items"}>
        {filteredTodos.map((todo) => {
          return (
            <ToDoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              isActive={isActive}
            />
          );
          <hr />;
        })}

        <div id="items-clear">
          <p>
            {" "}
            {count} {itemText}
          </p>
          <p onClick={handleClearClick}>Clear</p>
        </div>
        <div
          className={isActive ? "desk-last-section-dark" : "desk-last-section"}
        >
          <p>
            {count} {itemText}
          </p>
          <div>
            <p
              onClick={allFunc}
              className={selectedElement === 1 ? "selected" : ""}
            >
              All
            </p>
            <p
              onClick={activeFunc}
              className={selectedElement === 2 ? "selected" : ""}
            >
              Active
            </p>
            <p
              onClick={completedFunc}
              className={selectedElement === 3 ? "selected" : ""}
            >
              Completed
            </p>
          </div>
          <p onClick={handleClearClick}>Clear</p>
        </div>
      </div>
      <div className={isActive ? "filters-dark" : "filters"}>
        <p
          onClick={allFunc}
          className={selectedElement === 1 ? "selected" : ""}
        >
          All
        </p>
        <p
          onClick={activeFunc}
          className={selectedElement === 2 ? "selected" : ""}
        >
          Active
        </p>
        <p
          onClick={completedFunc}
          className={selectedElement === 3 ? "selected" : ""}
        >
          Completed
        </p>
      </div>
    </div>
  );
}

export default ToDos;
