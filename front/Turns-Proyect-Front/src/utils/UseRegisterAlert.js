import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postCreateUser } from "../services/userServices";

const useRegisterAlert = () => {
  const navigate = useNavigate();

  const handleRegister = async (loginData) => {
    try {
      const user = await postCreateUser(loginData);

      Swal.fire({
        icon: "success",
        title: "User Created Successful!",
        text: "Now login to reserve Shirts!",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Data Error",
        text: error.response?.data?.message || "Invalid credentials",
      });
    }
  };

  return { handleRegister };
};

export default useRegisterAlert;
