import { useState } from "react";

import NewItem from "./NewItem.jsx";
import ToDos from "./ToDos.jsx";
import "./App.css";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/LightMode";
function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO </h1>
        <Brightness3Icon id="moon" />
      </header>
      <NewItem />
      <ToDos />
    </div>
  );
}

export default App;
