import { useState } from "react";
import styles from "./Turns.module.css";
import PopUp from "../PopUp/PopUp";
import { useLocation } from "react-router-dom";
import { CalendarClock } from "lucide-react";

const Turn = ({ turn }) => {
  const { day, time, status } = turn;
  const location = useLocation();
  const [popUp, setPopUp] = useState(false);

  const openPopUp = () => setPopUp(true);

  return (
    <div className={styles.turn}>
      <div className={styles.icon}>
        <CalendarClock size={32} color="#005f73" />
      </div>
      <div className={styles.turnData}>
        <p className={styles.text}>Day: {day}</p>
        <p className={styles.text}>Time: {time}</p>
        {/* Esta línea se muestra siempre, pero invisible en /myturns para mantener el alto */}
        <p
          className={styles.textAvailable}
          style={{ opacity: location.pathname === "/myturns" ? 0 : 1 }}
        >
          Status: {status}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={openPopUp}>
          {location.pathname === "/myturns" ? "Cancel" : "Reserve"}
        </button>
      </div>
      {popUp && <PopUp turnData={turn} setPopUp={setPopUp} />}
    </div>
  );
};

export default Turn;
