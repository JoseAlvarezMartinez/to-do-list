import IconCheck from "../assets/icon-check.svg";
import IconCross from "../assets/icon-cross.svg";
import { useState, useEffect } from "react";
const TareaCard = ({ tarea, eliminarTarea, tareas }) => {
  const { tareaInfo, id } = tarea;
  const [tareaFinalizada, setTareaFinalizada] = useState(tarea.check);
  useEffect(() => {
    tarea.check = tareaFinalizada;
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareaFinalizada]);
  return (
    <>
      <div className={`tarea-card ${tareaFinalizada ? "animacion" : ""}`}>
        <div className="tarea-centrado">
          <div className="task-contenedor">
            <div
              className={`${
                tareaFinalizada ? "tarea-hecha" : ""
              } circulo-tarea`}
              onClick={() => {
                setTareaFinalizada(!tareaFinalizada);
              }}
            >
              {tareaFinalizada && (
                <img
                  src={IconCheck}
                  className={"check-icon"}
                  color={"#000"}
                  alt="Check Icon"
                />
              )}
            </div>
            <p className={`${tareaFinalizada ? "tarea-hecha-parrafo" : ""}`}>
              {tareaInfo}
            </p>
          </div>
          <div className="cross">
            <img
              onClick={() => eliminarTarea(id)}
              src={IconCross}
              alt="Cross Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TareaCard;
