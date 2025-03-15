import { useState } from "react";
import styles from "./LoginForm.module.css";
import validatelogin from "../../utils/ValidateLogin";
import useLoginAlert from "../../utils/UseLoginAlert";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const { handleLogin } = useLoginAlert(); // Usamos el hook aquí

  const handlerInputs = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validatelogin(loginData);
    setError(validationErrors);
    setShowErrors(true);

    if (Object.keys(validationErrors).length === 0) {
      handleLogin(loginData); // Llamamos al custom hook para manejar el login y las alertas
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
        {showErrors && error.username && (
          <p className={styles.error}>{error.username}</p>
        )}

        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handlerInputs}
          value={loginData.password}
        />
        {showErrors && error.password && (
          <p className={styles.error}>{error.password}</p>
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
