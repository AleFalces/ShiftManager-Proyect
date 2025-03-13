import { useState } from "react";
import styles from "./Turns.module.css";
import { PopUp } from "../PopUp/PopUp";
import { useLocation } from "react-router-dom";

let Turn = ({ turn }) => {
  const { day, time, status } = turn;
  const location = useLocation();
  const [popUp, setPopUp] = useState(false);

  const openPopUp = () => {
    setPopUp(true);
  };

  return (
    <div className={styles.turn}>
      <div>
        <p> {day}</p>
        <p> {time} </p>
        {location.pathname !== "/myturns" && <p>{status}</p>}
      </div>
      <div className={styles.buttonContainer}>
        {location.pathname === "/myturns" ? (
          <button onClick={openPopUp}> Cancel</button>
        ) : (
          <button onClick={openPopUp}> Reserve</button>
        )}
        {popUp === true && <PopUp turnData={turn} setPopUp={setPopUp} />}
      </div>
    </div>
  );
};

export default Turn;
