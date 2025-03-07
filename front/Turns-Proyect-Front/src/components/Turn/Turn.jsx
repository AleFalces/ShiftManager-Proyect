import styles from "./Turns.module.css";

let Turn = ({ turn }) => {
  const { day, time, status } = turn;
  return (
    <div className={styles.turn}>
      <div>
        <p> {day}</p>
        <p> {time} </p>
        <p>{status}</p>
      </div>
      <div className={styles.buttonContainer}>
        {status === "avalable" ? (
          <button> Cancel</button>
        ) : (
          <button> Reserve</button>
        )}
      </div>
    </div>
  );
};

export default Turn;
