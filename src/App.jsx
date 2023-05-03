import { useState } from "react";
import { useEffect } from "react";
import LightMobile from "./assets/light-mobile.jpg";
import DarkMobile from "./assets/dark-mobile.jpg";

import NewItem from "./NewItem/NewItem.jsx";
import ToDos from "./ToDos/ToDos.jsx";
import "./App.css";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/LightMode";
function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((current) => !current);
  }
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div
      className="page"
      style={{
        backgroundColor: isActive ? "#171823" : "white",
      }}
    >
      <div className={isActive ? "App-dark" : "App"}>
        <div className="main">
          <header>
            <h1>TODO </h1>
            <Brightness3Icon
              id="moon"
              style={{
                display: isActive ? "none" : "block",
              }}
              onClick={handleClick}
            />
            <LightModeIcon
              id="sun"
              style={{
                display: isActive ? "block" : "none",
              }}
              onClick={handleClick}
            />
          </header>
          <NewItem onSubmit={addTodo} isActive={isActive} />
          <ToDos
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            isActive={isActive}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
