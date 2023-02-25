import TareaCard from "./TareaCard";
import { useState, useEffect } from "react";
const Tareas = ({ tareasRegistradas, darkMode, eliminarTarea }) => {
  return (
    <main className={`${darkMode ? "main-dark-mode" : "main-light-mode"}`}>
      {tareasRegistradas.length ? (
        <>
          {tareasRegistradas.map((tarea) => (
            <TareaCard
              key={tarea.id}
              tarea={tarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
        </>
      ) : (
        <>
          <p className="no-tasks">No tasks have been registered yet</p>
        </>
      )}
    </main>
  );
};

export default Tareas;
