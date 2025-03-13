import { useLocation } from "react-router-dom";

export const PopUp = ({ turnData, setPopUp }) => {
  const { day, time } = turnData;

  const location = useLocation();

  const handldleClose = () => {
    setPopUp(false);
  };

  const handleConfirm = () => {};

  return (
    <div>
      <p>
        wants to {location.pathname !== "/myturns" ? "reserve" : "cancel"} rhis
        shift?
      </p>
      <p>Day: {day}</p>
      <p> Time: {time}</p>
      <div>
        <button onClick={handldleClose}> Cancel</button>
        <button onClick={handleConfirm}> Confirm</button>
      </div>
    </div>
  );
};
