import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { useState, useEffect } from "react";

const Header = ({ setTareas, tareas, setDarkMode, darkMode }) => {
  function generarID() {
    const fecha = Date.now().toString(20);
    const random = Math.random().toString(36).substr(2);
    return fecha + random;
  }
  const [tarea, setTarea] = useState({
    tareaInfo: "",
  });
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
          alt="Dark Mode Icon"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          tarea.check=false;
          tarea.id = generarID();
          setTareas([...tareas, tarea]);
          setTarea({tareaInfo:""});
        }}
        className="input-center"
      >
        <input
          className={`${darkMode ? "dark-mode-input" : "light-mode-input"}`}
          value={tarea.tareaInfo}
          onChange={(e) => setTarea({ tareaInfo: e.target.value })}
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    </header>
  );
};

export default Header;
