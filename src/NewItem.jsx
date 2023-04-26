import { useState } from "react";

import "./NewItem.css";
function newItem({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form className="section" onSubmit={handleSubmit}>
      <div>
        <button></button>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Create a new todo…"
        ></input>
      </div>
    </form>
  );
}

export default newItem;
