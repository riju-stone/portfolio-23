import React from "react";
import GrowingCircle from "./components/background/GrowingCirle";
import ThemeToggle from "./components/theme/ThemeToggle";
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <div className="App">
      <GrowingCircle />
      <ThemeToggle />
      <Cursor />
    </div>
  );
}

export default App;
