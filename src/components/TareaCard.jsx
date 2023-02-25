import IconCheck from "../assets/icon-check.svg";
import { useState } from "react";
const TareaCard = ({ tarea, eliminarTarea}) => {
  const [tareaFinalizada, setTareaFinalizada] = useState(false);
  const { tareaInfo, id } = tarea;
  
  return (
    <div className={`tarea-card ${tareaFinalizada && "animacion"}`}>
      <div className="tarea-centrado">
        <div
          className={`${tareaFinalizada && "tarea-hecha"} circulo-tarea`}
          onClick={() => {
            setTareaFinalizada(true)
            eliminarTarea(id)}}
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
        <p className={`${tareaFinalizada && "tarea-hecha-parrafo"}`}>
          {tareaInfo}
        </p>
      </div>
    </div>
  );
};

export default TareaCard;
