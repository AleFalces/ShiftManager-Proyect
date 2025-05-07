import { useState } from "react";
import { useSelector } from "react-redux";
import Turn from "../Turn/Turn";
import styles from "./FilterUserTurns.module.css";
import { useNavigate } from "react-router-dom";

const FilterUserTurs = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const turnsToUser = useSelector((state) => state.users.user.turns);
  const navigate = useNavigate();

  const userFilteredTurns = selectedDay
    ? turnsToUser.filter((turn) => turn.day === selectedDay)
    : turnsToUser;

  const handleRedirect = () => {
    navigate("/turns");
  };

  return (
    <div className={styles.wrapper}>
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

      <div className={styles.turnsList}>
        {!userFilteredTurns.length ? (
          <div className={styles.noTurns}>
            <h2 className={styles.title}>Your reserved shifts</h2>
            <p>You don't have any appointments booked for that day.</p>
            <p>You can reserve one here:</p>
            <button onClick={handleRedirect}>Reserve an appointment</button>
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
