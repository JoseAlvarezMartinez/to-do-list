import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { useState, useEffect } from "react";

const Header = ({ setTareas, tareas,setDarkMode,darkMode }) => {
  const [tarea, setTarea] = useState("");
   useEffect(() => {
     if (darkMode) {
       document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
     } else {
       document.body.style.backgroundColor = "hsl(236, 33%, 92%)";
     }
   }, [darkMode]);

  return (
    <header
      className={`${
        darkMode ? "dark-mode-background" : "light-mode-background"
      }`}
    >
      <div className="contenedor-header">
        <h1>{"t o d o".toUpperCase()}</h1>

        <img
          onClick={() => setDarkMode(!darkMode)}
          src={darkMode ? SunIcon : MoonIcon}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTareas([...tareas, tarea]);
          setTarea("");
        }}
        className="input-center"
      >
        <input
          className={`${darkMode ? "dark-mode-input" : "light-mode-input"}`}
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    </header>
  );
};

export default Header;
