import { useDispatch, useSelector } from "react-redux";
import styles from "./PopUp.module.css";
import { Link, useLocation } from "react-router-dom";
import { putCancelTurn, putReserveTurn } from "../../services/turnsServices";
import { removeTurn } from "../../../redux/turnsSlice";
import { cancelTurn } from "../../../redux/userSlice";

export const PopUp = ({ turnData, setPopUp }) => {
  const { day, time, turnId } = turnData;
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.users);

  const handldleClose = () => {
    setPopUp(false);
  };

  console.log(user.users.turns);
  const handleConfirm = async () => {
    const confirmData = {
      id: user.users.id,
      turnId: turnId,
    };

    if (location.pathname === "/turns") {
      await putReserveTurn(confirmData);
      dispatch(removeTurn(turnId));
      setPopUp(false);
    } else {
      putCancelTurn(confirmData);
      dispatch(cancelTurn(turnId));
      setPopUp(false);
    }
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
