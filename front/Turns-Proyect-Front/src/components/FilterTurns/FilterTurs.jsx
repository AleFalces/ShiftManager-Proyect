import React, { useState } from "react";
import { useSelector } from "react-redux";
import Turn from "../Turn/Turn";
import styles from "./FilterTurns.module.css";

const FilterTurs = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const turns = useSelector((state) => state.turns);

  const filteredTurns = selectedDay
    ? turns.filter((turn) => turn.day === selectedDay)
    : turns;

  return (
    <div>
      <select
        onChange={(e) => setSelectedDay(e.target.value)}
        value={selectedDay}
        className={styles.selector}
      >
        <option value="">All days</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>

      <div>
        {!filteredTurns.length ? (
          <p>
            There are no shifts available for that day, please choose another
            day.
          </p>
        ) : (
          filteredTurns.map((turn) => <Turn key={turn.turnId} turn={turn} />)
        )}
      </div>
    </div>
  );
};

export default FilterTurs;
