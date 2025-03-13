import { useState } from "react";
import styles from "./LoginForm.module.css";
import validatelogin from "../../utils/ValidateLogin";
import { putLoginUser } from "../../services/userServices";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "../../../redux/userSlice";

let LoginForm = () => {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  let [Error, setError] = useState({});
  let [showErrors, setShowErrors] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerInputs = (event) => {
    const { name, value } = event.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  let handlerSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validatelogin(loginData);
    setError(validationErrors);
    setShowErrors(true);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const user = await putLoginUser(loginData);
        dispatch(userLogin(user));
        navigate("/");
      } catch (error) {
        console.error("Error al loguear:", error.message);
      }
    }
  };

  return (
    <div className={styles.contaierForm}>
      <h2>Login</h2>
      <form className={styles.inputsContainer} onSubmit={handlerSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          onChange={handlerInputs}
          value={loginData.username}
        />
        {showErrors && Error.username && (
          <p className={styles.error}>{Error.username}</p>
        )}

        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handlerInputs}
          value={loginData.password}
        />
        {showErrors && Error.password && (
          <p className={styles.error}>{Error.password}</p>
        )}

        <button type="submit">Login</button>
        <div>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
