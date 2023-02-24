import TareaCard from "./TareaCard";
const Tareas = ({ tareasRegistradas,setDarkMode,darkMode }) => {
  return (
    <main className={`${darkMode ? "main-dark-mode" : "main-light-mode"}`}>
      {tareasRegistradas.map((tarea,index) => (
        <TareaCard key={index} tarea={tarea}/>
      ))}
    </main>
  );
};

export default Tareas;
