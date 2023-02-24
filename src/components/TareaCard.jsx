import IconCheck from "../assets/icon-check.svg";
import IconCross from "../assets/icon-cross.svg";
import { useState } from "react";
const TareaCard = ({ tarea }) => {
  const [tareaFinalizada, setTareaFinalizada] = useState(false);
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
              alt=""
            />
          )}
        </div>
        <p className={`${tareaFinalizada && "tarea-hecha-parrafo"}`}>{tarea}</p>
        <div className="linea"></div>
      </div>
      <img src={IconCross} className="cross-icon" alt="" />
    </div>
  );
};

export default TareaCard;
