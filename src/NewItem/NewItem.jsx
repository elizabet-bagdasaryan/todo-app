import { useState } from "react";

import "./NewItem.css";
function newItem({ onSubmit, isActive }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={isActive ? "section-dark" : "section"}
      style={{
        backgroundColor: isActive ? "#25273D" : "#fff",
      }}
    >
      <div>
        <button></button>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Create a new todo…"
          style={{
            backgroundColor: isActive ? "#25273D" : "#fff",
          }}
        ></input>
      </div>
    </form>
  );
}

export default newItem;
