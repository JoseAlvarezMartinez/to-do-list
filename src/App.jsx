import "./App.css";
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import { useState, useEffect } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem("tareas")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  function eliminarTarea(id) {
    const filtrar = tareas.filter((tarea) => tarea.id !== id);
    setTareas(filtrar);
  }

  return (
    <>
      <Header
        setTareas={setTareas}
        tareas={tareas}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Tareas
        tareasRegistradas={tareas}
        darkMode={darkMode}
        eliminarTarea={eliminarTarea}
        tareas={tareas}
      />
    </>
  );
}

export default App;
