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
  const { handleLogin } = useLoginAlert();

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
      handleLogin(loginData);
    }
  };

  return (
    <div className={styles.containerForm}>
      <h2>Login</h2>
      <form className={styles.inputsContainer} onSubmit={handlerSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={handlerInputs}
          value={loginData.username}
        />
        {showErrors && error.username && (
          <p className={styles.error}>{error.username}</p>
        )}

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handlerInputs}
          value={loginData.password}
        />
        {showErrors && error.password && (
          <p className={styles.error}>{error.password}</p>
        )}

        <button type="submit">Login</button>
        <p className={styles.text}>
          Don't have an account?{" "}
          <Link to="/register" className={styles.link}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
