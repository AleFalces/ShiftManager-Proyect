import Turn from "../../components/Turn/Turn";
import { Mockturns } from "../../../Helpers/mockdata";
import { useState } from "react";
import styles from "./MyTurns.module.css";

let MyTurns = () => {
  const [turnState, setturnState] = useState(Mockturns);
  console.log("soy Turns:", turnState);
  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        {turnState.map((turn) => {
          console.log(turn.id);
          return <Turn key={turn.id} turn={turn} />;
        })}
      </div>
    </div>
  );
};

export default MyTurns;
