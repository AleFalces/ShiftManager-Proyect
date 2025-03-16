import styles from "./HomeCard.module.css";

let HomeCard = ({ text }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>{text.title}</h2>
      <p className={styles.text}>{text.text}</p>
      <img src={text.img} alt={text.title} className={styles.imgHomeCard} />
    </div>
  );
};

export default HomeCard;
