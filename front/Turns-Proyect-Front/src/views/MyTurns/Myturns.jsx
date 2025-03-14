import { useSelector } from "react-redux";
import Turn from "../../components/Turn/Turn";
import styles from "./Myturns.module.css";
import { useNavigate } from "react-router-dom";

const Myturns = () => {
  let navigate = useNavigate();
  let turnsToUser = useSelector((state) => state.users.user.turns);
  const handleRedirect = () => {
    navigate("/turns");
  };
  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        {!turnsToUser.length ? (
          <div>
            <p>You don't have any appointments reserved.</p>
            <p>You can reserve it here: </p>
            <button onClick={handleRedirect}>reserve an appointment </button>
          </div>
        ) : (
          turnsToUser?.map((turn) => <Turn key={turn.turnId} turn={turn} />)
        )}
      </div>
    </div>
  );
};

export default Myturns;
