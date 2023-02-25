import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { useState, useEffect } from "react";

const Header = ({ setTareas, tareas, setDarkMode, darkMode }) => {
  const [tarea, setTarea] = useState({
    tareaInfo: "",
    check: false,
    id: generarID(),
  });
  function generarID() {
    const fecha = Date.now().toString(20);
    const random = Math.random().toString(36).substr(2);
    return fecha + random;
  }

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
    } else {
      document.body.style.backgroundColor = "rgb(219 221 240)";
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

          setTareas([...tareas, tarea]);
          setTarea({ tareaInfo: "", check: false, id: generarID() });
        }}
        className="input-center"
      >
        <input
          maxLength={40}
          className={`${darkMode ? "dark-mode-input" : "light-mode-input"}`}
          value={tarea.tareaInfo}
          onChange={(e) => setTarea({ ...tarea, tareaInfo: e.target.value })}
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    </header>
  );
};

export default Header;
