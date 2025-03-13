import { useSelector } from "react-redux";
import Turn from "../../components/Turn/Turn";
import styles from "./Myturns.module.css";

const Myturns = () => {
  let turnsToUser = useSelector((state) => state.users.user.turns);

  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        {turnsToUser.length === 0 ? (
          <div>Soy My turns</div>
        ) : (
          turnsToUser?.map((turn) => <Turn key={turn.turnId} turn={turn} />)
        )}
      </div>
    </div>
  );
};

export default Myturns;
