import IconCheck from "../assets/icon-check.svg";
import IconCross from "../assets/icon-cross.svg";
import { useState } from "react";
const TareaCard = ({ tarea,eliminarTarea }) => {
  const [tareaFinalizada, setTareaFinalizada] = useState(false);
  const {tareaInfo,id} = tarea
  return (
    <div className="tarea-card">
      <div className="tarea-centrado">
        <div
          className={`${tareaFinalizada && "tarea-hecha"} circulo-tarea`}
          onClick={() => setTareaFinalizada(!tareaFinalizada)}
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
        <p className={`${tareaFinalizada && "tarea-hecha-parrafo"}`}>{tareaInfo}</p>
        
      </div>
      <img onClick={() => eliminarTarea(id) } src={IconCross} className="cross-icon" alt="Cross Icon" />
    </div>
  );
};

export default TareaCard;
