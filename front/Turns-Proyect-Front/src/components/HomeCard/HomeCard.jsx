import styles from "./HomeCard.module.css";

let HomeCard = ({ text }) => {
  return (
    <div className={styles.cardContainer}>
      <h2>{text.title}</h2>
      <p>{text.text}</p>
      <img src={text.img} alt={text.title} className={styles.imgHomeCard} />
    </div>
  );
};

export default HomeCard;
