import styles from "./HomeCard.module.css";
import { Sparkles } from "lucide-react";

let HomeCard = ({ text }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconWrapper}>
        <Sparkles size={28} className={styles.icon} />
      </div>
      <h2 className={styles.title}>{text.title}</h2>
      <p className={styles.text}>{text.text}</p>
      <img src={text.img} alt={text.title} className={styles.imgHomeCard} />
    </div>
  );
};

export default HomeCard;
