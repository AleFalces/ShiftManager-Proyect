import { useState } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import homeText from "../../helpers/homeTexts";
import styles from "./Home.module.css";

let Home = () => {
  const [textToShow, setTextToShow] = useState(homeText);

  return (
    <div className={styles.textContainer}>
      {textToShow.map((text) => (
        <HomeCard key={text.id} text={text} />
      ))}
    </div>
  );
};

export default Home;
