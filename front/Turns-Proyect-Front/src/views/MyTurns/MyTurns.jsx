import Turn from "../../components/Turn/Turn";
import { useEffect, useState } from "react";
import styles from "./MyTurns.module.css";
import axios from "axios";

let MyTurns = () => {
  const [turnState, setturnState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/turns/")
      .then((res) => setturnState(res.data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        {turnState.map((turn) => {
          return <Turn key={turn.id} turn={turn} />;
        })}
      </div>
    </div>
  );
};

export default MyTurns;
