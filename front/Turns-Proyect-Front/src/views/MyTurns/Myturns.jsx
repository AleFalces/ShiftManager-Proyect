import { useSelector } from "react-redux";
import styles from "./Myturns.module.css";
import { useNavigate } from "react-router-dom";
import FilterUserTurs from "../../components/FilterUserTurns/FilterUserTurns";

const Myturns = () => {
  let turnsToUser = useSelector((state) => state.users.user.turns);
  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/turns");
  };
  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        {!turnsToUser.length ? (
          <div>
            <h2 className={styles.title}>Your reserved shifts </h2>
            <p>You don't have any appointments reserved.</p>
            <p>You can reserve it here: </p>
            <button onClick={handleRedirect}>reserve an appointment </button>
          </div>
        ) : (
          <div>
            <h2 className={styles.title}>Your reserved shifts </h2>
            <FilterUserTurs navigate={handleRedirect} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Myturns;
// turnsToUser?.map((turn) => <Turn key={turn.turnId} turn={turn} />
