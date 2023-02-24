import "./App.css";
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import { useState } from "react";
function App() {
  const [tareas,setTareas] = useState([]);
  const [darkMode,setDarkMode] = useState(false)
  return (
    <>
      <Header setTareas={setTareas} tareas={tareas} setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Tareas tareasRegistradas={tareas} setDarkMode={setDarkMode} darkMode={darkMode}/>
    </>
  );
}

export default App;
