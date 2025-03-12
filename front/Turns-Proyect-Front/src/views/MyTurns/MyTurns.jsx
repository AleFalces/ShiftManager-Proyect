import React, { useEffect, useState } from "react";
import styles from "./MyTurns.module.css";
import { Suspense } from "react";
import { getAllTurns } from "../../services/turnsServices";
import Turn from "../../components/Turn/Turn";

let MyTurns = () => {
  const [turns, setTurns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTurns = async () => {
      try {
        const data = await getAllTurns();
        setTurns(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setTurns([]);
      }
    };

    fetchTurns();
  }, [setTurns, setError]);

  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          {error !== null ? (
            <p> Data Error</p>
          ) : (
            turns?.map((turn) => <Turn key={turn.id} turn={turn} />)
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default MyTurns;
