import { useSelector } from "react-redux";
import styles from "./MyTurns.module.css";
import { useNavigate } from "react-router-dom";
import FilterUserTurs from "../../components/FilterUserTurns/FilterUserTurns";

const MyTurns = () => {
  const turnsToUser = useSelector((state) => state.users.user.turns);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/turns");
  };
  //
  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        {!turnsToUser.length ? (
          <div className={styles.noTurns}>
            <h2 className={styles.title}>Your reserved shifts</h2>
            <p>You don't have any appointments reserved.</p>
            <p>You can reserve one here:</p>
            <button onClick={handleRedirect}>Reserve an appointment</button>
          </div>
        ) : (
          <FilterUserTurs />
        )}
      </div>
    </div>
  );
};

export default MyTurns;
