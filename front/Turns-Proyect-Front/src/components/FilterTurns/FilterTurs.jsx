import React, { useState } from "react";
import { useSelector } from "react-redux";
import Turn from "../Turn/Turn";
import styles from "./FilterTurns.module.css";
import { useLocation } from "react-router-dom";

const FilterTurs = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const turns = useSelector((state) => state.turns);
  let turnsToUser = useSelector((state) => state.users.user.turns);
  const location = useLocation();

  const filteredTurns = selectedDay
    ? turns.filter((turn) => turn.day === selectedDay)
    : turns;

  const userFilteredTurns = selectedDay
    ? turnsToUser.filter((turn) => turn.day === selectedDay)
    : turnsToUser;

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
        {location.pathname === "/turns"
          ? filteredTurns.map((turn) => <Turn key={turn.turnId} turn={turn} />)
          : userFilteredTurns.map((turn) => (
              <Turn key={turn.turnId} turn={turn} />
            ))}
      </div>
    </div>
  );
};

export default FilterTurs;
