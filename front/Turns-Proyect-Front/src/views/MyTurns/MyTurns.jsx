import React, { useEffect, useState } from "react";
import styles from "./MyTurns.module.css";
import { Suspense } from "react";
import { getAllTurns } from "../../services/turnsServices";
import Turn from "../../components/Turn/Turn";
import { useDispatch, useSelector } from "react-redux";
import { allTurns } from "../../../redux/turnsSlice";

let MyTurns = () => {
  const [error, setError] = useState(null);
  const turns = useSelector((state) => state.turns.turns);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTurns = async () => {
      try {
        const data = await getAllTurns();
        dispatch(allTurns(data));
        setError(null);
      } catch (error) {
        setError(error.message);
        dispatch(allTurns([]));
      }
    };

    fetchTurns();
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          {error !== null ? (
            <p> Data Error</p>
          ) : (
            turns?.map((turn) => <Turn key={turn.turnId} turn={turn} />)
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default MyTurns;
