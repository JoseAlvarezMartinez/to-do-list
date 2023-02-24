import "./App.css";
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import { useState,useEffect } from "react";
function App() {
  const [tareas,setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) ?? []);
  const [darkMode,setDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem("tareas",JSON.stringify(tareas))
  },[tareas])

  function eliminarTarea(id){
    const filtrar = tareas.filter(tarea => tarea.id !== id)
    setTareas(filtrar)
  }
  return (
    <>
      <Header setTareas={setTareas} tareas={tareas} setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Tareas tareasRegistradas={tareas} darkMode={darkMode} eliminarTarea={eliminarTarea}/>
    </>
  );
}

export default App;
