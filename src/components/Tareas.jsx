import TareaCard from "./TareaCard";
const Tareas = ({ tareasRegistradas,darkMode,eliminarTarea }) => {

  return (
    <main className={`${darkMode ? "main-dark-mode" : "main-light-mode"}`}>
      {tareasRegistradas.map((tarea) => (
        <TareaCard key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea}/>
      ))}
    </main>
  );
};

export default Tareas;
