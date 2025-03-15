import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useLocation, Link } from "react-router-dom";
import { putCancelTurn, putReserveTurn } from "../../services/turnsServices";
import { removeTurn } from "../../../redux/turnsSlice";
import { cancelTurn, reserveTurn } from "../../../redux/userSlice";
import { useEffect } from "react";

const PopUp = ({ turnData, setPopUp }) => {
  const { day, time, turnId } = turnData;
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.users);

  useEffect(() => {
    const showAlert = async () => {
      if (!user.isAuthenticated) {
        Swal.fire({
          icon: "info",
          title: "You must log in",
          text: "Please log in to confirm the shift.",
          confirmButtonText: "Go to login",
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login"; // Redirige manualmente
          }
        });

        setPopUp(false); // Cierra el PopUp
        return;
      }

      const isReserving = location.pathname === "/turns";
      const action = isReserving ? "reserve" : "cancel";

      Swal.fire({
        title: `Do you want to ${action} this shift?`,
        html: `<p>Day: <b>${day}</b></p><p>Time: <b>${time}</b></p>`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: `Yes, ${action}`,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const confirmData = { id: user.user.id, turnId };

            if (isReserving) {
              await putReserveTurn(confirmData);
              dispatch(removeTurn(turnId));
              dispatch(reserveTurn(turnData));
            } else {
              await putCancelTurn(confirmData);
              dispatch(cancelTurn(turnId));
            }

            Swal.fire({
              icon: "success",
              title: `Shift ${isReserving ? "reserved" : "canceled"}!`,
              text: "Your action was successful.",
            });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "An error occurred while processing your request.",
            });
          }
        }

        setPopUp(false); // Cierra el PopUp después de la acción
      });
    };

    showAlert();
  }, [turnData, setPopUp, dispatch, location.pathname, user]);

  return null; // No renderiza nada, solo ejecuta el alert
};

export default PopUp;
