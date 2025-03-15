import React, { useState } from "react";
import { useSelector } from "react-redux";
import Turn from "../Turn/Turn";
import styles from "./FilterUserTurns.module.css";
import { useNavigate } from "react-router-dom";

const FilterUserTurs = () => {
  const [selectedDay, setSelectedDay] = useState("");
  let turnsToUser = useSelector((state) => state.users.user.turns);

  const userFilteredTurns = selectedDay
    ? turnsToUser.filter((turn) => turn.day === selectedDay)
    : turnsToUser;

  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/turns");
  };

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
        {!userFilteredTurns.length ? (
          <div>
            <p>YYou don't have any appointments booked for that day.</p>
            <p>You can reserve it here: </p>
            <button onClick={handleRedirect}>reserve an appointment</button>
          </div>
        ) : (
          userFilteredTurns.map((turn) => (
            <Turn key={turn.turnId} turn={turn} />
          ))
        )}
      </div>
    </div>
  );
};

export default FilterUserTurs;
