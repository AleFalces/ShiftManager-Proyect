import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UseTurnReserve = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.users);

  const alertTurnReserve = () => {
    if (location.pathname === "/turns") {
      const result = Swal.fire({
        title: "Reserve this Turn",
        text: `want to ${
          location.pathname !== "/myturns" ? "reserve" : "cancel"
        } the shift on day  a and time  .`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "no",
        cancelButtonText: "Yes",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      });

      if (result.isConfirmed) {
        try {
          Swal.fire("¡Reerverd!", "The user has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error", "The user could not be deleted.", "error");
        }
      }
    }
    //   ${turn.day}   ${turn.time}
    //   if (location.pathname === "/myturns") {
    //       const result = await Swal.fire({
    //         title: "¿Delete user?",
    //         text: "You will not be able to reverse this action.",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonText: "Yes, delete My USer",
    //         cancelButtonText: "No",
    //         confirmButtonColor: "#d33",
    //         cancelButtonColor: "#3085d6",
    //       });

    //       if (result.isConfirmed) {
    //         try {
    //           await deleteUser(id);
    //           dispatch(userLogout());
    //           Swal.fire("¡Deleted!", "The user has been deleted.", "success");
    //           navigate("/");
    //         } catch (error) {
    //           Swal.fire("Error", "The user could not be deleted.", "error");
    //         }
    //       }
    //     }
  };

  return alertTurnReserve;
};

export default UseTurnReserve;
