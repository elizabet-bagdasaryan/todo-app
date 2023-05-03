import { useState, useRef } from "react";
import "./ToDoItem.css";
import CloseIcon from "@mui/icons-material/Close";

function ToDoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  isActive,
  todos,
  setTodos,
}) {
  const itemRef = useRef(null);
  const [draggedItemRef, setDraggedItemRef] = useState(null);

  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", "");
    setDraggedItemRef(itemRef);
    itemRef.current.classList.add("dragging");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    itemRef.current.classList.add("drag-over");
  };

  const handleDragLeave = (e) => {
    itemRef.current.classList.remove("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    itemRef.current.classList.remove("drag-over");
    itemRef.current.classList.remove("dragging");

    const sourceIndex = todos.findIndex(
      (todo) => todo.ref === draggedItemRef.current
    );
    const targetIndex = todos.findIndex((todo) => todo.ref === itemRef.current);
    const reorderedTodos = [...todos];
    const [removedTodo] = reorderedTodos.splice(sourceIndex, 1);
    reorderedTodos.splice(targetIndex, 0, removedTodo);

    setTodos(reorderedTodos);
  };

  return (
    <div className={isActive ? "item-dark" : "item"}>
      <div
        className={isActive ? "item-dark-child" : "item-child"}
        ref={itemRef}
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label className="container">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <p id="texts-todos"> {title}</p>
          <span className="checkmark"></span>
          <CloseIcon id="close" onClick={() => deleteTodo(id)} />{" "}
        </label>
      </div>
      <hr />
    </div>
  );
}

export default ToDoItem;
