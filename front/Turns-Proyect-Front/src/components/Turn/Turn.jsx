import { useState } from "react";
import styles from "./Turns.module.css";
import { PopUp } from "../PopUp/PopUp";

let Turn = ({ turn }) => {
  const { day, time, status } = turn;
  const [popUp, setPopUp] = useState(false);

  const openPopUp = () => {
    setPopUp(true);
  };

  return (
    <div className={styles.turn}>
      <div>
        <p> {day}</p>
        <p> {time} </p>
        <p>{status}</p>
      </div>
      <div className={styles.buttonContainer}>
        {status === "avalable" ? (
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
