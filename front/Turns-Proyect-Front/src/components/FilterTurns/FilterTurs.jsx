import React, { useState } from "react";
import { useSelector } from "react-redux";
import Turn from "../Turn/Turn";
import styles from "./FilterTurns.module.css";
import { CalendarDays } from "lucide-react";

const FilterTurs = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const turns = useSelector((state) => state.turns);

  const filteredTurns = selectedDay
    ? turns.filter((turn) => turn.day === selectedDay)
    : turns;

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "15:00",
    "16:00",
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <div>
      <div className={styles.selectorContainer}>
        <CalendarDays size={24} color="#005f73" className={styles.icon} />
        <select
          onChange={(e) => setSelectedDay(e.target.value)}
          value={selectedDay}
          className={styles.selector}
        >
          <option value="">All days</option>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      {/* Si hay día seleccionado o estamos en mobile, usamos vista lista */}
      {selectedDay !== "" || isMobile ? (
        <div className={styles.listView}>
          {selectedDay === "" &&
            daysOfWeek.map((day) => {
              const turnsForDay = filteredTurns
                .filter((turn) => turn.day === day)
                .sort((a, b) => a.time.localeCompare(b.time));

              return (
                <div key={day} className={styles.mobileDayGroup}>
                  <h4>{day}</h4>
                  {turnsForDay.length === 0 ? (
                    <p>No shifts available</p>
                  ) : (
                    turnsForDay.map((turn) => (
                      <Turn key={turn.turnId} turn={turn} />
                    ))
                  )}
                </div>
              );
            })}

          {selectedDay !== "" &&
            filteredTurns
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((turn) => <Turn key={turn.turnId} turn={turn} />)}

          {selectedDay !== "" && filteredTurns.length === 0 && (
            <p>
              There are no shifts available for that day, please choose another
              day.
            </p>
          )}
        </div>
      ) : (
        // Vista GRID para escritorio
        <div className={`${styles.gridContainer} ${styles.allTurnsView}`}>
          <div className={styles.headerRow}>
            <div className={styles.timeSlotHeader}>Time</div>
            {daysOfWeek.map((day) => (
              <div key={day} className={styles.dayHeader}>
                {day}
              </div>
            ))}
          </div>

          {timeSlots.map((hour) => (
            <div key={hour} className={styles.row}>
              <div className={styles.timeSlot}>{hour}</div>
              {daysOfWeek.map((day) => {
                const turn = turns.find(
                  (t) => t.day === day && t.time === hour
                );
                return (
                  <div key={`${day}-${hour}`} className={styles.cell}>
                    {turn ? <Turn turn={turn} /> : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterTurs;
