import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { putLoginUser } from "../services/userServices";
import { userLogin } from "../../redux/userSlice";

const useLoginAlert = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (loginData) => {
    try {
      const user = await putLoginUser(loginData);
      dispatch(userLogin(user));

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back!",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid credentials",
      });
    }
  };

  return { handleLogin };
};

export default useLoginAlert;
