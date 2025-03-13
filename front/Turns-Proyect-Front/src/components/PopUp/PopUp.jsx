import { useSelector } from "react-redux";
import styles from "./PopUp.module.css";
import { Link, useLocation } from "react-router-dom";
import { putReserveTurn } from "../../services/turnsServices";

export const PopUp = ({ turnData, setPopUp }) => {
  const { day, time, turnId } = turnData;

  const location = useLocation();
  const user = useSelector((state) => state.users);

  const handldleClose = () => {
    setPopUp(false);
  };

  const handleConfirm = () => {
    const confirmData = {
      id: user.users.id,
      turnId: turnId,
    };

    putReserveTurn(confirmData);
  };

  return (
    <div className={styles.modal}>
      <p>
        wants to {location.pathname !== "/myturns" ? "reserve" : "cancel"} This
        shift?
      </p>
      <p>Day: {day}</p>
      <p> Time: {time}</p>
      <div className={styles.buttonContainer}>
        <button onClick={handldleClose}> Cancel</button>
        <br></br>
        {user.isAuthenticated === false ? (
          <Link to="/login">
            <button>you must log in</button>
          </Link>
        ) : (
          <button onClick={handleConfirm}> Confirm</button>
        )}
      </div>
    </div>
  );
};
