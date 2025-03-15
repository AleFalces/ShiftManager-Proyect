import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteUser } from "../services/userServices";
import { userLogout } from "../../redux/userSlice";

const useAlertUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const alertUser = async (id) => {
    const result = await Swal.fire({
      title: "¿Delete user?",
      text: "You will not be able to reverse this action.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete My USer",
      cancelButtonText: "No",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        await deleteUser(id);
        dispatch(userLogout());
        Swal.fire("¡Deleted!", "The user has been deleted.", "success");
        navigate("/");
      } catch (error) {
        Swal.fire("Error", "The user could not be deleted.", "error");
      }
    }
  };

  return alertUser;
};

export default useAlertUser;
