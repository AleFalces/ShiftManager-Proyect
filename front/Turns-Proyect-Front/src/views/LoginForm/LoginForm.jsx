import { useState } from "react";
import styles from "./LoginForm.module.css";
import validatelogin from "../../utils/ValidateLogin";

let LoginForm = () => {
  const [login, setlogin] = useState({
    username: "",
    password: "",
  });
  let [Error, setError] = useState({});
  let [showErrors, setShowErrors] = useState(false);

  const handlerInputs = (event) => {
    const { name, value } = event.target;
    setlogin({
      ...login,
      [name]: value,
    });
  };

  let handlerSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validatelogin(login);
    setError(validationErrors);
    setShowErrors(true);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login successful");
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
          value={login.username}
        />
        {showErrors && Error.username && (
          <p className={styles.error}>{Error.username}</p>
        )}

        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handlerInputs}
          value={login.password}
        />
        {showErrors && Error.password && (
          <p className={styles.error}>{Error.password}</p>
        )}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
