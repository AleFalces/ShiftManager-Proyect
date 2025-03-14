import { useState } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import homeText from "../../helpers/homeTexts";

let Home = () => {
  const [textToShow, setTextToShow] = useState(homeText);
  console.log(homeText);

  return (
    <>
      <h1>Hello</h1>
      {textToShow.map((text) => (
        <HomeCard text={text} />
      ))}
    </>
  );
};

export default Home;
