import React, { useEffect, useState } from "react";
import styles from "./AvailableTurns.module.css";
import { Suspense } from "react";
import { getAllTurns } from "../../services/turnsServices";
import Turn from "../../components/Turn/Turn";
import { useDispatch, useSelector } from "react-redux";
import { allTurns } from "../../../redux/turnsSlice";
import FilterTurs from "../../components/FilterTurns/FilterTurs";

let AvailableTurns = () => {
  const [error, setError] = useState(null);
  const allturns = useSelector((state) => state.turns);

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
        {error !== null && !allturns ? <p> Data Error</p> : <FilterTurs />}
      </div>
    </div>
  );
};

export default AvailableTurns;
